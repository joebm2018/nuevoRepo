function imprimirServicios(arregloServicios){
    var divRow=$(".row");
    var tabla=`<table id="tablaServicios" class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                </table>`
    divRow.html(tabla);
    var tablaServicios=$("#tablaServicios");
    var tbody='<tbody id="tbody"></tbody>';
    tablaServicios.append(tbody);
    var tbodyServicios=$("tbody");

    arregloServicios.forEach(function(servicio){
        var tr=$("<tr></tr>");
        var td1=$(`<td>${servicio.serv_nom}</td>`);
        tr.append(td1);

        var td2=$(`<td>${servicio.serv_desc}</td>`);
        tr.append(td2);

        var td3=$(`<td>${servicio.serv_price}</td>`);
        tr.append(td3);

        var td4=$(`<td><img src='${servicio.serv_img}' width="200px" height="200px"></td>`);
        tr.append(td4);
        tbodyServicios.append(tr);

<<<<<<< HEAD
        
        
        // tbodyServicios.append(tr);
        // var tr=$("<tr></tr>");
        // var td3=$(`<td>${servicio.serv_img}</td>`);
        // tr.append(td3);
        // tbodyServicios.append(tr);
=======
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
    });

}
function obtenerServicios(){
    $.ajax({
        type:"GET",
<<<<<<< HEAD
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
=======
        // url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        url:"http://5d4b382300dbb1001487995c.mockapi.io/api/v1/servicios",
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
        timeout:1000, //ms
        data:null,

        //exito
        success:function(respuesta){
            //lo que quiera ejecutar cuando mi petición haya tenido exito

            //la funcion anonima de suc
            console.log(respuesta);
            imprimirServicios(respuesta);
            
        },
        error:function(){
            console.log("Ha ocurrido un error, no tenemos internet");
        },
        beforeSend:function(){
            console.log("codigo que se ejecutará antes de hacer la petición");
        },
        complete:function(xhr){
            console.log(xhr.status)

         }
    });
}
<<<<<<< HEAD
=======
function obtenerClientes(){
    $.ajax({
        type: "GET",
        url: "http://5d4b382300dbb1001487995c.mockapi.io/api/v1/usuarios",
        data: null,
        success: function (response) {
            console.log(response);
            
            imprimirClientes(response);
        }
    });
}
function imprimirClientes(arregloClientes){
    var divRow=$(".row");
    var tabla=`<table id="tablaClientes" class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                        </tr>
                    </thead>
                </table>`
    divRow.html(tabla);
    var tablaClientes=$("#tablaClientes");
    var tbody='<tbody id="tbody"></tbody>';
    tablaClientes.append(tbody);
    var tbodyClientes=$("tbody");
    arregloClientes.forEach(function(cliente) {
        var tr=$("<tr></tr>");
        var td1=$(`<td>${cliente.usua_id}</td>`);
        tr.append(td1);

        var td2=$(`<td>${cliente.usua_nombre}</td>`);
        tr.append(td2);

        var td3=$(`<td>${cliente.usua_apellido}</td>`);
        tr.append(td3);

        
        tbodyClientes.append(tr);
    });
}
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
// obtenerServicios();
var servicios=$("#servicios");
    servicios.click(function (e) { 
    
<<<<<<< HEAD
    obtenerServicios();
    
=======
    obtenerServicios(); 
});
var clientes=$("#clientes");
clientes.click(function(){
    obtenerClientes();
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
});