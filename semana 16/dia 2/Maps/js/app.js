window.onload=function () {
    // google.maps.Map (donde se va renderizar , centro, zoom)
    let mapa=new google.maps.Map();
    let divMapa=document.getElementById("mapa");
    let centro={lat:-14, lng:-71}
    let mapa=new google.maps.Map(divMapa,{
        center:centro,
        zoom:8
    });
}