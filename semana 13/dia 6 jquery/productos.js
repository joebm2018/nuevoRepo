function llenarDatosDataTable(){
    var tablaProductos=$('#listaProductos');
    tablaProductos.DataTable({
        "ajax":{
            type: "method",
            url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
            timeout:1500,
            dataSrc:"",
            success: function (response) {
                
            }
        },
        "columns":[
            {data:"prod_nom"},
            {data:"prod_desc"},
            {data:"prod_prec"}
        ],
        "language":{
            "lengthMenu":"Mostrando _MENU_ elementos",
            "serch":"Buscar"
        }
            
        
    })
}
llenarDatosDataTable();