'use strict';
function funcionSinVariables(){

}
funcionSinVariables();
function Saludo(nombre){
    console.log(`hola ${nombre} como estas`);
    
}
Saludo("Lucia");
function potencia(num1,num2){
    let resultado=num1**num2;
    console.log("El resultado es", resultado);
    
}
potencia(2,3);

function arreglo(array){
    console.log(array);
}
var otroArreglo=[2,3,4,5];
arreglo(otroArreglo);

var miFunction=function(masTexto){
    console.log("texto"+masTexto);
}
miFunction("QWERTY");
// ... elementos recibira varias variables extra y creara
// un arreglo con esas variavles, estas no seran identificables
function muchasVariables(a,b, ...elementos){
    console.log(elementos);
    console.log(a);
    console.log(b);
}
muchasVariables(2,4);
muchasVariables(2,3,4,5,6,8);