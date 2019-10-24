window.onload=function(){
    var inputBuscar=document.getElementById("inputBuscar");
    var divCarga=document.getElementById("divCarga");
    var frmBusqueda=document.getElementById("frmBusqueda");
<<<<<<< HEAD
=======

    var tabla=document.getElementById("tabla");
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
    frmBusqueda.onsubmit=function(e){
        e.preventDefault();
        var busqueda=inputBuscar.value;
        buscarLugar(busqueda);

    }
    //funcion para hacer la busqueda del lugar en la api de lugares
    function buscarLugar(busqueda){
        divCarga.removeAttribute("hidden")
        console.log(`alguien esta buscando ${busqueda}`);
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            switch(xhr.readyState){
                case 4:
                    divCarga.setAttribute("hidden","true");
<<<<<<< HEAD
                    console.log(JSON.parse(xhr.responseText));
                    
                    // var jsonBusqueda=JSON.parse((xhr.responseText));
                    // console.log(jsonBusqueda);
                    
=======
                    // console.log(JSON.parse(xhr.responseText));
                    var jsonLugares=JSON.parse(xhr.responseText);
                    console.log(jsonLugares);
                    
                    // imprimirLugares(jsonLugares);
                    imprimirLugares(jsonLugares.Results);
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
                    break;
            }   
        }
        xhr.open("GET","https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location="+busqueda);
        xhr.setRequestHeader("x-rapidapi-host","devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key","71edf8fbf3mshdbda0f8222908fep173093jsn7cafc0fc3907");
        xhr.send(null);
    }
<<<<<<< HEAD
=======
    function imprimirLugares(arregloLugares){
        // debugger;
        
        tabla.innerHTML=`<thead>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Pais</th>
                            <th>Latitud</th>
                            <th>Longitud</th>
                        </thead>
                        <tbody id="tbody">
                        </tbody>`;
            
        arregloLugares.forEach(function(l) {
            var tbody=document.getElementById("tbody");
            var tr=document.createElement("tr");

            
            var tdName=document.createElement("td");
            tdName.innerHTML=l.name;
            tr.appendChild(tdName);
            tdName.onclick=function(){
                CargarDetalleLugar(l.lat,l.lon);
            }
            
            var tdType=document.createElement("td");
            tdType.innerHTML=l.type;
            tr.appendChild(tdType);

            var tdC=document.createElement("td");
            tdC.innerHTML=l.c;
            tr.appendChild(tdC);

            var tdLatitud=document.createElement("td");
            tdLatitud.innerHTML=l.lat;
            tr.appendChild(tdLatitud);

            var tdLongitud=document.createElement("td");
            tdLongitud.innerHTML=l.lon;
            tr.appendChild(tdLongitud);


            tbody.appendChild(tr);
        });
    }
    function CargarDetalleLugar(lat,lon){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            switch(xhr.readyState){
                case 4:
                    var jsonDetalleLugares=JSON.parse(xhr.responseText);
                    console.log(jsonDetalleLugares);
                    // imprimirLugares(jsonLugares.Results);
                    break;
            }   
        }
        xhr.open("GET","https://samples.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=8363e52fe83d9be3168ae9e92627bdc1");
        //CUANDO BUSCO: arequipa 
        //https://samples.openweathermap.org/data/2.5/forecast?lat=-4.620000&lon=-73.900002&appid=8363e52fe83d9be3168ae9e92627bdc1
        xhr.send(null);
    }
>>>>>>> da40d71d1ca8ea8256d1cb8d9b1e14eef69557c6
}