var title;
var url1;
var str_data;



    title = document.title;
    console.log(`Titulo da pagina'${document.title}'`);    
    console.log('Titulo da pagina ' + document.title); // Sem string template
    url1      = window.location.href;     // Retorna a url completa
    console.log ("URL do site",url1);

    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos

    // Formata a data e a hora (note o mês + 1)
    str_data = dia + '/' + (mes+1) + '/' + ano4;


    // Mostra o resultado
    console.log("Data atual", str_data);

    /*document.getElementById("titulo").value;
    document.getElementById("paragrafo").value;
    document.getElementById("URL").value;
    document.getElementById("data").value;
    document.getElementById("fonte").value;*/
    /*
    let informacao = {
    
        url: url1,
        date:str_data,
        titulo: title    
    };
   */
  let informacao = {
   noticia:[
       {
           url:url1,
           data:str_data,
           titulo:title
       }
        ] 
    
};
    $.ajax({
		url     : 'http://localhost/clipping/savejson.php',
		dataType : 'json',
		method  : 'post',
		//data    : { 'paragrafo': $('#word').val() },
	data    : { data: JSON.stringify(informacao) },
	//data    : {nome:"paragrafo", data: JSON.stringify(paragrafo) },
	//data: "{'Paragrafo':' "+ paragraph + "'}",
	//data:JSON.stringify({para1: paragrafo}),
	//data    : { 'paragrafo': $('#paragraph').val() },	
	success: function () {console.log("Thanks!"); },
	failure: function() {console.log("Error!");}
	});


   chrome.runtime.sendMessage(informacao);
 

function salvaDados() {
    var title = document.getElementById('titulo').value;
    var paragraph = document.getElementById('paragrafo').value;
    var link = document.getElementById('URL').value;
    var date = document.getElementById('data').value;
    var source = document.getElementById('fonte').value;
    var occurence = document.getElementById('ocorrencia').value;
    var local = document.getElementById('local').value;
    console.log("-----salvou-----");
    console.log(title);
    console.log(paragraph);
    console.log(link);
    console.log(date);
    console.log(source);
    console.log(occurence);
    console.log(local);
    console.log("-----Final-----");
}
