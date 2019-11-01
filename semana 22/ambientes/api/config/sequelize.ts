import { pabellon_model } from "../modelos/pabellon";
import { aula_model } from "../modelos/aula";

const Sequelize=require("sequelize");
export const conexion= new Sequelize('aulas','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    //configuracion para lectura de fechas en la base de datos
    dialectOptions:{
        useUTC:false,
        dateStrings:true,
        typeCast:true
    }
});
export const Pabellon = pabellon_model(conexion);
export const Aula=aula_model(conexion);

Pabellon.hasMany(Aula,{foreignkey:'pab_id'});
Aula.belonsTo(Pabellon,{foreignkey:'pab_id'});