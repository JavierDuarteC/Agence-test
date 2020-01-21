const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_diary_report: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_diary_report"
    },
    hr_gasta: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "hr_gasta"
    },
    co_atividade: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_atividade"
    },
    ds_assunto: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_assunto"
    },
    co_movimento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_movimento"
    },
    nu_os: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_os"
    },
    co_sistema: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    }
  };
  const options = {
    tableName: "cao_diary_report",
    comment: "",
    indexes: []
  };
  const CaoDiaryReportModel = sequelize.define("cao_diary_report_model", attributes, options);
  return CaoDiaryReportModel;
};