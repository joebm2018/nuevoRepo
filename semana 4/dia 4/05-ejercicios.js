var monto=+prompt("Ingrese Monto a PAgar");
var cantidadRecibida=+prompt("Ingrese Cantidad Recibida:");

function tienda(mo,cr){
    console.log(`El Recibo es por ${mo}, el cliente pago con ${cr} y su vuelto es ${mo-cr}`);
    
}
tienda(monto,cantidadRecibida);



// realice el mismo ejercicio depero el reciba en vez de un solo monto a pagar un arreglo con el costo desglosado

// consumo=[20,40,10]