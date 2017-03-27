var tabla01 = document.getElementById('tabla');
tabla(tabla01, 3, 5);
    
function tabla(tabla01, files, columnes) {
     // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for(var i=0; i < files;i++){
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        for(var j=0; j < columnes;j++){
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
//            var textoCelda = document.createTextNode("fila " + i + ", columna " + j);
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
//

