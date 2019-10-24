window.onload=function(){
    var mapaGoogle;
    var miPosicion;
    
    var divMapa=document.getElementById("mapa");
    var btnGetPosicion=document.getElementById("btnGetPosition");
    var btnBorrarMarcador=document.getElementById("btnBorrarMarcador");
    var coordAnterior;
    let configurarMapa=()=>{
        // mapaGoogle=new mapaGoogle.maps.Map(document.getElementById("mapa"),{
            mapaGoogle=new google.maps.Map(divMapa,{
            center: {lat: -16, lng: -71},
            zoom: 8,
        });
        listenersMaps();
    }
    // btnGetPosicion.onclick=()=>{}
    // btnGetPosicion.click=function(){
        
    btnGetPosicion.onclick=()=>{

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((posicion)=>{
                console.log(posicion);
                let ubicacion={
                    lat: posicion.coords.latitude,
                    lng: posicion.coords.longitude
                }
                miPosicion=new google.maps.Marker({
                    position:ubicacion,
                    map:mapaGoogle,
                    title:"Aqui Estamos .."
                });
            },(error)=>{
                console.log(error);
            });
        }else{
            alert("No se permitio el acceso a la ubicacion");
        }
        btnBorrarMarcador.removeAttribute("disabled")
    }
    btnBorrarMarcador.onclick=()=>{
        miPosicion.setMap(null);
        // AGREGAR ATRIBUTO DISABLED
    }
    
    let listenersMaps=()=>{
        mapaGoogle.addListener('click',(coords)=>{
            console.log(coords);
            let LatLng={
                lat: coords.latLng.lat(),
                lng: coords.latLng.lng(),
            }
            console.log(LatLng);
            var marcador =new google.maps.Marker(
                {
                    position:LatLng,
                    draggable:true
                }
            );
            marcador.addListener("drag",(coords)=>{
                let miLatLng={
                    lat: coords.latLng.lat(),
                    lng:coords.latLng.lng()
                }
                console.log(miLatLng);
            });
            marcador.addListener("dblclick",()=>{
                marcador.setMap(null);
            })
            marcador.setMap(mapaGoogle);
            
            if (coordAnterior){
                var coordenadasPolyline=[
                    coordAnterior,
                    {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()

                    }
                ]
            }else{
                var coordenadasPolyline=[
                    {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    },
                    {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    }
                    
                ]
            }
            let miPolyline=new google.maps.Polyline({
                path: coordenadasPolyline,
                strokeColor:"#ff0000",
                strokeWeight:1
            });
            miPolyline.setMap(mapaGoogle);

            coordAnterior={
                lat: coords.latLng.lat(),
                lng: coords.latLng.lng()
            }
            //Agregamos el marcador al mapa de Google
            marcador.setMap(mapaGoogle);
        })
    }

    configurarMapa();
    
}