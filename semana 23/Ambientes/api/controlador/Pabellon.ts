//PABELLON CONTROLLER
import{Request,Response} from 'express'
import { Pabellon, Aula, TipoAula } from '../configuracion/sequelize'

export let getPabellones=(req:Request,res:Response)=>{

    Pabellon.findAll().then((objPabellones:any)=>{
        res.status(200).json({
            message:'ok',
            content:objPabellones
        })
    })
}
export let postPabellon=(req:Request,res:Response)=>{
    console.log(req.body);
    
    //VALIDAR SI REQ.BODY
    if (!req.body.pab_nom){
        res.status(400).json(
            {
                ok:false,
                mensaje:"No se recibieron todos los campos en el request"
            }
        );
        return;
    }
    // let objPabellon=Pabellon.build({
    //     pab_nom: req.body.pab_nom
    // });
    // console.log(objPabellon);
    //ó
    
    // let objPabellon=Pabellon.build();
    // objPabellon.pab_nom=req.body.pab_nom;
    // console.log(objPabellon);

    let objPabellon=Pabellon.build(req.body);
    //guardando el objeto pabellon en la base de datos
    objPabellon.save().then((objPabellonCreado:any)=>{
        res.status(201).json(
            {
                ok:true,
                contenido:objPabellonCreado,
                mensaje:"Pabellon Creado correctamente"
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
export let getPabellonesById=(req:Request,res:Response)=>{
    Pabellon.findByPk(req.params.id).then((objPabellon:any)=>{
        if (objPabellon){
            res.status(200).json({
                mensaje:"ok",
                pabellon:objPabellon
            })
        }else{
            res.status(500).json({
                mensaje:"error",
                contenido:"No se encontro el PAbellon"
            })
        }
    })
}
export let updatePabellon=(req:Request,res:Response)=>{
    Pabellon.update(
        {
            pab_nom:req.body.pabellon.pab_nom
        },
        {
            where:{
                pab_id: req.body.pabellon.pab_id
            }
        }
    ).then((pabActualizado:any)=>{
        Pabellon.findByPk(pabActualizado[0]).then((objPAbellon:any)=>{
            res.status(200).json({
                mensaje: "ok",
                contenido: objPAbellon
            })
        })
        
    }).catch((error:any)=>{
        res.status(501).json({
            mensaje:"error",
            contenido:error
        })
    })
}

export let getAulasXPabellon=(req:Request,res:Response)=>{
    Pabellon.findAll({
        include:[{
            model:Aula
        }]
    }).then((resultado:any)=>{
        res.status(200).json({
            mensaje: "ok",
            contenido: resultado
        })
    })
}

export let getAulasByPabellonId=(req:Request,res:Response)=>{
    Pabellon.findAll({
        where:{
            pab_id:req.params.id
        },
        include:[{
            model:Aula,
            include:[{
                model:TipoAula
            }]
        }]
    }).then((resultado:any)=>{
        res.status(200).json({
            mensaje:'ok',
            content:resultado
        })
    })
}