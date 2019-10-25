import {Request,Response} from 'express'
export let getProductos=(req:Request,res:Response)=>{
    res.send("entregando la lista de productos");
}

export let getProductoById=(req:Request,res:Response)=>{
    console.log(req.params);
    // console.log(req.params.idproducto); // AQUI SI SE PUEDE PONER EL ID NOMBRE
    res.send("ok");  /// SE TIENE QUE DAR SIEMPRE UNA RESPUESTA
}