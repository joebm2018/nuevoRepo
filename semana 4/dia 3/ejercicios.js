// declarar un arreglo de 10 nros enteros
//  y modificar dichos numeros por sus cuadrados 
// 4-7-9-3

var arreglo=[4,7,9,3,2,5,9];
var arregloCuadrados=[];
for(var i=0;i<arreglo.length;i++){
    arregloCuadrados[i]=arreglo[i]*arreglo[i];
    // arregloCuadrados[i]=arreglo[i]^2;
}
console.log(arreglo);
console.log(arregloCuadrados);


