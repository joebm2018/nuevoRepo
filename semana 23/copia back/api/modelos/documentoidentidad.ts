import { DataTypes } from 'sequelize';

export let documentoidentidad_model = (sequelize: any) => {

  let docidentidad = sequelize.define('t_documentosidentidad', {
    doid_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    doid__nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 't_documentosidentidad',
    timestamps: true
  });

  return docidentidad;

}