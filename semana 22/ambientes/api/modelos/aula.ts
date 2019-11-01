//MODELO AULA
import {DataType, DataTypes} from 'sequelize'
export let aula_model=(sequelize:any)=>{
    let aula=sequelize.define('t_aula',{
        aula_id:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoIncrement:true,
            allowNull:false
        },
        aula_nro:{
            type: DataTypes.STRING(10),
            allowNull:true
        },
        aula_piso:{
            type: DataTypes.INTEGER,
            allowNull:true
        },
        aula_capac:{
            type: DataTypes.INTEGER,
            allowNull:true
        }

    },{
        tableName:'t_aula',
        timestamps:true // campos de auditoria
    });
    return aula;
}