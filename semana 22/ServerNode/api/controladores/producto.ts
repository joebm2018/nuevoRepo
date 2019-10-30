import {Request,Response} from 'express';
import {Producto} from '../config/sequelize';


export var productoController={
    getAll:(req:Request,res:Response) =>{
        Producto.findAll().then((productos:any)=>{
            console.log("obteniendo los productos",productos);
            // res.send("Productos Obtenidos");
            res.send({
                "message":"productos obtenids",
                "content":productos,
            })
        })
    }
}