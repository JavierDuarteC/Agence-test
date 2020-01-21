const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_complemento_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_complemento_status"
    },
    ds_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_status"
    },
    co_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_status"
    }
  };
  const options = {
    tableName: "cao_status_cliente_complemento",
    comment: "",
    indexes: []
  };
  const CaoStatusClienteComplementoModel = sequelize.define("cao_status_cliente_complemento_model", attributes, options);
  return CaoStatusClienteComplementoModel;
};