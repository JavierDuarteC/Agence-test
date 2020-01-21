const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_tipo_usuario: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_tipo_usuario"
    },
    ds_tipo_usuario: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_tipo_usuario"
    },
    co_sistema: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    }
  };
  const options = {
    tableName: "tipo_usuario",
    comment: "",
    indexes: [{
      name: "co_tipo_usuario",
      unique: false,
      type: "BTREE",
      fields: ["co_tipo_usuario", "co_sistema"]
    }]
  };
  const TipoUsuarioModel = sequelize.define("tipo_usuario_model", attributes, options);
  return TipoUsuarioModel;
};