var persona2 = {
    nombre: "Jorge",
    apellido: "Garnica",
    dni: 66666666
};
var mostrarDatos = function (persona) {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if (persona.talla) {
        console.log(persona.talla);
    }
    else {
        console.log("No tiene talla");
    }
};
var objPersona = {
    nombre: "patricio",
    apellido: "Barriga",
    dni: 29292929
};
mostrarDatos(objPersona);
