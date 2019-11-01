//MODELO pabellon
import {DataType, DataTypes} from 'sequelize'
export let pabellon_model=(sequelize:any)=>{
    let pabellon=sequelize.define('t_pabellon',{
        pab_id:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoIncrement:true,
            allowNull:false
        },
        pab_nombre:{
            type: DataTypes.STRING(50),
            allowNull:true
        }
    },{
        tableName:'t_pabellon',
        timestamps:true // campos de auditoria
    });
    return pabellon;
}