interface iPersona{
    nombre:string,
    apellido:string,
    dni:number
    // si le coloco otra propiedad aparecera error pero si le pongo ? desaparece
    talla?:number,
}
let persona2:iPersona={
    nombre:"Jorge",
    apellido:"Garnica",
    dni:66666666,
}
let mostrarDatos=(persona:iPersona)=>{
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if (persona.talla){
        console.log(persona.talla);   
    }else{
        console.log("No tiene talla");
        
    }
}

let objPersona:iPersona={
    nombre:"patricio",
    apellido:"Barriga",
    dni:29292929,
}
mostrarDatos(objPersona);