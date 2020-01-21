const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_aviso: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_aviso"
    },
    ds_aviso: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_aviso"
    }
  };
  const options = {
    tableName: "cao_aviso",
    comment: "",
    indexes: []
  };
  const CaoAvisoModel = sequelize.define("cao_aviso_model", attributes, options);
  return CaoAvisoModel;
};