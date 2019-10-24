var cafe="Latte";
var jugo={
    ingrediente1:'papaya',
    ingrediente2:'agua',
    ingrediente3:'azucar',
    ingrediente4:'canela',
    ingrediente5:null
}
delete cafe;
delete jugo.ingrediente4;
console.log(jugo);


//copiar objeto
var gato={
    nombre:'Salem',
    color:'negro'
}
var gato2=gato;

// console.log(gato);
// console.log(gato2);

gato2.color='blanco';
// console.log(gato);
// console.log(gato2);

// var gato3=Object.assign(gato);
var gato3={...gato};
//copiamos un objeto pero sin hacer referencia a su misma direccion de memoria
gato3.color='verde';
console.log(gato);
console.log(gato3);

console.log("COMPARANDO GATOS");
console.log(gato==gato2);
console.log(gato==gato3);

var auto={
    motor:'6 cilindros',
    cambis:'manual',
    suspencion:'Hidraulica',
    asientos:'tela'
}

//rtornar solo las propiedades

console.log(Object.keys(auto));

// si desean saber este concepto esta dentro destructuracion viene desde la version 8
function retornarAuto(auto){
    return {...auto,
        asientos:'cuero',
        lues:'neon'};

}

console.log(retornarAuto());
 

var AutoNuevo= retornarAuto(auto);
console.log(AutoNuevo);
