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
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_status"
    }
  };
  const options = {
    tableName: "cao_os_status",
    comment: "",
    indexes: []
  };
  const CaoOsStatusModel = sequelize.define("cao_os_status_model", attributes, options);
  return CaoOsStatusModel;
};