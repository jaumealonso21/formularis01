var ocultar, columnes, files, tabla01, texte, texte02, quad1, quad2, etiq1, etiq2;

window.onload = ini();

function ini(){
    ocultar = document.getElementById('oculta');
    ocultar.hidden = false;
    files = document.getElementById('files');
    columnes = document.getElementById('columnes');
    tabla01 = document.getElementById('tabla');
    texte = document.getElementById('texte');
    texte.hidden = false;
    texte02 = document.getElementById('texte2');
    //document.addEventListener("mouseDown", alertar(), false);
    quad1 = document.getElementById('quad1');
    quad2 = document.getElementById('quad2');
    etiq1 = document.getElementById('etiq1');
    etiq2 = document.getElementById('etiq2');
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
