const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_chamado: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_chamado"
    },
    ds_chamado: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_chamado"
    },
    ds_solucao: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_solucao"
    },
    co_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_status"
    },
    co_motivo: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_motivo"
    },
    co_tela: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_tela"
    },
    co_autor: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_autor"
    },
    co_filial: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_filial"
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    dt_chamado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_chamado"
    },
    dt_solucao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_solucao"
    }
  };
  const options = {
    tableName: "cao_help_chamado",
    comment: "",
    indexes: [{
      name: "co_chamado",
      unique: false,
      type: "BTREE",
      fields: ["co_chamado"]
    }]
  };
  const CaoHelpChamadoModel = sequelize.define("cao_help_chamado_model", attributes, options);
  return CaoHelpChamadoModel;
};