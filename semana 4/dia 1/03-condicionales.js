console.log("1- verano");
console.log("2- invierno");
console.log("3- primavera");
console.log("4- otoño");
var estacion=+prompt("ingrese un numero entre 1-4:");
var rpta="";
if (estacion==1){
    rpta="verano";
}else if (estacion==2){
    rpta="invierno";
}else if (estacion==3){
    rpta="primavera";
}else if (estacion==4){
    rpta="otoño";
}else{
    rpta="Error"
}
console.log("estamos en ",rpta);
