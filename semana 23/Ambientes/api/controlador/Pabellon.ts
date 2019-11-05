//PABELLON CONTROLLER
import{Request,Response} from 'express'
import { Pabellon } from '../configuracion/sequelize'

let getPabellones=(req:Request,res:Response)=>{

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