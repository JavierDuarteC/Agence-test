const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_part_funcionario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_part_funcionario"
    },
    pc_participacao: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "pc_participacao"
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    co_escritorio: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_escritorio"
    },
    dt_referencia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_referencia"
    }
  };
  const options = {
    tableName: "cao_participacao_funcionario",
    comment: "",
    indexes: []
  };
  const CaoParticipacaoFuncionarioModel = sequelize.define("cao_participacao_funcionario_model", attributes, options);
  return CaoParticipacaoFuncionarioModel;
};