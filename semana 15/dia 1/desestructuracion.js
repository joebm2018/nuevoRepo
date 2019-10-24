let nro=[9,3,2,["x","y","z"],100,90,60];
let segundo=nro[1];
let primero=nro[0];
console.log(primero);
console.log(segundo);

let [uno,dos,tres,[xx,yy,zz], ...elresto]=nro;
console.log(uno);
console.log(dos);
console.log(tres);
console.log(tres-uno);
console.log(xx);
console.log(yy);
console.log(zz);
console.log(elresto);
// OBJETOS DESTRUCTURADOS

let cevichelas={
    id:1,
    precio:30,
    descripcion:"Ceviche mas chela, plato preferido de Codigo",
    componentes: ["Cerveza","Ceviche"],
    oferta:{
        descuento:5,
        condicion:"sabados y domingos"
    }
}

// let precio=cevichelas.precio;
// let descripcion=cevichelas.descripcion;

// console.log(precio);
// console.log(descripcion);

let{id,descripcion,precio:CuantoCuesta}=cevichelas;
console.log("Precio:",CuantoCuesta);
console.log(descripcion);
let{componentes:[primeros,SEGUNDOS]}=cevichelas;
console.log(primeros);
// un arreglo dentro de otro arreglo
let {oferta:{descuento}}=cevichelas;
console.log(descuento);
