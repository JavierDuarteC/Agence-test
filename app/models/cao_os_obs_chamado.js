const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_obs: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_obs"
    },
    co_chamado: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_chamado"
    },
    co_usuario: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
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
    dt_obs: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_obs"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    arquivo_obs: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "arquivo_obs"
    }
  };
  const options = {
    tableName: "cao_os_obs_chamado",
    comment: "",
    indexes: []
  };
  const CaoOsObsChamadoModel = sequelize.define("cao_os_obs_chamado_model", attributes, options);
  return CaoOsObsChamadoModel;
};