window.onload=function(){
    var inputBuscar=document.getElementById("inputBuscar");
    var divCarga=document.getElementById("divCarga");
    var frmBusqueda=document.getElementById("frmBusqueda");
    var divVacio=document.getElementById("divVacio");
    var cuerpo=document.getElementById("cuerpo");
    var contenedorTabla=document.getElementById("contenedorTabla");
    var lati,long;
    var map;
    frmBusqueda.onsubmit=function(e){
        e.preventDefault();
        //ocultando el div de "sin resultados"
        divVacio.setAttribute("hidden","true");
        cuerpo.innerHTML="";
        contenedorTabla.setAttribute("hidden",true);
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
                    var gata=JSON.parse(xhr.responseText).Results;
                    console.log(gata);
                    dibujarTabla(gata);
                    // var jsonBusqueda=JSON.parse((xhr.responseText));
                    // console.log(jsonBusqueda);
                    
                    break;
            }   
        }
        xhr.open("GET","https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location="+busqueda);
        xhr.setRequestHeader("x-rapidapi-host","devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key","71edf8fbf3mshdbda0f8222908fep173093jsn7cafc0fc3907");
        xhr.send(null);
    }
    function dibujarTabla(gata){
        if (gata.length===0){
            divVacio.removeAttribute("hidden");
        }else{
            gata.forEach(function(l,i){
                var tr=document.createElement("tr");

                var tdNro=document.createElement("td");
                tdNro.innerHTML=(i+1);
                tr.appendChild(tdNro);
            
                var tdName=document.createElement("td");
                tdName.innerHTML=l.name;
                tr.appendChild(tdName);
            // tdName.onclick=function(){
            //     CargarDetalleLugar(l.lat,l.lon);
            // }
            
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

        

                var botonVer=document.createElement("button");
                // botonVer.innerHTML=`<i class="fas fa-eye    "></i>`;
                botonVer.innerHTML="<i class='fas fa-eye'></i>";
                botonVer.setAttribute("class","btn btn-primary");
                // //asignar clases del modal
                // botonVer.setAttribute("type","button");
                // botonVer.setAttribute("data-toggle","modal");
                // botonVer.setAttribute("data-target","#modalMapa");
                botonVer.onclick=function(){
                    $('#modalMapa').modal('show');
                    // map.setCenter({
                    //     lat:l.lat,
                    //     lng:l.lon
                    // });
                    map.setCenter(new google.maps.LatLng(l.lat,l.lon));
                }

                tr.appendChild(botonVer);

                cuerpo.appendChild(tr);
            });
            contenedorTabla.removeAttribute("hidden");

        }
    }

    function initMap() {
        //inicializando el mapa, la variable map es la referencia al mapa de google
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
    
    
    
    initMap();
}