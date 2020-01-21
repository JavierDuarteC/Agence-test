const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_agendamento: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_agendamento"
    },
    dt_hr_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_hr_inicio"
    },
    dt_hr_fim: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_hr_fim"
    },
    co_status_agendamento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_status_agendamento"
    },
    co_diary_report_consultor: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_diary_report_consultor"
    },
    co_complemento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_complemento"
    }
  };
  const options = {
    tableName: "cao_agendamento",
    comment: "",
    indexes: []
  };
  const CaoAgendamentoModel = sequelize.define("cao_agendamento_model", attributes, options);
  return CaoAgendamentoModel;
};