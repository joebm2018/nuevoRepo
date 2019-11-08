import { Request,Response,NextFunction } from "express";

var jwt=require('jsonwebtoken');

export let verificarToken=(token:string)=>{
    try{
        let data=jwt.verify(token,'codigo6',{algorithm:'RS256'});
        return data;

    }catch(error){
        console.log(error.message);
        return null;        
    }
}
export let wachiman=(req:Request,res:Response,next:NextFunction)=>{
    // LA FUNCION NEXT SIRVE PARA VERIFICAR SU TODO ESTA CORRECTO DA PASO A LA SIGUIETE RUTA
    if(req.headers.authorization){
        //ACA SEPARAMOS LA AUTON QUE VIENE => bearr 12345555.1212121.21212121
        let token=req.headers.authorization.split(" ")[1];
        let data=verificarToken(token);
        if (data){
            next();
        }else{
            res.status(401).json(({
                mensaje:'Error',
                contenido:'La token no ess valid o ya expiro'
            }))
        }
    }else{
        //NO HAY TOKEN
        res.status(401).json({
            mensaje:'Error',
            contenido:'Falta Token'
        })
    }
}