function patrick(target,key){
    console.log("nombre de la funcion: ",key);
    
    console.log("Ya Pero despues me llevas a comer");    
}
class Persona{
    private nombre:string;
    private apellido:string;
    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    @patrick
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y m voy a consumir mis cevichelas`);
        
    }
}
let alumnoCodigo1:Persona =new Persona("Joe","Barrionuevo");
alumnoCodigo1.saludar();