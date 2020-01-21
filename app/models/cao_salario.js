const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    dt_alteracao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "dt_alteracao"
    },
    brut_salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "brut_salario"
    },
    liq_salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "liq_salario"
    }
  };
  const options = {
    tableName: "cao_salario",
    comment: "",
    indexes: []
  };
  const CaoSalarioModel = sequelize.define("cao_salario_model", attributes, options);
  return CaoSalarioModel;
};