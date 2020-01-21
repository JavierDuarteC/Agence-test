const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dia: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dia"
    },
    mes: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mes"
    },
    ano: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ano"
    }
  };
  const options = {
    tableName: "cao_feriados",
    comment: "",
    indexes: []
  };
  const CaoFeriadosModel = sequelize.define("cao_feriados_model", attributes, options);
  return CaoFeriadosModel;
};