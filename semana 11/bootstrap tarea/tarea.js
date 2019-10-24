window.onload=function(){
    var tabla=document.getElementById("tabla");
    
    //sacamos las variables de los tabs
    var tabZapatos=document.getElementById("zapatos-tab");
    var tabCelulares=document.getElementById("celulares-tab");
    var tabRopa=document.getElementById("ropa-tab");
    
    function cargaXHR(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            switch (xhr.readyState){
                case 1:
                    console.log("se ha ejecutado la función open()");
                    break;
                case 2:
                    console.log("se ha disparado una petición http");
                    break;
                case 3:
                    console.log("ya estamos descargando los datos");
                    break;
                case 4:
                    console.log("ya tenemos los datos, la operación terminó");
                    console.log(xhr.responseText);
                    
                    break;
                default:
                    console.log("Ha ocurrido un error inesperado");
            }
        }
    }
    function ponerDatos(productos){
        tabla.innerHTML="";
        tabla.innerHTML=`<thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                           
                        </tr>
                      </thead>
                      <tbody id="tbody">
                      </tbody>`
        var tbody=document.getElementById("tbody"); 

        productos.forEach(function(z) {
            var tbody=document.getElementById("tbody");
            var tr=document.createElement("tr");
    
            var tdId=document.createElement("td");
            tdId.innerHTML=z.id;
            tr.appendChild(tdId);
    
            var tdModelo=document.createElement("td");
            tdModelo.innerHTML=z.modelo;
            tr.appendChild(tdModelo);
    
            
            tbody.appendChild(tr);
        });
    }
    function ponerDatosR(ropa){
        tabla.innerHTML="";
        tabla.innerHTML=`<thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                           
                        </tr>
                      </thead>
                      <tbody id="tbody">
                      </tbody>`
        var tbody=document.getElementById("tbody"); 

        ropa.forEach(function(r) {
            var tbody=document.getElementById("tbody");
            var tr=document.createElement("tr");
    
            var tdId=document.createElement("td");
            tdId.innerHTML=r.id;
            tr.appendChild(tdId);
    
            var tdModelo=document.createElement("td");
            tdModelo.innerHTML=r.modelo;
            tr.appendChild(tdModelo);
    
            
            tbody.appendChild(tr);
        });
    }
    tabZapatos.onclick=function(){
        // alert("zapatos");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            switch (xhr.readyState){
                case 1:
                    console.log("se ha ejecutado la función open()");
                    break;
                case 2:
                    console.log("se ha disparado una petición http");
                    break;
                case 3:
                    console.log("ya estamos descargando los datos");
                    break;
                case 4:
                    console.log("ya tenemos los datos, la operación terminó");
                    console.log(xhr.responseText);
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    
                    console.log("el contenido de la solicitud es:",json.data);
                    ponerDatos(json);
                    break;
                default:
                    console.log("Ha ocurrido un error inesperado");
            }
        }
        xhr.open("GET","https://5d4b382300dbb1001487995c.mockapi.io/api/v1/calzado");
        xhr.send(null);
     
        

    }
    tabCelulares.onclick=function(){
        // alert("celulares");
        // cargaXHR();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            switch (xhr.readyState){
                case 1:
                    console.log("se ha ejecutado la función open()");
                    break;
                case 2:
                    console.log("se ha disparado una petición http");
                    break;
                case 3:
                    console.log("ya estamos descargando los datos");
                    break;
                case 4:
                    console.log("ya tenemos los datos, la operación terminó");
                    console.log(xhr.responseText);
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    
                    console.log("el contenido de la solicitud es:",json.data);
                    ponerDatos(json);
                    break;
                default:
                    console.log("Ha ocurrido un error inesperado");
            }
        }
        xhr.open("GET","https://5d4b382300dbb1001487995c.mockapi.io/api/v1/Celulares");
        xhr.send(null);
        console.log(xhr);
    }
    tabRopa.onclick=function(){
        // alert("Ropas");
        // cargaXHR();
        var xhr1 = new XMLHttpRequest();
        xhr1.onreadystatechange = function(){
            switch (xhr1.readyState){
               
                case 4:
                    var json1 = JSON.parse(xhr1.responseText);
                    ponerDatosR(json1);
                    break;
                
            }
        }
        xhr1.open("GET","https://5d4b382300dbb1001487995c.mockapi.io/api/v1/Ropa");
        xhr1.send(null);
        console.log(xhr1);
    }
}