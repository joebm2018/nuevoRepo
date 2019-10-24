var productos=[
    {
        codigo:"0001",
        descripcion:"Laptop Toshiba",
        precio:4500.00,
        imagen:"http://placehold.it/100x100/",
        existencias:45,
        estado:"activo"
    },{
        codigo:"0002",
        descripcion:"Mouse Razer",
        precio:400.00,
        imagen:"http://placehold.it/100x100/",
        existencias:10,
        estado:"inactivo"
    
    },{
        codigo:"0003",
        descripcion:"tabet lenovo",
        precio:100.00,
        imagen:"http://placehold.it/100x100/",
        existencias:900,
        estado:"activo"
    }
]
var contenedor=document.getElementById("contenedor");
var tabla=document.createElement("table");
tabla.setAttribute("border","1");
tabla.innerHTML=`<tr>
                    <th>Codigo</th>
                    <th>Descripcion</th>
                    <th>precio</th>
                    <th>Imagen</th>
                    <th>Existencias</th>
                    <th>Estado</th>
                </tr>`;

for(i=0;i<productos.length;i++){
    //creamos la fila
    var trFila=document.createElement("tr");
    //creamos las 6 Columnas en cada vuelta
    var tdCod=document.createElement("td");
    var tdDescripcion=document.createElement("td");
    var tdPrecio=document.createElement("td");
    var tdImagen=document.createElement("td");
    var tdExistencias=document.createElement("td");
    var tdEstado=document.createElement("td");

    // forma 1

    //colocando el contenido de cada TD
    tdCod.innerHTML=productos[i].codigo;
    tdDescripcion.innerHTML=productos[i].descripcion;
    tdPrecio.innerHTML=productos[i].precio;
    tdImagen.innerHTML=`<img src="${productos[i].imagen}">`;
    tdExistencias.innerHTML=productos[i].existencias;
    
    tdEstado.innerHTML=productos[i].estado;
    if (productos[i].estado=="activo"){
        tdEstado.style.color="green";
    }else{
        tdEstado.style.color="red";
    }
    //inyectando los TD's DENTRO DEL TR O FILA
    trFila.appendChild(tdCod);
    trFila.appendChild(tdDescripcion);
    trFila.appendChild(tdPrecio);
    trFila.appendChild(tdImagen);
    trFila.appendChild(tdExistencias);
    trFila.appendChild(tdEstado);

    //inyectando todo el TR en la TABLA
    tabla.appendChild(trFila);
}
contenedor.appendChild(tabla);
