// function multiplica(...numeros){
//     var resultado=1;
//     for(var i=1;i<numeros.length;i++){
//         resultado=resultado*numeros[i];
//     }
//     return resultado;
// }
// var multiplicacion=multiplica(2,3,4,5,6);
// console.log(multiplicacion);

// console.log(`${multiplica(9,9,9,10,8,7)} `);
// console.log(`${multiplica(9*9)}`);

// function alerta(){
//     var texto="este es el mensaje de alerta, chile ha perdido";
//     return texto;
// }
// console.log(alerta());
// function alerta2(){
//     return "peru se salvo";
// }
// console.log(alerta());

// console.log(alerta2());

// function menu() {
//     alert(` Opciones 
//     1.- Suma 
//     2.- Resta
//     3.- Salir `);
// }
// function calculadora(operacion) {
//     var a = +prompt("ingrese el primer numero:");
//     var b = +prompt("ingrese el segundo numero:");
//     if (operacion == "sumar") {
//         alert(`la suma de los valores sera ${a + b}`);

//     } else {
//         alert(`la suma de los valores sera ${a - b}`);
//     }
// }
// do {
//     menu();
//     var opcion = +prompt("Elija una opciomde las indicadas anteriormente");
//     if (opcion == 1) {
//         calculadora("sumar");
//     } else if (opcion == 2) {
//         calculadora("resta");
//     } else {
//         break;
//     }
// } while (opcion != 3)

// RESISTENCIAS 
// negro   0
// marron  1
// rojo    2
// naranja 3
// amarill 4
// Verde   5
// azul    6
// violeta 7
// gris    8
// blanco  9

function menu() {
    alert(` MENU DE COLORES
    1.- NEGRO
    2.- MARRON
    3.- ROJO
    4.- NARANJA
    5.- AMARILLO
    6.- VERDE
    7.- AZUL
    8.- VIOLETA
    9.- GRIS
    0.- BLANCO
    S.- Salir `);
}
// debugger;
var posicion = -1;
var resistencia=[1,1,1];
menu();
do {
    posicion++
    var opcion = +prompt(`Elija un COLOR PARA LA RESISTENCIA PARA LA BANDA ${posicion+1} `);
    switch (opcion) {
        case 1:
            resistencia[posicion] = 0;
            break;
        case 2:
            resistencia[posicion] = 1;
            break;
        case 3:
            resistencia[posicion] = 2;
            break;
        case 4:
            resistencia[posicion] = 3;
            break;
        case 5:
            resistencia[posicion] = 4;
            break;
        case 6:
            resistencia[posicion] = 5;
            break;
        case 7:
            resistencia[posicion] = 6;
            break;
        case 8:
            resistencia[posicion] = 7;
            break;
        case 9:
            resistencia[posicion] = 8;
            break;
        case 0:
            resistencia[posicion] = 9;
            break;
        default:
            break;
    }
} while (posicion < 2)
var valor="";
for(var i=0;i<resistencia.length;i++){
    valor=valor+resistencia[i];
}
// console.log(`Su Resistencia tiene un valor de ${resistencia} ohmnios`);
console.log(`Su Resistencia tiene un valor de ${valor} ohmnios`);

