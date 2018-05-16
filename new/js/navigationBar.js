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
			if (location.protocol == "file:") {
				history.replaceState({}, "Portfolio", "#" + "portfolio");
			} else {
				history.replaceState({}, "Portfolio", currentPage);
			}
			onUnloadPage();
			setTimeout(function() {
				$('#main-content').load(fileLocationPrefix + 'portfolio.html #main-content', function() {
					createSectionImages();
					onLoadPage();
					waitForImagesToLoad();
					$('body').removeClass('loading');
					$('body').addClass('loaded');
				});

			}, 700);
		} else {
			currentPage = "";
			if (location.protocol == "file:") {
				history.replaceState({}, "Home", "#");
			} else {
				history.replaceState({}, "Home", currentPage);
			}
			onUnloadPage();
			setTimeout(function() {
				$('#main-content').load(fileLocationPrefix + 'index.html #main-content', function() {
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