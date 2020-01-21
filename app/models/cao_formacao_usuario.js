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
    tp_curso: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "tp_curso"
    },
    ds_curso: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_curso"
    },
    ds_instituicao: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_instituicao"
    },
    dt_conclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_conclusao"
    }
  };
  const options = {
    tableName: "cao_formacao_usuario",
    comment: "",
    indexes: []
  };
  const CaoFormacaoUsuarioModel = sequelize.define("cao_formacao_usuario_model", attributes, options);
  return CaoFormacaoUsuarioModel;
};