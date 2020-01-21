const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_movimento_justificativa: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_movimento_justificativa"
    },
    co_movimento: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_movimento"
    },
    nu_os: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_os"
    },
    ds_justificativa: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_justificativa"
    }
  };
  const options = {
    tableName: "cao_movimento_justificativa",
    comment: "",
    indexes: [{
      name: "co_movimento_justificativa",
      unique: false,
      type: "BTREE",
      fields: ["co_movimento_justificativa"]
    }]
  };
  const CaoMovimentoJustificativaModel = sequelize.define("cao_movimento_justificativa_model", attributes, options);
  return CaoMovimentoJustificativaModel;
};