const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    co_conhecimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_conhecimento"
    },
    nv_conhecimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nv_conhecimento"
    },
    is_certificado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "is_certificado"
    }
  };
  const options = {
    tableName: "cao_conhecimento_usuario",
    comment: "",
    indexes: []
  };
  const CaoConhecimentoUsuarioModel = sequelize.define("cao_conhecimento_usuario_model", attributes, options);
  return CaoConhecimentoUsuarioModel;
};