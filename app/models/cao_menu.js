const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_menu"
    },
    ds_menu: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_menu"
    },
    ds_pagina: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_pagina"
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_imagem"
    }
  };
  const options = {
    tableName: "cao_menu",
    comment: "",
    indexes: []
  };
  const CaoMenuModel = sequelize.define("cao_menu_model", attributes, options);
  return CaoMenuModel;
};