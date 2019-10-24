let fact1 =new Factura(1,new Date(),18);
let producto1=new Detalle(1,3,"Ceervezas",14);
let producto2=new Detalle(2,1,"Piqueos",30);
console.log(producto1);
console.log(producto2);
// agregarlo
fact1.anadirDetalle(producto1);
fact1.anadirDetalle(producto2);
console.log("factura ya con productos",fact1);
fact1.recalculo();
fact1.mostrarComprobante();

let pedido1=new NotaPedido(1,new Date(),true);
let producto3=new Detalle(3,2,"pizzas",30);
let producto4=new Detalle(4,1,"jarra de Chicha",15);
pedido1.anadirDetalle(producto3);
pedido1.anadirDetalle(producto4);

pedido1.recalculo();
pedido1.mostrarComprobante();