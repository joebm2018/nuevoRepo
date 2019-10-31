import express from 'express';

import { producto_router } from './../rutas/producto';
import { empleado_router } from '../rutas/empleado'

import  bodyParser from 'body-parser';
import morgan from 'morgan';

import {pruebaConexion} from '../config/sequelize';
import {sequelize} from '../config/sequelize'
export class Servidor{
    public app: express.Application;
    public puerto:number;
    
    constructor(){
        this.app=express();
        
        this.puerto=3000;
        // bodyparser es un midleware que puede ller el body de mis peticiones
        this.app.use(bodyParser.json())         // ya sea de forms o objetos json qu me envie el cliente
        this.app.use(bodyParser.urlencoded({extended:true}));  // metodo para leer la informcion del formulario
        //si utilizamos middleaware las rutas se colocan al final
        this.app.use(morgan('dev'));
        this.configurarRutas();
    }
    configurarRutas(){
        this.app.use(producto_router);
        this.app.use(empleado_router);
    }
    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor Corriendo Correctamente, en el puerto"+this.puerto);            
        })
        pruebaConexion();
        // sequelize.sync({force:false}).then(()=>{
        sequelize.sync({force:false}).then(()=>{
            console.log("Tablas creadas con exito");
            
        }).catch((error:any)=>{
            console.log("ERROR, no se pudo crear las tablas",error);
            
        })
    }

}