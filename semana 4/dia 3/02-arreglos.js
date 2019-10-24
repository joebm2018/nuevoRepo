var marcas= ["Hyundai","Toyota","kia",
"Audi","Nissan"];
var equipos=[];

console.log(marcas[2]);
console.log(marcas);
marcas[3]="Daewoo";
console.log(marcas);
// PROPIEDADES BASICAS
// lentgh=cant de elementos
// 
var elementos=marcas.length;
console.log(elementos);
console.log(marcas.length);
// recorriendo un arreglo
for(var i=0;i<marcas.length;i++){
    console.log(`Posicion ${i}=>${marcas[i]}`);
}