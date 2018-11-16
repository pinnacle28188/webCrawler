function displayOverlay() {
	if (document.getElementById('overlay') != null) {
		document.getElementById('overlay').style.display = 'block';
	
		window.scrollTo(0,0);
	
		// For <= IE8 to show animated gif
		setTimeout("document.getElementById('progressimage').src = document.getElementById('progressimage').src", 200);
	}
}

function delayDisplayOverlay(delay) {
	if (document.getElementById('overlay') != null) {
		if(!delay) {
			delay = overlayDelay;
		}
	
		window.setTimeout('displayOverlay()', delay);
	}
}
