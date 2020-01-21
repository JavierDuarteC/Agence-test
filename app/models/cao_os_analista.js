const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_analista: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_analista"
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    }
  };
  const options = {
    tableName: "cao_os_analista",
    comment: "",
    indexes: []
  };
  const CaoOsAnalistaModel = sequelize.define("cao_os_analista_model", attributes, options);
  return CaoOsAnalistaModel;
};