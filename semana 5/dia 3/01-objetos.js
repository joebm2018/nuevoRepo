/*

var objCcelular={
    pantalla:'6 pulgadas',
    marca:'Huawei',
    menoria:'4 GB',
    sensorHuella:true
}
*/
// de un pequeño sistema de mantenimienrto de autos
// vamos a definir un objeto vehiculo con variables
// arreglos para agrupar una cantidad de propiedades 
// que en este caso son los mantenimientos que son varios
// y tambien vamos a poner en las propiedades del vehiculo
// funciones que permitan obtener datos del vehiculo
var objVehiculo1={
    marca:'toyota',
    modelo:'Corolla',
    color:'rojo',
    anio:2018,
    mantenimientos:[
        {
            fecha:'01-01-2019',
            observaciones:'sin observcaciones',
            kilometraje:9000
        },
        {
            fecha:'02-15-2019',
            observaciones:'se observo un raspon',
            kilometraje:10000
        }
    ],
    verVehiculos: function(){
        console.log(this);        
    },
    mostrarMantenimientos: function(){
      //this hace refencia la mi propio objeto
        for(i=0;i<this.mantenimientos.length;i++){
            console.log(`el Mantenimiento ${[i]} se llevo a cabo ${this.mantenimientos[i].fecha} con un Kilometraje de ${this.mantenimientos[i].kilometraje} y tiene las siguientes objservaciones ${this.mantenimientos[i].observaciones}`);
        }
    }
}
//objVehiculo1.verVehiculos();
var mantenimientoAdicional={
    fecha:'26-06-2019',
    observaciones:'estaba Sucio',
    kilometraje:11000
    
}
objVehiculo1.mantenimientos.push(mantenimientoAdicional);
objVehiculo1.verVehiculos();
objVehiculo1.mostrarMantenimientos();

