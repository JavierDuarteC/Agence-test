const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_movimento: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_movimento"
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    dt_entrada: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_entrada"
    },
    dt_saida_almoco: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_saida_almoco"
    },
    dt_volta_almoco: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_volta_almoco"
    },
    dt_saida: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_saida"
    },
    is_encerrado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "is_encerrado"
    }
  };
  const options = {
    tableName: "cao_movimento",
    comment: "",
    indexes: [{
      name: "co_movimento",
      unique: false,
      type: "BTREE",
      fields: ["co_movimento"]
    }]
  };
  const CaoMovimentoModel = sequelize.define("cao_movimento_model", attributes, options);
  return CaoMovimentoModel;
};