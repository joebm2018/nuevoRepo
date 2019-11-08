import { DataTypes, Sequelize } from "sequelize";
const crypto = require ('crypto');
const jwt=require('jsonwebtoken'); // UTILIZAMOS LA LIBRERIA WEBTOKEN
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
    // sirve para encriptar la contraseña ingresada por el usuario
    usuario.prototype.setSaltYHash=function(password:any){
        this.usu_salt=crypto.randomBytes(16).toString('hex');
        this.usu_hash=crypto.pbkdf2Sync(password,
        this.usu_salt,1000,64,'sha512').toString('hex');
        }

    usuario.prototype.validPass=function(password:any){
        let usu_hash_tmp=crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
        return usu_hash_tmp===this.usu_hash; //SI SON IGUALES RETORNA TRUE 
                                            // SI NO SON IGUALES RETORNA FALSE
    }
    //llamamos a esta funcion despues que se ha logueado
    usuario.prototype.generarJWT=function(){
        let payload={
            usu_id:this.usu_id,
            usu_nom:`${this.usu_nom} ${this.usu_ape}`
        }
        let token=jwt.sign(payload,'codigo6',{expiresIn:'1h'},{algorithm:'RS256'})
        return token;
    }
    return usuario;
}