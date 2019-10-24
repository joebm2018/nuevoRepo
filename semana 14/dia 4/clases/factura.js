class Factura extends Comprobante{
    factura_igv_porcentaje=0;  // porcentaje
    factura_igv_total=0;  // total

    constructor(comp_id,comp_fecha,fact_igv){
        // accedemos al construtor del comprobante y seteamos sus propiedades
        super(comp_id,comp_fecha);
        this.factura_igv_porcentaje=fact_igv;
    }

    recalculo(){
        let total=0;
        for(let i=0;i<this.comprobante_detalle.length;i++){
            let cantidad=this.comprobante_detalle[i].detalle_cant;
            let precio_unitario=this.comprobante_detalle[i].detalle_p_unit;
            
            total+=this.calcularSubTotal(cantidad,precio_unitario);
        }
        this.factura_igv_total=total*this.factura_igv_porcentaje/100;
        this.comprobante_total=total;
    }
}