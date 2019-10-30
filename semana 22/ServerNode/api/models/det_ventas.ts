import { Sequelize,Model } from 'sequelize'

export const detVentas_model=(sequelize:Sequelize,type:any)=>{
    class detVentas_model extends Model{};
    detVentas_model.init({
        dv_id:{
            type:type.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true    
        },
        dv_cantidad:{
            type:type.INTEGER,
        },
        dv_punit:{
            type:type.FLOAT,
        },
        dv_importe:{
            type:type.FLOAT,
        }

    },{
        sequelize,
        modelName: 't_detventas',
        timestamps:false 
    })
    return detVentas_model;
}