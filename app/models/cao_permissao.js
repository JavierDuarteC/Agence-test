const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    permissao_intervalo: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "permissao_intervalo"
    },
    permissao_hora_extra: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "permissao_hora_extra"
    }
  };
  const options = {
    tableName: "cao_permissao",
    comment: "",
    indexes: [{
      name: "co_usuario",
      unique: false,
      type: "BTREE",
      fields: ["co_usuario"]
    }]
  };
  const CaoPermissaoModel = sequelize.define("cao_permissao_model", attributes, options);
  return CaoPermissaoModel;
};