// EVENTOS  va a ser un conjunto de instrucciones que se ejecutaran cuando capturemos algun determinado
// evento o comportamiento en nuestro HTML, este dado por el usuario

// 1.- addEventListener      -> oyente

var divRojo=document.getElementById("rojo");
// addEventListener pedira 1 el evento y  2- la funcion a ajecutar

// la primera manera de pasarle la funcion sera dandole una funcion anonima
// divRojo.addEventListener("click",function(){
//     alert("has dado click en Rojo");
// });

// la 2da manera es recibir el evento y como 2do parametro es recibir el nombre 
// de la funcion a ejecutar pero solo referenciado el nombre, sin () al final
var Alerta = function(){
    alert("este es otro Alert");
}
// function Alerta(){
//     alert("este es otro Alert");
// }
divRojo.addEventListener("click",Alerta);
// -------------------------------- 
// hacemos referencia directamente al evento del elemento
// modelo de eventos basaico
// hacemos referencia a SU EVENTO directamente =>elemento.evento=funcion anonima
// a comparacion de los 
var divBlanco=document.getElementById("blanco");
divBlanco.onclick=function(){
    console.error("hola soy un Error de JavaScript:");
    
}


// ____________________________________________
var texto=function(){
    console.log("has echo click en el boton");
    
}
var texto2=function(){
    console.log("has echo click en el boton y a ejecutado otra funcion");
    
}
var btnDocumento=document.getElementById("boton");
btnDocumento.addEventListener("click",texto);
btnDocumento.addEventListener("click",texto2);
btnDocumento.removeEventListener("click",texto);

var entrada=document.getElementById("input");
// entrada.addEventListener("focus",function(){
//     console.log("me has echo focus");
    
// });
// evento blur se activara cuando se quite el focus de un elemento input
// entrada.addEventListener("blur",function(){
//     console.log("saliendo del focus");
    
// });
// change - al cambiar el contenido
entrada.addEventListener("change",function(){
    console.log("He cambiado");
    
});