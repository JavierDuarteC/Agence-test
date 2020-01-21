const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_autor: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_autor"
    },
    no_autor: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_autor"
    },
    co_filial: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_filial"
    },
    nu_ddd1: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_ddd1"
    },
    nu_tel1: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_tel1"
    },
    nu_ramal1: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_ramal1"
    },
    nu_ddd2: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_ddd2"
    },
    nu_tel2: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_tel2"
    },
    nu_ramal2: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_ramal2"
    },
    ds_email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_email"
    },
    ds_funcao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_funcao"
    }
  };
  const options = {
    tableName: "cao_help_autor",
    comment: "",
    indexes: [{
      name: "co_autor",
      unique: false,
      type: "BTREE",
      fields: ["co_autor"]
    }]
  };
  const CaoHelpAutorModel = sequelize.define("cao_help_autor_model", attributes, options);
  return CaoHelpAutorModel;
};