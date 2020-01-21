const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_obs: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_obs"
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    dt_obs: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_obs"
    }
  };
  const options = {
    tableName: "cao_sistema_obs",
    comment: "",
    indexes: []
  };
  const CaoSistemaObsModel = sequelize.define("cao_sistema_obs_model", attributes, options);
  return CaoSistemaObsModel;
};