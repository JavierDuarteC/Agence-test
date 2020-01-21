const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_daily: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_daily"
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
    },
    co_fase: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_fase"
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    ds_assunto: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_assunto"
    },
    tempo_gasto: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tempo_gasto"
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data"
    },
    co_status_atual: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_status_atual"
    },
    co_chamado: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_chamado"
    },
    co_atividade: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_atividade"
    }
  };
  const options = {
    tableName: "cao_os_daily_report",
    comment: "",
    indexes: []
  };
  const CaoOsDailyReportModel = sequelize.define("cao_os_daily_report_model", attributes, options);
  return CaoOsDailyReportModel;
};