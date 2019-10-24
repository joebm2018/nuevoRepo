<<<<<<< HEAD
var tablaProductos=$("#listaProductos");
tablaProductos.DataTable({
    "ajax":{
        type:"GET",
        url:"http://5d4b382300dbb1001487995c.mockapi.io/api/v1/servicios",
        timeout:1500,
        dataSrc:"",
        success: function (response) {
        
        }
=======
var tablaProductos = $('#listaProductos');
    tablaProductos.DataTable({
        "ajax":{
        type:"GET",
            url:"http://5d4b382300dbb1001487995c.mockapi.io/api/v1/servicios",
            timeout:1500,

            dataSrc:"",
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
    },
    "columns":[
        {data:"serv_id"},
        {data:"serv_nom"},
        {data:"serv_desc"},
        {data:"serv_price"},
<<<<<<< HEAD
        {data:"serv_img"}
        // {
        //     data:"serv_img",
        //     render:function(data){
        //         let imagen=`<img src="${data}" width="100"`;
        //         return imagen;
        //     }
        // }
    ]
    // "language":{
    //     "lenthMenu":"Mostrando  _MENU_ items",
    //     "search":"Buscar",
    //     "info":"Mostrando _START_ and _END_ de _TOTAL_ elementos",
    //     "paginate":{
    //         "first":"Inicio",
    //         "last":"Final",
    //         "next":"Siguiente",
    //         "previus":"Anterior"
    //     }
    // }
});
=======
        {
            data:"serv_img",
            render:function(data){
                let imagen=`<img src="${data}" width="100">`;
                return imagen;
            }
        }  
    ],
    "language":{
        "lengthMenu":"Mostrando  _MENU_ items",
        "search":"Buscar",
        "info":"Mostrando _START_ and _END_ de _TOTAL_ elementos",
        "paginate":{
            "first":"Inicio",
            "last":"Final",
            "next":"Siguiente",
            "previous":"Anterior"
        }
    }
});    
         
  
    
    // }
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
