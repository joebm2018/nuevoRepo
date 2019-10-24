// document
// representa al DOM => documento object model
// manipulando el dom

// 1.- REFERENCIAR  a un elemento del dom mediante su ID o identificador
var miTitulo=document.getElementById("titulo");
console.log(miTitulo);
// 2.- referenciar a un conjunto de elementos del dom dado el nombre de la clase que compartan
var misParrafos=document.getElementsByClassName("descripcion");
console.log(misParrafos);
// 3.- referenciar a un conjunto de elementos del dom dado el nombre de su etiqueta
var misLis=document.getElementsByTagName("li");
console.log(misLis);
// 4.- Referenciar a un conjunto de elementos del DOM dado un selector como en css
var misUls=document.querySelectorAll("section article ul");
console.log(misUls);
// 5.- Referenciar a la preimera coincidencia dado un selector como en css
// OJO solo devuelve un elemento asi existan mas de uno que coincida con la seleccion
var unParrafo=document.querySelector("p");
console.log(unParrafo);
