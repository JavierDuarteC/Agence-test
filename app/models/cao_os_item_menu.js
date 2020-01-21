const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_item: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_item"
    },
    ds_item: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_item"
    },
    co_sistema: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    }
  };
  const options = {
    tableName: "cao_os_item_menu",
    comment: "",
    indexes: []
  };
  const CaoOsItemMenuModel = sequelize.define("cao_os_item_menu_model", attributes, options);
  return CaoOsItemMenuModel;
};