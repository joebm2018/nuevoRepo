import {Request, Response } from 'express';
import { Usuario } from '../configuracion/Sequelize';

export let getUsuario = (res:Response, req:Request)=>{
    Usuario.finAll.then((objUsuario:any)=>{
        res.status(200).json({
            mensaje:'ok',
            content: objUsuario
        })
    })
}

export let postUsuario=(req:Request, res:Response)=>{
    let objUsuario= Usuario.build(req.body);
    objUsuario.save().then((objUsuarioCreado:any)=>{
        res.status(201).json(
            {
                ok:true,
                content:objUsuarioCreado,
                mensaje:"Usuario creado correctamente"
            }
        )
    }).catch((error:any)=>{

        res.status(500).json(
            {
                ok:true,
                content: error,
                mensaje:"Error interno del servidor"
            }
        )
    })
}
