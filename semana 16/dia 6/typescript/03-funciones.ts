let sumar=(a:number,b:number):number=>{
    return a+b;
}

let suma:number=sumar(8,2);
console.log(suma);

let mostrarData = (persona:any)=>{
    console.log(persona.nombre);
    console.log(persona.apellido);
    
}
mostrarData({nombre:"Azucena",apellido:"Rodriguez"});