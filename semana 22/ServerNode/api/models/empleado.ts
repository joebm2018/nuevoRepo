import {Sequelize} from 'sequelize';

export var empleado_model=(sequelize:Sequelize)=>{
    var empleado_model=sequelize.define('t_empleado',{
        emp_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            
            autoIncrement:true
        },
        //nombre,apellido,dni
        emp_nom:{
            type:Sequelize.STRING(40)
        },
        emp_ape:{
            type:Sequelize.STRING(40)
        },
        emp_dni:{
            type:Sequelize.STRING(8)
        }
    })
} 