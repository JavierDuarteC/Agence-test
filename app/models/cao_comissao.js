const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_comissao: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_comissao"
    },
    co_fatura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_fatura",
      unique: "co_fatura"
    },
    dt_efetuado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_efetuado"
    }
  };
  const options = {
    tableName: "cao_comissao",
    comment: "",
    indexes: []
  };
  const CaoComissaoModel = sequelize.define("cao_comissao_model", attributes, options);
  return CaoComissaoModel;
};