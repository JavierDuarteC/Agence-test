const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_filial: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_filial"
    },
    no_filial: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_filial"
    },
    co_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    },
    estado: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "estado"
    }
  };
  const options = {
    tableName: "cao_help_filial",
    comment: "",
    indexes: [{
      name: "filialId",
      unique: false,
      type: "BTREE",
      fields: ["co_filial"]
    }]
  };
  const CaoHelpFilialModel = sequelize.define("cao_help_filial_model", attributes, options);
  return CaoHelpFilialModel;
};