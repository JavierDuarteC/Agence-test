const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    co_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_menu"
    },
    nu_pontos: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_pontos"
    },
    in_processado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "in_processado"
    }
  };
  const options = {
    tableName: "cao_menu_contador",
    comment: "",
    indexes: []
  };
  const CaoMenuContadorModel = sequelize.define("cao_menu_contador_model", attributes, options);
  return CaoMenuContadorModel;
};