<<<<<<< HEAD
function llenarDatosDataTable(){
    var tablaProductos=$('#listaProductos');
    tablaProductos.DataTable({
        "ajax":{
            type: "GET",
            url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
            timeout:1500,
            dataSrc:"",
            success: function (response) {
                
            }
        },
        "columns":[
            {data:"serv_id"},
            {data:"serv_nom"},
            {data:"serv_desc"},
            {data:"serv_price"}
        ],
        "language":{
            "lengthMenu":"Mostrando _MENU_ elementos",
            "serch":"Buscar"
        }
            
        
    })
}


=======
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
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
    });
    tablaServicios.DataTable();

}
function obtenerServicios(){
    $.ajax({
        type:"GET",
        // url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        url:"http://5d4b382300dbb1001487995c.mockapi.io/api/v1/servicios",
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

// obtenerServicios();
var servicios=$("#servicios");
servicios.click(function (e) { 
    
    obtenerServicios(); 
});
var clientes=$("#clientes");
clientes.click(function(){
    obtenerClientes();
});

var anadirServicios=$("#anadirServicios");
anadirServicios.click(function(e){
    e.preventDefault();
    var divRow=$('.row');
    var formulario=`<form>
                        <table class="table">
                            <tr>
                                <td>Nombre:</td>
                                <td><input type="text" name="serv_nom"></td>
                            </tr>
                            <tr>
                                <td>Descripcion:</td>
                                <td><input type="text" name="serv_desc"></td>
                            </tr>
                            <tr>
                                <td>Precio:</td>
                                <td><input type="number" name="serv_price"></td>
                            </tr>
                        </table>
                        <input type="submit" value="crear" class="btn btn-primary">
                    </form>`;
    divRow.html("");
    divRow.html(formulario);

    var miformulario=$('form');
    miformulario.submit(function(e){
        e.preventDefault();
        var misDatos=miformulario.serializeArray();
        console.log("Datos form",misDatos);
        
        
        // en caso d querer obtener los valores 1 x 1 basat con poner algun id
        // var inputname=$("#serv_mom")
        // var objServicio={
        // serv_nom:inputName.value
        // var objForm={};
        var objServicio={};
       // $.each(misDatos,function(i,input){
            
            //recorre todo el objeto
            // console.log(input.name+" "+input.value);
        //    objServicio[input.name]=input.value;
        //});
        //con foreach javaScript
        misDatos.forEach(function(input){
            objServicio[input.name]=input.value;
        });
        console.log(objServicio);
        crearServicio(objServicio);
        
    })
});
function crearServicio(servicio){
    $.ajax({
        type: "POST",
        url: "http://5d4b382300dbb1001487995c.mockapi.io/api/v1/servicios",
        timeout:1300,
        data: JSON.stringify(servicio),
        contentType:"application/json",
        
        success: function (response) {
            console.log(response);
            obtenerServicios();
            
        },
        error:function(error){
            console.log(error);
            
        },
        beforeSend:function(response){
            console.log("Codigo ejecutado antes de enviar la data");
            
        }
    });
<<<<<<< HEAD
}

llenarDatosDataTable();
=======
}
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
