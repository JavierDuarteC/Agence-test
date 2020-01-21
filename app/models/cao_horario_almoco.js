const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    almoco_saida_hora: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "almoco_saida_hora"
    },
    almoco_volta_hora: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "almoco_volta_hora"
    }
  };
  const options = {
    tableName: "cao_horario_almoco",
    comment: "",
    indexes: []
  };
  const CaoHorarioAlmocoModel = sequelize.define("cao_horario_almoco_model", attributes, options);
  return CaoHorarioAlmocoModel;
};