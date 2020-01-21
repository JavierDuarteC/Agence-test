const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_obs: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_obs"
    },
    descricao: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    co_cliente: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    },
    co_usuario: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    dt_obs: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_obs"
    }
  };
  const options = {
    tableName: "cao_obs_cliente",
    comment: "",
    indexes: []
  };
  const CaoObsClienteModel = sequelize.define("cao_obs_cliente_model", attributes, options);
  return CaoObsClienteModel;
};