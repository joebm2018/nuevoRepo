import {Request,Response} from 'express';
import {Empleado, Ventas} from '../config/sequelize';

export var empleadoCotroller={
    // getAll: (req:Request,res:Response)=>{
    traerTodos: (req:Request,res:Response)=>{

        Empleado.findAll({
            include:[
                {model:Ventas}
            ]
        }).then((empleados:any)=>{
            console.log("Empleados Obtenidos",empleados);
            res.status(200);
            res.send({
                success:true,//exito verdadero
                message:"Lista de Empleados",
                content:empleados
            })
        }).catch((error)=>{
            // res.status:404;
            console.log(error);
            res.status(404);
            res.send({
                success:false,//exito verdadero
                message:"ha ocurrido un error al obtener los datos",
                content:''
            });            
        })
    },
    crearEmpleado: (req:Request,res:Response)=>{
      //OBTENER EL REQ.BODY  ---> ir a rutas
        console.log(req.body);
        Empleado.create(req.body).then((empleadoCreado)=>{
            if(empleadoCreado){ 
                let respuesta={
                    success:true,
                    message:'Empleado Creado',
                    content:empleadoCreado
                }
                res.status(201).send(respuesta);
            }
        }).catch((error)=>{
            console.log("Error al crear Empleado",error);
            res.status(500).send("Ocurrio un Error");
        })
        
    },
    obtenerPorId: (req:Request,res:Response)=>{
        // let id_empleado=req.params.id_empleado;

        // cambiar por destructuracion
        let {id_empleado}=req.params;
        
        
        Empleado.findByPk(id_empleado).then((empleado)=>{
            if(empleado){
                let respuesta={
                    success:true,
                    message:'Empleado Encontrado',
                    content:empleado
                }
                res.status(200).send(respuesta)
            }else{
                let respuesta={
                    success:false,
                    message:'Empleado No Encontrado',
                    content:''
                }
                res.status(404).send(respuesta);
            }
        }).catch((error)=>{
            console.log("error al buscar por ID ", error);
            res.status(404).send("Empleado no encontrado");  
        })
    },
    borrarPorId: (req:Request,res:Response)=>{
        let {id_empleado}=req.params;
        Empleado.destroy({
            where:{
                emp_id:id_empleado
            }
        }).then((cantidad)=>{
            if (cantidad>0){
                console.log(cantidad);
                let respuesta={
                    success:true,
                    message:'Empleado Eliminado',
                    content:cantidad
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta={
                    success:false,
                    message:'Empleado Eliminado',
                    content:''
                }
                res.status(500).send(respuesta)
            }
        })
    },
    actualizarPorId: (req:Request,res:Response)=>{
        // req.query
        let {id_empleado}=req.params;
        Empleado.update(req.body,{
            where:{
                emp_id:id_empleado
            }
        }).then((cantidad:any)=>{
            if (cantidad>0){
                let respuesta={
                    success:true,
                    message:'Empleado Actualizado',
                    content:cantidad
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta={
                    success:false,
                    message:'Empleado No se Actualizo',
                    content:''
                }
                res.status(400).send(respuesta);
            }
        })
    }
}