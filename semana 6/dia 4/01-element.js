var  principal=document.getElementById("principal");
var footer=document.getElementById("pie");
//CREAR UN ELEMENTO
// CREATEELEMENT("[NOMVRE DE LA ETIQUETA]")

var nuevodiv=document.createElement("div");
//colocar contenido dentro de un elelemtno HTML
// [elemento].innerHTML
nuevodiv.innerHTML="este es un texto de prueba";

// seteando o colocando un atributo en un elemento
// [elemento].setAttribute("nombre_del_atributo","[valor_del_atributo]")
nuevodiv.setAttribute("id","nuevoDiv");
// tambien se puede asignar attributos no validos por html
nuevodiv.setAttribute("nomb","unaSeccion");
nuevodiv.style.backgroundColor="rgbs(200,200,200,0.5)"

//agregando un elemento debtro de otro 
// [elemento].appendChild([elemento])
principal.appendChild(nuevodiv);

// // forma de crear un elemento dentro de otro mediante texto 
// con el atributo innerHTML
// footer.innerHTML="<h1>Titulo del pie</h1>";

// forma de crear un elemento dentro de otro 
// mediante la creacion de otro elemento

var miH1=document.createElement("h1");
miH1.innerHTML="pie de pagina";


var miH2=document.createElement("h2");
miH2.innerHTML="pie de pagina";


var miH3=document.createElement("h3");
miH3.innerHTML="pie de pagina";


footer.appendChild(miH1);
footer.appendChild(miH2);
footer.prepend(miH3); //pone al principio

// forma de crear un elemento dentro de otro mediante texto con el atributo innerHTML

//MODIFICA EL CONTENIDO CUANTO ESTA DESPIUES DE HABER CREASDO 
// footer.innerHTML="<h1>Titulo del pie</h1>";