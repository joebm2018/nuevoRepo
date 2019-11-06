import { DataTypes, Sequelize } from "sequelize";

export let usuario_model=(sequelize:Sequelize)=>{
    var usuario=sequelize.define('t_usuarrio',{
        usu_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_nom:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        usu_ape:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        usu_email:{
            type: DataTypes.STRING(30),
            allowNull: true
        },
        usu_hash:{
            type: DataTypes.TEXT,
        },
        usu_salt:{
            type: DataTypes.TEXT,
        }    
    },{
        tableName: 't_usuario',
        timestamps: true
    });
    return usuario;
}