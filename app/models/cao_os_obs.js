const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_obs: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_obs"
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
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
    }
  };
  const options = {
    tableName: "cao_os_obs",
    comment: "",
    indexes: []
  };
  const CaoOsObsModel = sequelize.define("cao_os_obs_model", attributes, options);
  return CaoOsObsModel;
};