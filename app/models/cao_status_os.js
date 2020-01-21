const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_status_atual: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_status_atual"
    },
    ds_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_status"
    }
  };
  const options = {
    tableName: "cao_status_os",
    comment: "",
    indexes: []
  };
  const CaoStatusOsModel = sequelize.define("cao_status_os_model", attributes, options);
  return CaoStatusOsModel;
};