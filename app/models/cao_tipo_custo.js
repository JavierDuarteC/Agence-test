const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_tipo_custo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_tipo_custo"
    },
    descricao: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "cao_tipo_custo",
    comment: "",
    indexes: []
  };
  const CaoTipoCustoModel = sequelize.define("cao_tipo_custo_model", attributes, options);
  return CaoTipoCustoModel;
};