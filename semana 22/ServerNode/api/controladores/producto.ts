import {Request,Response} from 'express'
export let getProductos=(req:Request,res:Response)=>{
    res.send("entregando la lista de productos");
}