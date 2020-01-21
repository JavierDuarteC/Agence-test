const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_movimento_os: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_movimento_os"
    },
    nu_os: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_os"
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    co_tipo_movimento: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_tipo_movimento"
    },
    nu_valor: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_valor"
    },
    ds_valor: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_valor"
    },
    usuario_obs: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "usuario_obs"
    },
    dt_ini: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_ini"
    },
    dt_fim: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_fim"
    }
  };
  const options = {
    tableName: "cao_movimento_os",
    comment: "",
    indexes: []
  };
  const CaoMovimentoOsModel = sequelize.define("cao_movimento_os_model", attributes, options);
  return CaoMovimentoOsModel;
};