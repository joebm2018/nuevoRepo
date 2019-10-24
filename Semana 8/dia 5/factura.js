window.onload=function(){
    //creamos nuestro objeto global para guardar en localstorage
    var objFactura={
        fecha:'',
        nombre:'',
        direccion:'',
        dni:'',
        listadoProductos:[],
        total:''
    }
    //empezamos a relacionar los input con nuestras variables
    var inpFecha=document.getElementById("inputFecha");
    var inpNombre=document.getElementById("inputNombre");
    var inpDni=document.getElementById("inputDni");
    var inpDireccion=document.getElementById("inputDireccion");

    var tProductos=document.getElementById("tProductos");
    var inpCant=document.getElementById("inputCant");
    var inpProducto=document.getElementById("inputProducto");
    var inpPrecio=document.getElementById("inputPrecio");
    var btnAdd=document.getElementById("btnAgregar")

    var tdTotal=document.getElementById("idTotal");
    var totalFactura=0;

    function obtenerFactura(){
        //obtenemos nuestro objeto  en texto del localstorage
        var facturaTexto=localStorage.getItem("objFactura");
        //convertimos a un objeto
        var facturaJSON=JSON.parse(facturaTexto);
        // console.log(facturaJSON);
        
        var arregloProductos=facturaJSON.listadoProductos;
        // console.log(arregloProductos);

        
        arregloProductos.forEach(function(producto){
            var tr=document.createElement("tr");
            var td1=document.createElement("td");
            var td2=document.createElement("td");
            var td3=document.createElement("td");
            var td4=document.createElement("td");
            td1.innerHTML=producto.cantidad;
            td2.innerHTML=producto.producto;
            td3.innerHTML=producto.precioUnitario;
            td4.innerHTML=producto.valorVenta;
            // console.log(producto.precioUnitario);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
                
        });
        tProductos.appendChild(tr);

    }
    obtenerFactura();
    //click
    btnAdd.onclick=function(){
        objFactura.fecha=inpFecha.value;
        objFactura.nombre=inpNombre.value;
        objFactura.direccion=inpDireccion.value;
        objFactura.dni=inpDni.value;
        // objFactura.dni=inpDni.value;
        
        // console.log(objFactura);
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");

        td1.innerHTML=inpCant.value;
        td2.innerHTML=inpProducto.value;
        td3.innerHTML=inpPrecio.value;
        td4.innerHTML=parseInt(inpCant.value)*parseInt(inpPrecio.value);
        //calculamos el valor total
        totalFactura=totalFactura+(parseInt(inpCant.value)*parseInt(inpPrecio.value));
        tdTotal.innerHTML=totalFactura;


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tProductos.appendChild(tr);

        //creamos un obj temporal
        var objProducto={
            cantidad:inpCant.value,
            producto: inpProducto.value,
            precioUnitario: inpPrecio.value,
            valorVenta:inpCant.value*inpPrecio.value
        }
        //agregamos al arreglo de productos qye tienue nuestro objFactura
        objFactura.listadoProductos.push(objProducto);
       
        console.log(objFactura);


        var facturaConvertida=JSON.stringify(objFactura)
        console.log(facturaConvertida);
        
        //guardamos nuestro objeto en localstorage
        localStorage.setItem("objFactura",facturaConvertida);
        
        inpCant.value="";
        inpProducto.value="";
        inpPrecio.value="";
        

        
    }
}