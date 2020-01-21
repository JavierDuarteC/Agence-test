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
    co_tipo_usuario: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_tipo_usuario"
    },
    co_sistema: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    in_ativo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "in_ativo"
    },
    co_usuario_atualizacao: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario_atualizacao"
    },
    dt_atualizacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_atualizacao"
    }
  };
  const options = {
    tableName: "permissao_sistema",
    comment: "",
    indexes: [{
      name: "co_usuario",
      unique: false,
      type: "BTREE",
      fields: ["co_usuario", "co_tipo_usuario", "co_sistema", "dt_atualizacao"]
    }]
  };
  const PermissaoSistemaModel = sequelize.define("permissao_sistema_model", attributes, options);
  return PermissaoSistemaModel;
};