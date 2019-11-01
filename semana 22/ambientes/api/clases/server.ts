import express,{Request,Response} from 'express';
import { conexion } from '../config/sequelize';

export class Server{
    public app: express.Application;
    public puerto: any;
    constructor(){
        this.app=express();
        this.puerto= process.env.PORT || 3000;
        this.configurarRutas();
    }
    configurarRutas(){
        this.app.get('/',(req:Request,res:Response)=>{
            res.status(200).send("Bienvenido al servidor")
        })
    }
    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor corriendo en el puerto "+this.puerto);
            // true: elimina toda las tablas y las crea nuevamente
            //false:si las tavlas no existen en la base de datos }
            //las crea y si las tablas ya existen en la base de datos solo crea las nuevas tablas en caso de que hubieran
            conexion.sync({force:true}).then(()=>{
                console.log("Base de Datos creada correctamente");
                
            })
        })
    }
}