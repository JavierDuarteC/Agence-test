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
    co_idioma: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_idioma"
    },
    nv_leitura: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nv_leitura"
    },
    nv_escrita: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nv_escrita"
    },
    nv_fala: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nv_fala"
    }
  };
  const options = {
    tableName: "cao_formacao_idioma_usuario",
    comment: "",
    indexes: []
  };
  const CaoFormacaoIdiomaUsuarioModel = sequelize.define("cao_formacao_idioma_usuario_model", attributes, options);
  return CaoFormacaoIdiomaUsuarioModel;
};