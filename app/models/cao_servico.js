const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_servico: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_servico"
    },
    ds_servico: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_servico"
    }
  };
  const options = {
    tableName: "cao_servico",
    comment: "",
    indexes: []
  };
  const CaoServicoModel = sequelize.define("cao_servico_model", attributes, options);
  return CaoServicoModel;
};