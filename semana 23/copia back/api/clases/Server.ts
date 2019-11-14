import express,{Response,Request} from 'express';
import bodyParser from 'body-parser';
import { entidad_router } from '../rutas/Entidad';
import { conexion } from '../configuracion/Sequelize';
import { usuario_router } from '../rutas/Usuario';

export class Server{
    public puerto:any;
    public app: express.Application;

    constructor(){
        this.app=express();
        this.puerto=process.env.PORT || 3000;
        this.configurarBodyParser();
        this.configurarRutas();
    }

    configurarBodyParser(){
        this.app.use(bodyParser.json())
    }
    configurarRutas(){
        this.app.get('/',(req:Request,res:Response)=>{
            res.status(200).send("Bienvenido al Servidor");
        })
        this.app.use('/api',entidad_router);
        this.app.use('/api', usuario_router);
    }

    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor Corriendo en el puerto: "+this.puerto);
            conexion.sync({ force: false }).then(() => {
                console.log("Base de datos creada correctamente");        
              })
        })
    }
}