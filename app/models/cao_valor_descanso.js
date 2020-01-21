const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(40).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    co_usuario: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    segundos: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "segundos"
    },
    mes_referencia: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mes_referencia"
    }
  };
  const options = {
    tableName: "cao_valor_descanso",
    comment: "",
    indexes: []
  };
  const CaoValorDescansoModel = sequelize.define("cao_valor_descanso_model", attributes, options);
  return CaoValorDescansoModel;
};