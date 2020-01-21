const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idconhecimento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idconhecimento"
    },
    assunto: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "assunto"
    },
    conhecimento: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "conhecimento"
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "url"
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tags"
    },
    usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "usuario"
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "datahora"
    }
  };
  const options = {
    tableName: "cao_conhecimentos",
    comment: "",
    indexes: [{
      name: "usuario",
      unique: false,
      type: "BTREE",
      fields: ["usuario"]
    }]
  };
  const CaoConhecimentosModel = sequelize.define("cao_conhecimentos_model", attributes, options);
  return CaoConhecimentosModel;
};