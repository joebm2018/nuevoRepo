function persona(nombreInicial, edadKInicial, dniInicial,sueldoInicial=1000){
    var objPersona ={
        nombre:nombreInicial,
        edad:edadKInicial,
        dni:dniInicial,
        genero:"No Especifica",
        email: 'no dice',
        sueldo:sueldoInicial,
        verPersona:function(){
            console.log(`Nombre: ${this.nombre}
                Edad: ${this.edad}
                DNI: ${this.dni}
                Genero: ${this.genero}
                email: ${this.email}
                Sueldo: ${this.sueldo}`);
            
        },
        cambiarGenero: function(nuevoGenero){
            this.genero=nuevoGenero;
        },
        cambiarNombre: function(nuevoNombre){
            this.nombre=nuevoNombre;
            this.cambiarGenero('Hombre');
        }
        
    }
    return objPersona;    
}

var maria=persona('Maria','22','11223344');
var paolo=persona('paolo','35','11111111');

// console.log(maria);
// console.log(paolo);
maria.verPersona();
// objPersona.verPersona();
maria.cambiarGenero('Mujer');
maria.cambiarNombre("Mario");
maria.verPersona();



var arreglo=[0,1,2,3,4,5,6,7];
// va a eliminar X elementos desde una determinada posicion
arreglo.splice(3,1);
// va a eliminar 1 elemento desde la posicion 3
console.log(arreglo);
