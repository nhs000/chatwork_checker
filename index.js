document.addEventListener('DOMContentLoaded', function() {
	var manifestData = chrome.runtime.getManifest();
	console.log(manifestData);
	document.getElementById("version").textContent = manifestData.version;
}, false);
