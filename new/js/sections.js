function createSectionImages() {
	function createImageElement(src) {
		var img = document.createElement("img");

		var imgSrc = (src.toLowerCase().startsWith("http") ? src : (fileLocationPrefix + src));
		img.setAttribute("src", imgSrc);
		img.setAttribute("class", "section-image waitUntilLoaded");
		return img;
	}

	function createImageBlender() {
		var div = document.createElement("div");
		div.setAttribute("class", "section-image-blend");
		return div;
	}

	[].forEach.call(document.querySelectorAll('.section'), function(section) {

		var srcAttribValue = $(section).attr('src');

		if (!srcAttribValue)
			return;

		section.insertBefore(createImageBlender(), section.firstChild);
		section.insertBefore(createImageElement(srcAttribValue), section.firstChild);
	});
}

createSectionImages();