import {Request,Response} from 'express'
import {listaProductos} from '../seeders/dbProductos';
import { Resolver } from 'dns';


export let getProductos=(req:Request,res:Response)=>{

    // res.send("entregando la lista de productos");

    //VALIDAMOS SI HAY DATOS QYE NO RECIBAMOS UN NULL
    res.status(200);
    res.send({
        "success":true,
        "message":"Lista de Productos",
        "content":listaProductos;
    })    
}

export let getProductoById=(req:Request,res:Response)=>{
    // PARAMS LO VAMOS A RECIBIR COMO SI FUERAN TEXTO
    console.log(req.params);
    // console.log(req.params.idproducto); // AQUI SI SE PUEDE PONER EL ID NOMBRE
    let idRecibido=parseInt(req.params.idproducto);
    for (let i = 0; i < listaProductos.length; i++) {
        if (idRecibido==listaProductos[i].id){
            res.status(200);
            res.send({
                "success":true,
                "message":"Producto Encontrado",
                "content":listaProductos[i]
            });
            //SOLAMENTE PODEMOS ENVIAR UN RESPONSE POR ESO APENAS ENCUENTRE UN PRODUCTO TERMINE LA EJECUION DE MI FUNCION
            return;   
        }else{   
            res.status(404);         
            res.send({
                "success":false,
                "message":"Producto No Encontrado",
                "content":""
            })
        }        
    }
   // res.send("ok");  /// SE TIENE QUE DAR SIEMPRE UNA RESPUESTA
}
export let createProducto=(req:Request,res:Response)=>{
    console.log(req.body);
    listaProductos.push(req.body)
    res.status(201);
    res.send(
        {
            success:true,
            message:"Producto Creado",
            content:listaProductos
        }
    );
}