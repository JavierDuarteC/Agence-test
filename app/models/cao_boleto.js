const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_boleto: {
      type: DataTypes.INTEGER(128).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_boleto"
    },
    co_cliente: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    },
    co_sistema: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    co_os: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
    },
    valor: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valor"
    },
    vencimento: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "vencimento"
    },
    status: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    },
    boleto: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "boleto"
    },
    linha_dig: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "linha_dig"
    },
    parcela: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "parcela"
    }
  };
  const options = {
    tableName: "cao_boleto",
    comment: "",
    indexes: []
  };
  const CaoBoletoModel = sequelize.define("cao_boleto_model", attributes, options);
  return CaoBoletoModel;
};