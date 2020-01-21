const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_tela: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_tela"
    },
    co_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    },
    co_sistema: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    ds_tela: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_tela"
    }
  };
  const options = {
    tableName: "cao_help_tela_chamado",
    comment: "",
    indexes: []
  };
  const CaoHelpTelaChamadoModel = sequelize.define("cao_help_tela_chamado_model", attributes, options);
  return CaoHelpTelaChamadoModel;
};