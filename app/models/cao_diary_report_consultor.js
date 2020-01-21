const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_diary_report_consultor: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_diary_report_consultor"
    },
    co_movimento: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_movimento"
    },
    co_atividade: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_atividade"
    },
    ds_empresa: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_empresa"
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
    dt_agendamento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_agendamento"
    },
    dt_agendamento_fim: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_agendamento_fim"
    },
    vl_fechamento: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "vl_fechamento"
    },
    co_cliente: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    }
  };
  const options = {
    tableName: "cao_diary_report_consultor",
    comment: "",
    indexes: []
  };
  const CaoDiaryReportConsultorModel = sequelize.define("cao_diary_report_consultor_model", attributes, options);
  return CaoDiaryReportConsultorModel;
};