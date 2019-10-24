function decorador(texto:string){
    return function(target){
        target.prototype.saludar=function(){
            console.log("Holi "+texto);
            
        }
        target.prototype.anio=new Date().getFullYear();
    }
}
// decorador siempre se pone encima de lo que esta decorando
@decorador("Como Estan :D")
class Promocion{
    intengrantes: Array<string>;
    nombre:string;
    constructor(integrantes:Array<string>,nombre:string){
        this.intengrantes=integrantes;
        this.nombre=nombre;
    }
    imprimirIntegrantes(){
        this.intengrantes.forEach((integrante:string)=>{
            console.log(integrante);
            
        });
    }
}
let codigo6:Promocion=new Promocion(["JOE","RENZO","RONALD"],"LOS CEVICHELAS");
codigo6.saludar();
console.log(codigo6.anio);
