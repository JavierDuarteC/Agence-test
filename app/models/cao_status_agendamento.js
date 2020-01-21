const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_status_agendamento: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_status_agendamento"
    },
    ds_status_agendamento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_status_agendamento"
    }
  };
  const options = {
    tableName: "cao_status_agendamento",
    comment: "",
    indexes: []
  };
  const CaoStatusAgendamentoModel = sequelize.define("cao_status_agendamento_model", attributes, options);
  return CaoStatusAgendamentoModel;
};