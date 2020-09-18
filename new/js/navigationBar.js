var currentPage = "";

function createMenuItem(section) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	li.appendChild(a);
	a.innerHTML = section.id;
	a.addEventListener("click", function() {
		$('body').removeClass('loaded');
		$('body').addClass('loading');

		if (section.id == "What-do-I-do") {
			currentPage = originalPath + "portfolio/";
			if (location.protocol == "file:") {
				History.pushState({}, "", currentPage);
			} else {
				History.pushState({}, "", currentPage);
			}
			onUnloadPage();
			setTimeout(function() {
				$('#main-content').load(originalPath + 'portfolio.html #main-content', function() {
					createSectionImages();
					onLoadPage();
					waitForImagesToLoad();
					$('body').removeClass('loading');
					$('body').addClass('loaded');
				});

			}, 700);
		} else {
			currentPage = originalPath;
			if (location.protocol == "file:") {
				History.pushState({}, "Home", currentPage);
			} else {
				History.pushState({}, "Home", currentPage);
			}
			onUnloadPage();
			setTimeout(function() {
				$('#main-content').load(originalPath + 'index.html #main-content', function() {
					createSectionImages();
					onLoadPage();
					waitForImagesToLoad();
					$('body').removeClass('loading');
					$('body').addClass('loaded');
				});

			}, 700);

		}
	});
	return li;
}

function createUl() {
	return document.createElement("ul");
}

var ul = createUl();
$('#navigationBar').append(ul);

[].forEach.call(document.querySelectorAll('.section'), function(section) {

	ul.insertBefore(createMenuItem(section), ul.firstChild);
});


// <ul>
//   <li><a onclick="scrollTo()">Home</a></li>
//   <li><a onclick="scrollTo()">News</a></li>
//   <li><a onclick="scrollTo()">Contact</a></li>
//   <li><a onclick="scrollTo()">About</a></li>
// </ul>