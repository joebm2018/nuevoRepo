// var nveces=+prompt("cuantos valores desea ingresar:");
// var contador=cMay=cMen=cIgu=0;
// do{
//     contador++;
//     var valor=+prompt("ingrese un numero Mayor, Menor o Igual a Cero:");
//     switch (true){
//         case valor>0: {
//             cMay++;
//             break;
//         }
//         case valor<0 : {
//             cMen++;
//             break;
//         }
//         case valor=0 :{
//             cIgu++;
//             break
//         }
//     }
    
// }while(contador<nveces)
// console.log("Mayores a 0:",cMay);
// console.log("menores a 0",cMen);
// console.log("Iguales a cero:",cIgu);

var diasAnio=0;
var acumDia=1;
do{
    diasAnio++;
    acumDia=acumDia*3;
    
}while (diasAnio<365)

console.log(acumDia);

do{
    var condicion=prompt("desea contniuar S/N:")

}while(condicion="S" || condicion="s")