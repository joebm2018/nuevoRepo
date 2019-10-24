console.log("REGALO POR EL DIA DEL AMOR");
console.log("1- TARJETAS");
console.log("2- CHOCOLARES");
console.log("3- FLORES");
console.log("4- ANILLO");
var regalo=+prompt("ingrese un numero entre 1-4:");
var rpta="";
if (regalo==1){
    rpta="$10.00 o menos";
}else if (regalo==2){
    rpta="$11.00 a $100.00";
}else if (regalo==3){
    rpta="$101.00 a $250.00";
}else if (regalo==4){
    rpta="$250.00 a mas ";
}else{
    rpta="Error"
}
console.log("el regalo escojido su costo sera de ",rpta);
