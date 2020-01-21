const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_atividade: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_atividade"
    },
    ds_atividade: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_atividade"
    },
    co_tipo_usuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_tipo_usuario"
    }
  };
  const options = {
    tableName: "cao_atividade_teste",
    comment: "",
    indexes: []
  };
  const CaoAtividadeTesteModel = sequelize.define("cao_atividade_teste_model", attributes, options);
  return CaoAtividadeTesteModel;
};