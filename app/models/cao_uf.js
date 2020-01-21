const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_uf: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_uf"
    },
    ds_uf: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_uf"
    }
  };
  const options = {
    tableName: "cao_uf",
    comment: "",
    indexes: []
  };
  const CaoUfModel = sequelize.define("cao_uf_model", attributes, options);
  return CaoUfModel;
};