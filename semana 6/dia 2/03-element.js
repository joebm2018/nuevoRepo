var divCuadrado=document.getElementById("cuadrado");
// GET ancho de un elemento
// devuelve un valor
console.log(divCuadrado.clientWidth);
// setendo=> el ancho
divCuadrado.style.width="250px";
// para colocar los estilos, cuando el estilo es de una sola palabra
// por ejemplo width, heigth, margin, padding, border,etx.
// la asignacion sera [elemento].style.[elmismo atributo];

// cuando el estilo es de una palabra compuesta
// por ejemplo: background-color, border-radius, margin-top, etc
// la asignacion sera usando Camel Case

// ejemplo: backgroundColor, borderRadius, marginTop

console.log(divCuadrado.clientWidth);
// GET alto de un elemento devuelve un valor numero en pixeles

console.log(divCuadrado.clientHeight);

// nos devuelve el ancho con bordes
console.log(divCuadrado.offsetWidth);

// nos devuelve el alto con bordes
console.log(divCuadrado.offsetHeight);

// nos devuelve el desplazamiento segun la parte superior
// a partir del contenedor en el que se encuentre
console.log(divCuadrado.offsetTop);

// nos devuelve el desplazamiento del lado izquierdo
// a partir del contenedor en el que se encuentre
console.log(divCuadrado.offsetLeft);

// la posicion del elemelnto con referencia al top
// hace referencia el contenido
// obtendra el nro de pixeles del elemento que ha sido desplazado con la barra de desplazamiento horizontal
console.log(divCuadrado.scrollTop);

// devolvera la posicion del elemento con referencia al left




// obtendra el nro de pixeles del elemento que ha sido desplazado con la barra de desplazamiento horizontal
console.log(divCuadrado.scrollLeft);
function deslizar(){
    var miCaja=document.getElementById("miDiv");
    miCaja.scrollTop=miCaja.scrollTop+20;
    miCaja.scrollLeft=miCaja.scrollLeft+10;
}
// ç=> y con la consola llamaemos 


// como asignar una fucnion a un determinado evento
// que en este caso va a ser el evento "click"
var boton=document.getElementById("botoncito")
// addEventListener va a recibir 2 cosas
// 1ra va a recibir el evento que hay q escuchar
// 2da una funcion , algo que ejecutar
boton.addEventListener("click",function(){
    // alert("me has dado click");
    divCuadrado.style.height=`${divCuadrado.clientHeight+5}px`;
    divCuadrado.style.left=`${divCuadrado.offsetLeft+6}px`;
});
var btnCambiarClase=document.getElementById("cambiarClase");
btnCambiarClase.addEventListener("click",function(){
//    className obtiene la clase del elemento
        // console.log(divCuadrado.className);
    if(divCuadrado.className=="redondo"){
        divCuadrado.className="cuadrado";
    }else{
        divCuadrado.className="redondo";    
    }
});

var multiclase=document.querySelector("#multiclase");
//classList que nos va a dar un arreglo con toda las clases que tiene nuestro elemento

var btnAgregarClase=document.getElementById("agregarClase");
btnAgregarClase.addEventListener("click",function(){ç
    multiclase.classList.remove("fondo");
    multiclase.classList.add("margen");
});