import { DataTypes } from 'sequelize';

export let Cotizacion_model = (sequelize: any) => {

    let cotizacion = sequelize.define('t_cotizacion', {
        coti_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        coti_nro: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        coti_fech: {
            type: DataTypes.DATE,
            allowNull: true
        },
        coti_est: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tableName: 't_cotizacion',
        timestamps: true
    });

    return cotizacion;

}