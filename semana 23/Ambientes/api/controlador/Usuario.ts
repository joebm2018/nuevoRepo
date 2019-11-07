import {Request,Response} from 'express';
import {Usuario} from '../configuracion/sequelize';

const Sequelize=require('sequelize');
const Op= Sequelize.Op; // OPERADORES DE COMPRACION DE SEQUELIZE

export let crearUsuario=(req:Request,res:Response)=>{
    // build construye el objeto usuario mas no lo crea en la base de datros

    let objUsusario=Usuario.build(req.body.usuario);
    objUsusario.setSaltYHash(req.body.usuario.usu_pass);
    //save()=> promesa que GUARDA en el regustro en la base de datos
    objUsusario.save().then((usuarioCreado)=>{
        Usuario.findByPk(usuarioCreado.usu_id).then((usuarioEncontrado:any)=>{
            res.status(201).json({
                mensaje:'Usuario Creado',
                contenido:usuarioEncontrado
            })
        })
    }).catch((error:any)=>{
        res.status(501).json({
            mensaje:'Error',
            contenido: error
        })
    })
}
export let encontrarUsuByNomOApe=(req:Request,res:Response)=>{}
export let iniciarSesion=(req:Request,res:Response)=>{}
