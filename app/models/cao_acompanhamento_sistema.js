const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_acompanhamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_acompanhamento"
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "senha"
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    status: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    }
  };
  const options = {
    tableName: "cao_acompanhamento_sistema",
    comment: "",
    indexes: []
  };
  const CaoAcompanhamentoSistemaModel = sequelize.define("cao_acompanhamento_sistema_model", attributes, options);
  return CaoAcompanhamentoSistemaModel;
};