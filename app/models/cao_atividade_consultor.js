const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_atividade: {
      type: DataTypes.INTEGER(20).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_atividade"
    },
    ds_atividade: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_atividade"
    },
    ativo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ativo"
    }
  };
  const options = {
    tableName: "cao_atividade_consultor",
    comment: "",
    indexes: []
  };
  const CaoAtividadeConsultorModel = sequelize.define("cao_atividade_consultor_model", attributes, options);
  return CaoAtividadeConsultorModel;
};