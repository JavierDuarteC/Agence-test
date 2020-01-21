const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_status"
    },
    ds_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_status"
    }
  };
  const options = {
    tableName: "cao_status_cliente",
    comment: "",
    indexes: []
  };
  const CaoStatusClienteModel = sequelize.define("cao_status_cliente_model", attributes, options);
  return CaoStatusClienteModel;
};