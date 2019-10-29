import {producto_model} from '../models/producto'
import {Sequelize} from 'sequelize'

//Sequelize necesist para conectarse ('base de datos','usuario','contraseña', {opciones adiciconales})
export const sequelize=new Sequelize('tienda','root','root',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-05:00',
    logging: console.log
});
export const pruebaConexion=()=>{
    sequelize.authenticate()
    .then(()=>{
        console.log("nos hemos conectado a la base de datos");        
    }).catch((error:any)=>{
        console.log("No se pudo conectar a la BD:",error);        
    })
}
export const Producto=producto_model(sequelize,Sequelize);
