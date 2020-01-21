const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_ramo: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_ramo"
    },
    ds_ramo: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_ramo"
    }
  };
  const options = {
    tableName: "cao_ramo",
    comment: "",
    indexes: []
  };
  const CaoRamoModel = sequelize.define("cao_ramo_model", attributes, options);
  return CaoRamoModel;
};