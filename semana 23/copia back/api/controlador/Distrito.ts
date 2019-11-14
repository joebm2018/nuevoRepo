import {Request,Response} from 'express';
import { Distrito } from '../configuracion/Sequelize';

export let getDistrito=(req:Request,res:Response)=>{
    Distrito.findAll().then((objDistrito:any)=>{
        res.status(200).json({
            mensaje:'OK',
            contenido:objDistrito
        })
    })
}
export let postDistrito=(req:Request,res:Response)=>{
    let objDistrito=Distrito.build(req.body);
    objDistrito.save().then((objDistritoCreado:any)=>{
        res.status(201).json(
            {
                ok:true,
                contenido:objDistritoCreado,
                mensaje:"Distrito Creada correctamente"
            }
        )
    }).catch((error:any)=>{
        res.status(500).json(
            {
                ok:true,
                contenido:error,
                mensaje:"Error interno en el servidor"
            }
        )
    })
}