//windows es un objeto que se crea junto vcon nuestra pagina y contiene toda la informacion del navegador

//devuelve la direccion de donde nos encontramos
// console.log(window.location.href);

// console.log("alto de mi ventana:"+window.outerHeight); //devuelve la altura de mmi ventana
// console.log("ancho de mi ventana:"+window.outerWidth);  //devuelve el ancho de mi venana

// console.log("alto sin ScroolBar:" + window.innerHeight);
// console.log("ancho sin ScroolBar:" + window.innerWidth);

// console.log("posicion de la barra Horizontal:" + window.pageXOffset);
// console.log("posicion de la barra Horizontal:" + window.pageYOffset);

// var mensaje=window.prompt("hola chicos");
// console.log(mensaje);

// window.alert("Deseas borrar el fisco duro");

// var ganamos=window.confirm("realmente ganamos a chile");
// console.log(ganamos);

var ventanita;
function abriVentana(){
    // ventanita=window.open("http://www.youtube.com");
    ventanita=window.open("http://www.codigo.edu.pe","_blank","width=600,height=400");
}
function cerrarVentana(){
    ventanita.close();
}
// function incrementarTamano(){
//     ventanita.resizeBy(20,20);
// }

function Imprimir(){
    window.print();
}

function detener(){
    window.stop();
}
abriVentana();