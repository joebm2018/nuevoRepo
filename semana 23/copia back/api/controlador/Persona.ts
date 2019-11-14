import {Request,Response} from 'express';
import { Persona } from '../configuracion/Sequelize';
export let getPersona=(req:Request,res:Response)=>{
    Persona.findAll().then((objPersona:any)=>{
        res.status(200).json({
            mensaje:'OK',
            contenido:objPersona
        })
    })
}
export let postPersona=(req:Request,res:Response)=>{
    let objPersona=Persona.build(req.body);
    objPersona.save().then((objPersonaCreado:any)=>{
        res.status(201).json(
            {
                ok:true,
                contenido:objPersonaCreado,
                mensaje:"Persona Creada correctamente"
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