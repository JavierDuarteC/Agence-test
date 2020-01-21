const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_banc_horas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_banc_horas"
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
    periodo: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "periodo"
    },
    min_mes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "min_mes"
    },
    min_ferias: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "min_ferias"
    },
    min_pago: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "min_pago"
    },
    min_total: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "min_total"
    }
  };
  const options = {
    tableName: "cao_banco_horas",
    comment: "",
    indexes: []
  };
  const CaoBancoHorasModel = sequelize.define("cao_banco_horas_model", attributes, options);
  return CaoBancoHorasModel;
};