var btn=document.getElementById("boton");


btn.onclick=function(e){
    console.log(e);
    // type es una propiedad de e que nos devuelve el tipo de evento que se ha ejecutado
    console.log(e.type);
    
}

var link=document.getElementById("hiperviculo");
// hay elementos
// cocn preventDefault nos muestra pero no lleva a la direccion en este caso href
// link.onclick=function(e){
//     e.preventDefault();
// }

var cuadrado=document.getElementById("cuadrado");
var redondo=document.getElementById("redondo");


function Click(e){
    console.log(e);
    // target hace referncia al objeto del elemento, en este caso
    // al elemento al cual le hacemos click
    console.log(e.target);
    // getAttribute es una propiedad (funcion) que me permite
    // obtener un atributo del objetivo recibe un atributo del elemento
    console.log(e.target.getAttribute("goles"));
    if(e.target.getAttribute("id")==="cuadrado"){
        console.log("Es un cuadrado Brasileño");
    }else{
        // setAttribute cambiara el valo de un atributo en HTML, recibira el atributo y el valor a cambiar
        e.target.setAttribute("goles","4");
        console.log("es un redondo Guerrero");
        console.log(e.target.getAttribute("goles"));
    }
    // clientX y clientY imprimira las coordenadas respecto a la ventana, cuando hagamos CLIck
    console.log(`X=>${e.clientX} respecto a la ventana`);
    console.log(`Y=>${e.clientY} respecto a la ventana`);
    
    // y respecto del elemento las posiciones eria
    // offsetX y offsetY nos dara las coordenadas en un ejeX y ejeY respectivamente
    console.log(`X=>${e.offsetX} respecto del elemento`);
    console.log(`Y=>${e.offsetY} respecto del elemento`);
    // altKey es una propiedad que nos devolvera un booleano parra saber si se ha echo click con la tecla ALT
    if(e.altKey===true){
        console.log("me haz echo click presionando ALT");    
    }
    if(e.shiftKey===true){
        console.log("me haz echo click presionando SHIFT");    
    }
    if(e.ctrlKey===true){
        console.log("me haz echo click presionando CTRL");    
    }
    // this hara referencia al mismo objeto u en este caso sera equivalente 
    // e.target
    console.log(this);
}
// hacemos la referencia a partir de dos elementos distintos
cuadrado.onclick=Click;
redondo.onclick=Click;