import { DataTypes,Sequelize } from 'sequelize'
export let unidadMedida_model=(sequelize:Sequelize)=>{
    let uMedida=sequelize.define('t_unidadmedida',{
        per_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false            
        },
        
        per_nom:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        per_abr:{
            type:DataTypes.STRING(5),
            allowNull:false
        }
    },{
        tableName:'t_unidadmedida',
        timestamps:true
    })
    return uMedida;
}