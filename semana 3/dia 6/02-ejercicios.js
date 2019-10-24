// EDAD DEL PERSONAL
var añoNacimiento=prompt("ingrese Año de Nacimiento: ");
añoN=parseInt(añoNacimiento);
console.log("La edad es "+(2019-añoN)+ "o "+ ((2019-añoN)-1));

// V=A x L x H  m3
var costoPorMetroCubico=prompt("el costo por metro cubico:"); 
a=prompt("ingrese a:");
l=prompt("ingrese l:");
h=prompt("ingrese h");
v=parseInt(a)*parseInt(l)*parseInt(h);

nveces=prompt("veces que llena de agua la piscina:");
costo=v*costoPorMetroCubico*nveces;
console.log("el pago por "+v+"metros cubicos, y "+nveces+ " veces de llenado es:"+costo);

//volumen de un cilindro
// pi x r2 x H
var pi=3.1416;
radio=prompt("ingrese radio:");
H=prompt("altura");
console.log("El Volumen del Cilindro es:"+pi*radio^2*H);

//conversor de gradois celsius a farenheit

cels=prompt("ingrese grados celsius:");
far=(1.8*parseInt(cels))+32;
console.log(cels+"º Celsius equivalen a "+far+"º Farenheit");

// INGREDIENTES PLATO FAVORITO

var tazaLeche=prompt("cant de taza de leche:");
cCocoaPolvo=prompt("cantridad de cucharaditas de Cocoa en Polvo");
cHarinaPreparada=prompt("cantidad de cucharaditas de harina preparada");
azucar=prompt("Cantidad cucharaditas de Azucafr");

console.log("INGREDIENTES PARA LA PREPARACION DE \n\n ");
console.log(tazaLeche+" taza de leche \n"+cCocoaPolvo+" cucharaditas de cocoa en polvo \n"+cHarinaPreparada+" cucharitas de harina preparada");