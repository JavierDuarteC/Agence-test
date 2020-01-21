const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_chamado: {
      type: DataTypes.INTEGER(20).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_chamado"
    },
    co_sistema: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    co_os: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
    },
    ds_chamado: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_chamado"
    },
    co_tipo: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_tipo"
    },
    co_prioridade: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_prioridade"
    },
    co_item: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_item"
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    ds_solucao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_solucao"
    },
    tempo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tempo"
    },
    dt_chamado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_chamado"
    },
    status: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    },
    co_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    co_analista: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_analista"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    }
  };
  const options = {
    tableName: "cao_os_chamado",
    comment: "",
    indexes: []
  };
  const CaoOsChamadoModel = sequelize.define("cao_os_chamado_model", attributes, options);
  return CaoOsChamadoModel;
};