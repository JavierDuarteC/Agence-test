const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_fatura: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_fatura"
    },
    co_cliente: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    },
    co_sistema: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    co_os: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os",
      references: {
        key: "co_os",
        model: "cao_os_model"
      }
    },
    num_nf: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "num_nf"
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total"
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valor"
    },
    data_emissao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data_emissao"
    },
    corpo_nf: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "corpo_nf"
    },
    comissao_cn: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "comissao_cn"
    },
    total_imp_inc: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total_imp_inc"
    }
  };
  const options = {
    tableName: "cao_fatura",
    comment: "",
    indexes: [{
      name: "co_os",
      unique: false,
      type: "BTREE",
      fields: ["co_os"]
    }]
  };
  const CaoFaturaModel = sequelize.define("cao_fatura_model", attributes, options);
  return CaoFaturaModel;
};