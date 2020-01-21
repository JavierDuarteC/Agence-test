const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_conhecimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_conhecimento"
    },
    ds_conhecimento: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_conhecimento"
    },
    co_sistema: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    }
  };
  const options = {
    tableName: "cao_tipo_conhecimento_usuario",
    comment: "",
    indexes: [{
      name: "co_conhecimento",
      unique: false,
      type: "BTREE",
      fields: ["co_conhecimento"]
    }]
  };
  const CaoTipoConhecimentoUsuarioModel = sequelize.define("cao_tipo_conhecimento_usuario_model", attributes, options);
  return CaoTipoConhecimentoUsuarioModel;
};