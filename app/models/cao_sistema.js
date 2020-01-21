const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_sistema: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_sistema"
    },
    co_cliente: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    co_arquitetura: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_arquitetura"
    },
    no_sistema: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_sistema"
    },
    ds_sistema_resumo: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_sistema_resumo"
    },
    ds_caracteristica: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_caracteristica"
    },
    ds_requisito: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_requisito"
    },
    no_diretoria_solic: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_diretoria_solic"
    },
    ddd_telefone_solic: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ddd_telefone_solic"
    },
    nu_telefone_solic: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_telefone_solic"
    },
    no_usuario_solic: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_usuario_solic"
    },
    dt_solicitacao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_solicitacao"
    },
    dt_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_entrega"
    },
    co_email: {
      type: DataTypes.INTEGER(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_email"
    }
  };
  const options = {
    tableName: "cao_sistema",
    comment: "",
    indexes: [{
      name: "co_sistema",
      unique: false,
      type: "BTREE",
      fields: ["co_sistema"]
    }]
  };
  const CaoSistemaModel = sequelize.define("cao_sistema_model", attributes, options);
  return CaoSistemaModel;
};