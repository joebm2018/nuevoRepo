import { DataTypes } from 'sequelize';

export let productoentidadprecio_model = (sequelize: any) => {

    let prodEntiPrec = sequelize.define('t_productosentidadprecio', {
        prp_precio: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        pep_ifda:{
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 't_productosentidadprecio',
        timestamps: true
    });

    return prodEntiPrec;

}