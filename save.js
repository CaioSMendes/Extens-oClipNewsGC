chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	console.log(message.url);
	

	var url = message.url;
		document.getElementById("URL").value = url;
	var title = message.titulo;
	 document.getElementById("titulo").value = title;
	var data = message.date;
	document.getElementById("data").value = data;
	
	var obj = {
		titulo: $("titulo").val(),
		url: $("url").val(),
		date:$("data").val()
	}
	
	$.ajax({
		url     : 'http://localhost/clipping/savejson.php',
		dataType : 'json',
		method  : 'post',
		//data    : { 'paragrafo': $('#word').val() },
	data    : { data: JSON.stringify(obj) },
	//data    : {nome:"paragrafo", data: JSON.stringify(paragrafo) },
	//data: "{'Paragrafo':' "+ paragraph + "'}",
	//data:JSON.stringify({para1: paragrafo}),
	//data    : { 'paragrafo': $('#paragraph').val() },	
	success: function () {console.log("Thanks!"); },
	failure: function() {console.log("Error!");}
	});
	
});