const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_cidade: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_cidade"
    },
    no_cidade: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_cidade"
    },
    co_uf: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_uf"
    }
  };
  const options = {
    tableName: "cao_cidade",
    comment: "",
    indexes: []
  };
  const CaoCidadeModel = sequelize.define("cao_cidade_model", attributes, options);
  return CaoCidadeModel;
};