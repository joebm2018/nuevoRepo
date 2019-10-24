window.onload=function(){
    tbody=document.getElementById("tbody");

    var productos = [
        {
            id:10,
            nombre:'Xiaomi Redmi 7',
            precio:150,
            descripcion:'Smartphone de 6 pulgadas con bateria de 4000 mAh, Buen rendimiento de gama media',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:20,
            nombre:'Razer Smartphone',
            precio:300,
            descripcion:'Bonito con pantalla 4k, bateria de alto rendimiento y excelente acabado',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:30,
            nombre:'Huawei P10',
            precio:700,
            descripcion:'El Huawei P10 Plus es un Smartphone que redefine la forma en que el mundo te ve',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:40,
            nombre:'Sony Xperia Z20',
            precio:600,
            descripcion:'Pantalla deficiente pero excelente rendimiento y protección contra liquidos',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:50,
            nombre:'Akita',
            precio:100,
            descripcion:'Pantalla deficiente pero excelente rendimiento y protección contra liquidos',
            imagen:'https://picsum.photos/200/200'
        }
    ];

    var divProducto="";
    productos.forEach(function(item){
        divProducto=divProducto+`<tr>
                                    <td>${item.id}</td>
                                    <td>${item.nombre}</td>
                                    <td>${item.precio}</td>
                                    <td>${item.descripcion}</td>
                                    <td><img src='${item.imagen}'></td>
                                </tr>`
    });
    tbody.innerHTML=divProducto;
}