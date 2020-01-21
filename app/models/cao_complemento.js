const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_complemento: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_complemento"
    },
    ds_complemento: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_complemento"
    }
  };
  const options = {
    tableName: "cao_complemento",
    comment: "",
    indexes: []
  };
  const CaoComplementoModel = sequelize.define("cao_complemento_model", attributes, options);
  return CaoComplementoModel;
};