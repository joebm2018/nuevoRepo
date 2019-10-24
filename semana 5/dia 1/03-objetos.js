// var objPerro={
//     raza:'Poodle',
//     tamanio:'Chiquito',
//     color:'blanquito',
//     caracter:'bullicioso',
//     edad:11,
//     hobbies:['masticarZapatos','perseguir Gatos','dormir']
// }
// var objPerro2={
//     raza:'Pastor Aleman',
//     tamanio:'Grande',
//     color:'negro con cafe',
//     genero:'Hembra'
// }
// console.log(objPerro);
// console.log(objPerro2);

// console.log(`el perro tiene estos hobbies: ${objPerro.hobbies[2]}`);
// var jauria=[objPerro,objPerro2];
// console.log(jauria);


var objPersona1={
    nombre:'Marta',
    apellidos:'Rojas',
    edad:29,
    dni:20202020,
    domicilio:'Cerro Colorado',
    profesion:'Medica',
    telefono:'909090909'
}

var objPersona2={
    nombre:'Freeddy',
    apellidos:'Morales',
    edad:33,
    dni:20211120,
    domicilio:'Paucarpata',
    profesion:'Psicologo',
    telefono:'909111111'
}
var personas=[];
personas.push(objPersona1);
personas.push(objPersona2);

for(var i=0 ; i<personas.length; i++){
    alert(`${personas[i].nombre} tiene el siguiente DNI: ${personas[i].dni}`);
    var nuevodni=prompt("ingrese su nuevo DNI:");
    personas[i].dni=nuevodni;
}
console.log(personas);