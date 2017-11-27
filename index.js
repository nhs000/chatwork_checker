document.addEventListener('DOMContentLoaded', function() {
	var manifestData = chrome.runtime.getManifest();
	document.getElementById("version").textContent = manifestData.version;
}, false);
