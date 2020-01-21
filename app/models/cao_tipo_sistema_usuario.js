const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_sistema: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_sistema"
    },
    ds_sistema: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_sistema"
    }
  };
  const options = {
    tableName: "cao_tipo_sistema_usuario",
    comment: "",
    indexes: [{
      name: "co_sistema",
      unique: false,
      type: "BTREE",
      fields: ["co_sistema"]
    }]
  };
  const CaoTipoSistemaUsuarioModel = sequelize.define("cao_tipo_sistema_usuario_model", attributes, options);
  return CaoTipoSistemaUsuarioModel;
};