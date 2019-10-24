class Comprobante{
    comprobante_id = 0;
    comprobante_fecha= new Date();
    comprobante_total=0;
    comprobante_detalle=[];

    constructor(comp_id,comp_fecha){
        this.comprobante_id=comp_id;
        this.comprobante_fecha=comp_fecha;
    }

    anadirDetalle(objDetalle){
        this.comprobante_detalle.push(objDetalle);
    }
    mostrarFechacomprobante(){
        console.log(this.comprobante_fecha);
    }
    calcularSubTotal(cantidad,prec_unitario){
        return cantidad*prec_unitario;
    }
    mostrarComprobante(){
        console.log(this);
        
    }
}