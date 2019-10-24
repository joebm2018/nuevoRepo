class NotaPedido extends Comprobante{
    pedido_envio=false;
    constructor(comp_id,comp_fecha,envio_pedido){
        super(comp_id,comp_fecha);
        this.pedido_envio=envio_pedido;

    }
    recalculo(){
        let total=0;
        for(let i=0; this.comprobante_detalle.length;i++){
            
            let cantidad=this.comprobante_detalle[i].detalle_cant;
            let precioUnitario=this.comprobante_detalle[i].detalle_p_unit;

            total+=this.calcularSubTotal(cantidad,precioUnitario);
        }
        this.comprobante_total=total;
    }
}