var disabled = false;
var currentIndex;

var supportsWheel = false;
var enableFunction;

var sections;

if (typeof(currentPage) == 'undefined') {
	currentPage = "";
}

function onLoadPage() {
	sections = [].slice.call(document.getElementsByClassName('old-section')).concat([].slice.call(document.getElementsByClassName('section')));
	currentIndex = 0;
	disabled = false;
}
onLoadPage();

function onUnloadPage() {
	disabled = true;
}

function is_touch_device() {
	return 'ontouchstart' in window // works on most browsers
		||
		navigator.maxTouchPoints; // works on IE10/11 and Surface
};

for (var i = 0; i < sections.length; i++) {

	var uriEncodedSectionId = sections[i].id;
	var uriEncodedWindowLocationHash = decodeURI(window.location.hash.substring(1));
	if (uriEncodedSectionId == uriEncodedWindowLocationHash) {
		currentIndex = i;
		break;
	}
}

document.addEventListener('imagesLoaded', function() {
	setTimeout(function() {
		console.log("Heading towards: " + sections[currentIndex].id);
		window.scrollTo(0, sections[currentIndex].offsetTop);
	}, 0);
	setTimeout(function() {

		if (!is_touch_device()) {
			document.addEventListener('wheel', OnWheelScroll);
			document.addEventListener('mousewheel', OnWheelScroll);
			document.addEventListener('DOMMouseScroll', OnWheelScroll);
		} else {
			$(document.body).on('touchstart', function(e) {

				var canCallEvent = true;
				var swipe = e.originalEvent.touches,
					start = swipe[0].screenY;
				console.log("TOUCH");
				$(this).on('touchmove', function(e) {

						if (!canCallEvent)
							return;
						var contact = e.originalEvent.touches,
							end = contact[0].screenY,
							distance = end - start;

						if (distance < -50) {
							console.log("up");
							scroll(1);
							canCallEvent = false;
						}
						// up
						if (distance > 50) { // down
							console.log("down");
							scroll(-1);
							canCallEvent = false;
						}
					})
					.on('touchend', function() {

						$(this).off('touchmove touchend');
					});
			});
		}
	}, 300);
});


var userAgent = navigator.userAgent.toLowerCase();
var isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent);
var isIOSChrome = /crios/.test(userAgent);

if (!isAndroidChrome && !isIOSChrome) {
	window.onresize = function(event) {
		window.scrollTo(0, sections[currentIndex].offsetTop);
		disabled = false;
	};
}

function OnWheelScroll(e) {
	if (disabled == false) {
		if (e.type == "wheel") supportsWheel = true;
		else if (supportsWheel) return;

		/* Determine the direction of the scroll (< 0 → up, > 0 → down). */
		var delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;

		console.log(delta);


		scroll(delta);
	}
};

function scroll(delta) {
	if (disabled)
		return;
	if (delta < 0 && currentIndex == 0)
		return;
	if (delta > 0 && currentIndex == sections.length - 1)
		return;

	currentIndex += delta;
	disabled = true;
	if (enableFunction != null) {
		clearTimeout(enableFunction);
	}

	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var y = h * currentIndex;
	doScrolling(sections[currentIndex], 700);

	enableFunction = setTimeout(function() {
		disabled = false;
	}, 700);
}

function doScrolling(element, duration) {

	var elementY = element.offsetTop;

	if (element.id == "Home")
		if (location.protocol == "file:") {
			history.replaceState({}, document.title, "");
		} else {
			history.replaceState({}, document.title, "");
		}
	else {
		console.log("replacing history: " + element.id);
		if (location.protocol == "file:") {
			history.replaceState({}, document.title, "#" + element.id);
		} else {
			console.log("currentpage:" + currentPage);
			console.log("element.id:" + element.id);
			console.log("element.id.replace('-', ' '):" + element.id.replace('-', ' '));
			if (typeof(currentPage) == 'undefined') {
				currentPage = "";
				log
			}
			history.replaceState({}, element.id.replace('-', ' '), currentPage + "/" + element.id);
		}
	}

	var page = $('html, body');
	page.stop();
	page.animate({
		scrollTop: elementY
	}, duration);


	return;


	var startingY = window.pageYOffset;
	var diff = elementY - startingY;
	if (diff == 0)
		return;

	var start;
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	var multiplier = Math.abs(diff) / h;
	duration *= Math.min(1, multiplier);
	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
		if (!start) start = timestamp;
		// Elapsed milliseconds since start of scrolling.
		var time = timestamp - start;
		// Get percent of completion in range [0, 1].
		var percent = Math.min(time / duration, 1);

		window.scrollTo(0, startingY + diff * percent);

		// Proceed with animation as long as we wanted it to.
		if (time < duration && !scrollingInfo.StopScrolling) {
			window.requestAnimationFrame(step);
		}
		//if (time > duration -200)
		{
			//disabled = false;
		}
	})
}

if ($('body').hasClass('mobile')) {
	var viewportHeight = $('.section').innerHeight();
	$('.section').css({
		height: viewportHeight
	});
}