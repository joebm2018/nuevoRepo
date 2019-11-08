import {Request,Response} from 'express';
import {Reserva} from '../configuracion/sequelize';

const Sequelize=require('sequelize');
const Op=Sequelize.Op;

export let getReservasByFechas=(req:Request,res:Response)=>{
    let {aula_id}=req.params;
    let {fechin,fechfin}=req.body;
//SELECT * FROM RESERVA WHERE RES_FECHIN>=FECHIN AND RES_FECHFIN<=FECHFIN AND AULA_ID=AULA_ID
    Reserva.findAll({
        where:{
            res_fechin:{[Op.gte]:fechin},
            res_fechfin:{[Op.lte]:fechfin},
            aula_id:aula_id
        }        
    }).then((reserva:any)=>{
        if (reserva){
            res.status(200).json(reserva)
        }else{
            res.status(404).json({
                mensaje:'Error',
                contenido:'No se encontro las reservas para esa aula'
            })
        }
    })
}