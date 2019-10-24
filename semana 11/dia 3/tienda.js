window.onload=function(){
    var divProductos=document.getElementById("divProductos");
    var detalleProducto=document.getElementById("detalleProducto");
    var descProducto=document.getElementById("descProducto");
    var nombreProducto=document.getElementById("nombreProducto");
    var precioProducto=document.getElementById("precioProducto");
    var stockProducto=document.getElementById("stockProducto");
    var btnEliminar=document.getElementById("btnEliminar");

    function eliminarProducto(id){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            switch(xhr.readyState){
                case 4:
                    console.log("Se Elimino el Producto Satisfactoriamente");
                    obtenerProductos();            
                    break;
            }
        }
        xhr.open("DELETE","https://5d4b382300dbb1001487995c.mockapi.io/api/v1/productos/"+id);
        xhr.send(null);
        
    }

    function imprimirDetalle(id){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            switch(xhr.readyState){
                case 4:
                    console.log(xhr.responseText);
                    let objProducto=JSON.parse(xhr.responseText);
                    nombreProducto.innerHTML=objProducto.prod_nom;
                    descProducto.innerHTML=objProducto.prod_desc;
                    precioProducto.innerHTML=objProducto.prod_prec;
                    // stockProducto.innerHTML=objProducto.prod_stock;
                    if(objProducto.prod_stock==true){
                        stockProducto.style.color="green";
                    }else{
                        stockProducto.style.color="red";
                    }
                    stockProducto.innerHTML=objProducto.prod_stock ? "Hay Stock":"No hay Stock"
                    
                    btnEliminar.onclick=function(){
                        eliminarProducto(id);
                    }
                    break;
            }
        }
        xhr.open("GET","https://5d4b382300dbb1001487995c.mockapi.io/api/v1/productos/"+id);
        xhr.send(null);
    }
    function imprimirProductos(arregloProductos){
        divProductos.innerHTML="";
        // divProductos.innerHTML=``;
        divFila=document.createElement("div");
        divFila.setAttribute("class","row");
        divProductos.appendChild(divFila);
        for (let i = 0; i < arregloProductos.length; i++) {
            var divColumna=document.createElement("div");
            divColumna.setAttribute("class","col-4");

            divColumna.style.height="300px";
            divColumna.style.backgroundImage=`url('${arregloProductos[i].prod_img}')`;
            // divColumna.style.margin="2px";

            if(arregloProductos[i].prod_stock==false){
                divColumna.style.border="2px solid red"
            }
            divColumna.innerHTML=arregloProductos[i].prod_nom;
            divColumna.style.padding="5px";

            divFila.appendChild(divColumna);
            
            divColumna.onclick=function(){
                imprimirDetalle(arregloProductos[i].prod_id);
            }
        }
        
    }
    function obtenerProductos(){

        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            switch(xhr.readyState){
                case 4:
                    // console.log(xhr);
                    // console.log(xhr.responseText);
                    var jsonProductos = JSON.parse(xhr.responseText);
                    // console.log(jsonProductos);
                    // console.log("el contenido de la solicitud es:",jsonProductos.data);
                    imprimirProductos(jsonProductos);
                    break;
            }
        }
        xhr.open("GET","https://5d4b382300dbb1001487995c.mockapi.io/api/v1/productos");
        xhr.send();
    }
    obtenerProductos();
}