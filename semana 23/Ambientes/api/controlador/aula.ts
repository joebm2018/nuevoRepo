import{Request,Response} from 'express'
import { Aula } from '../configuracion/sequelize';
export let getAulas=(req:Request,res:Response)=>{

}
export let postAula=(req:Request,res:Response)=>{

    let objAula=Aula.build(req.body);
    objAula.save().then((aulaCreada:any)=>{
        res.status(201).json({
            mensaje:'ok',
            content:aulaCreada
        })
    }).catch((error:any)=>{
        res.status(501).json({
            mensaje:'error',
            error
        })
    })
    
}