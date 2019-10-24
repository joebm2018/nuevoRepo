console.log("1-cobertura amplia");
console.log("2-cobertura daño a tercero")
var cobertura=prompt("ingrese opcion:");
var cuota=0
if (cobertura="1"){
    cuota=1200;
}else{
    cuota=950;
}
var alcohol=prompt("tiene habito de beber alcohol S/N:");
var cargaAlcohol=0;
if (alcohol=="S" || alcohol=="s"){
    cargaAlcohol=cuota*0.10;
}
var lentes=prompt("usa lentes S/N:");
var cagalentes=0;
if (lentes=="S" || lentes=="s"){
    cargalentes=cuota*0.05;
}
var enfermedad=prompt("padece enfermedad S/N:");
var cargaEnfermedad=0;
if (enfermedad=="S" || enfermedad=="s"){
    cargaEnfermedad=cuota*0.05;
}
var edad=prompt("mayor a 40 S/N:");
var cargaEdad=0;
if (edad=="S" || edad=="s"){
    cargaEdad=cuota*0.20;
}else{  
    cargaEdad=cuota*0.10;
}
var total=cargaEdad+cargaAlcohol+cargaEnfermedad+cargalentes+cuota;
console.log("total:",total);



