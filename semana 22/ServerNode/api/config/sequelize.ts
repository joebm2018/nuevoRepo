import {Sequelize} from 'sequelize'
import { producto_model } from '../models/producto'
import { empleado_model } from '../models/empleado'
import { ventas_model } from '../models/ventas'
import { detVentas_model } from '../models/det_ventas'
//Sequelize necesist para conectarse ('base de datos','usuario','contraseña', {opciones adiciconales})
export const sequelize=new Sequelize('tienda2','root','root',{
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
export const Empleado=empleado_model(sequelize,Sequelize);
export const Ventas=ventas_model(sequelize,Sequelize);
export const detVentas=detVentas_model(sequelize,Sequelize);

//LA RELACIONES EN LA TABLA VENTASS belongsto y hasmany para que vaya en ambos sentidos
Ventas.belongsTo(Empleado,{foreignKey:'emp_id'});
Empleado.hasMany(Ventas,{foreignKey:'emp_id'});
// RELACIONES DE VENTAS CON DET-VENTAS
detVentas.belongsTo(Ventas,{foreignKey:'vent_id'});
Ventas.hasMany(detVentas,{foreignKey:'vent_id'});
//PRODUCTO CON DET-VENTAS
detVentas.belongsTo(Producto,{foreignKey:'prod_id'});
Producto.hasMany(detVentas,{foreignKey:'prod_id'});