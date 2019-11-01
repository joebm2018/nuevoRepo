import {Sequelize, Model} from 'sequelize';

// import { modelo_router} from '../rutas/'

export var empleado_model=(sequelize:Sequelize, type:any)=>{
  class empleado_model extends Model{};
  empleado_model.init({
      //INIT (CAMPOS DE MI TABLA, OPCIONES DE MI TABLA)
      emp_id:{
          type:type.INTEGER,
          primaryKey:true,
          allowNull:false,
          autoIncrement:true
      },
      emp_nom:{
          type:type.STRING(100)
      },
      emp_ape:{
        type:type.STRING(100)
      },
      emp_dni:{
        type:type.STRING(10)
      }
      },{
        sequelize,
        modelName: 't_empleados',
        timestamps:false  //no cree dos columnas 
      })

      // empleado_model.prototype.mostrarDatos = function(){
      //   console.log();
        
      // }
      return empleado_model;
}