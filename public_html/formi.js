var ocultar, columnes, files, tabla01, texte, texte02, quad1, quad2, etiq1, etiq2, enviar;
var pass, fort;

window.onload = ini();

function ini(){
    ocultar = document.getElementById('oculta');
    ocultar.hidden = false;
    ocultar.addEventListener("click", oculta);
    files = document.getElementById('files');
    columnes = document.getElementById('columnes');
    tabla01 = document.getElementById('tabla');
    enviar = document.getElementById('enviar');
    enviar.addEventListener("click", tabla);
    texte = document.getElementById('texte');
    texte.hidden = false;
    texte02 = document.getElementById('texte2');
    quad1 = document.getElementById('quad1');
    quad2 = document.getElementById('quad2');
    etiq1 = document.getElementById('etiq1');
    etiq2 = document.getElementById('etiq2');
    $('#desap1').click(function(){
        $('#fade1').fadeOut().fadeIn();
    });
    $('#desap2').click(function(){
        $('#fade2').fadeOut('slow').fadeIn();
    });
    $('#desap3').click(function(){
        $('#fade3').fadeOut(3000).fadeIn();
    });
    $("#fad1").click(function(){
        $("#q1").fadeOut().fadeIn("slow");
        $("#q2").fadeOut().fadeIn("fast");
        $("#q3").fadeOut().fadeIn(800);
        $("#q4").fadeOut().fadeIn(2000);
        $("#q5").fadeOut().fadeIn(4000);
    });
    $( "button" ).click(function() {
      $( "td" ).each(function( index, element ) {
        // element == this
        if ( $( this ).html() === "" ) {
            $( element ).css( "backgroundColor", "yellow" );
        }
      });
    });
    pass = document.getElementById("pass");
    fort = document.getElementById("fort");
    pass.addEventListener("input", revisa);
}
function oculta() {
    ocultar.hidden = true;
}
function tabla() {
     // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for(var i=0; i < files.value;i++){
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        for(var j=0; j < columnes.value;j++){
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("fila "+i+", columna "+j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    tabla01.appendChild(tabla);
}
function desapareix() {
    texte.hidden = true;
}
function alertar() {
    alert('Vigila!!!');
}
function hover(bool) {
    if(bool){
        alert('Dentro!!!');
    }else{
       alert('Fuera!!!'); 
    } 
}
function foc(int){
    switch (int){
       case 1:
            quad1.style.backgroundColor = "green";
            break;
       case 2:
            quad2.style.backgroundColor = "red";
            break;
       default:
            break;
    }          
}
function surt(int){
    switch (int){
       case 1:
            quad1.style.backgroundColor = "white";
            break;
       case 2:
           quad2.style.backgroundColor = "white";
            break;
       default:
            break;
    } 
}
function desap(etiq){
    etiq.style.display= "none";
}
function revisa() {
    if(pass.value.length<5){
        fort.innerHTML = "no segura";
    }else if(pass.value.length<8){
        fort.innerHTML = "mitjanament segura";
    }else if(pass.value.length>8){
        fort.innerHTML = "segura";
    }
}
