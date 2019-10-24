// var Titulo=document.getElementById("titles");
// // ya al obtener el valor en una variable podemos cambiar su estilo desde javascript usando la propiedad style.<css>
// Titulo.style.color="red";

// var imagen=document.getElementById("img");
// imagen.style.borderRadius="30px";
// imagen.style.border="10px dashed green";
var hojaEstilo=document.getElementById("css");
function cambiarEstilo(){
    //setAtribute funcion que recibe dos valores
    // 1- EL ATRIBUTO que queremos cambiar (href,width,etc) 
    // 2- el VALOR del atributo
    hojaEstilo.setAttribute("href","./dark.css");
}