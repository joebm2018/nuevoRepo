// cree un carrito de compras que tenga 
// nombre de usuaerio y una propiedad productos
//  que sea un arreglo donde guarde todo los 
// productos con nombre de producto cantidad y precio 
// y una fincion que me devuelva todo los 

var objPersona={
    nombres:'pepe lucho',
    dni:'29292929'
}

var objCarrito={
    usuario:objPersona,

    productos:[{
        nombreProducto:'Coca cola',
        cantidad:3,
        precio:15
    },
    {
        nombreProducto:'Inka Cola',
        cantidad:13,
        precio:35
    }
    ],
    verProductos: function(){
        console.log(this);        
    },
    mostrarProductos: function(){
        var total=0;
        for(i=0;i<this.productos.length;i++){
            console.log(`Productos  ${[i]} ${this.productos[i].nombreProducto} cantidad ${this.productos[i].cantidad} precio ${this.productos[i].precio}`);
            total=total+this.productos[i].precio;
        }
        console.log(`El total de su compra es ${total} `);
        
    }
}
objCarrito.verProductos();
var adicional={
    nombreProducto:'Sprite',
    cantidad:10,
    precio:100
}
objCarrito.productos.push(adicional);

objCarrito.mostrarProductos();

