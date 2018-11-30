chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message.url);
	document.getElementById("URL").value = message.url;
	document.getElementById("titulo").value = message.titulo;
	document.getElementById("data").value = message.date; 
});