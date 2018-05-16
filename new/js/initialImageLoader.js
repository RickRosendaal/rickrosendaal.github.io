$(document).ready(function() {
	waitForImagesToLoad();
});

function waitForImagesToLoad() {
	console.log("Document is ready, waiting for all images to load!");
	var imagesToLoad = 0;
	var invokeLoaded = new Event('imagesLoaded');

	[].forEach.call(document.querySelectorAll('img.waitUntilLoaded'), function(img) {
		if (img.complete)
			return;

		imagesToLoad++;
		var loaded = false;
		var timeoutFunction = setTimeout(function() {
			loaded = true;
			console.log("image timed out: " + img.src);
			imagesToLoad--;

			if (imagesToLoad == 0)
				document.dispatchEvent(invokeLoaded);
		}, 15000)

		img.onload = function() {
			if (loaded)
				return;

			clearTimeout(timeoutFunction);
			imagesToLoad--;

			if (imagesToLoad == 0)
				document.dispatchEvent(invokeLoaded);
		};
	});

	console.log("images to load:" + imagesToLoad);

	if (imagesToLoad == 0)
		document.dispatchEvent(invokeLoaded);
}