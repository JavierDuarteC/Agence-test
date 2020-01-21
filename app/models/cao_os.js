const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_os"
    },
    nu_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_os"
    },
    co_sistema: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    co_arquitetura: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_arquitetura"
    },
    ds_os: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_os"
    },
    ds_caracteristica: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_caracteristica"
    },
    ds_requisito: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_requisito"
    },
    dt_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_inicio"
    },
    dt_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_fim"
    },
    co_status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_status"
    },
    diretoria_sol: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "diretoria_sol"
    },
    dt_sol: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_sol"
    },
    nu_tel_sol: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_tel_sol"
    },
    ddd_tel_sol: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ddd_tel_sol"
    },
    nu_tel_sol2: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_tel_sol2"
    },
    ddd_tel_sol2: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ddd_tel_sol2"
    },
    usuario_sol: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "usuario_sol"
    },
    dt_imp: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_imp"
    },
    dt_garantia: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_garantia"
    },
    co_email: {
      type: DataTypes.INTEGER(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_email"
    },
    co_os_prospect_rel: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os_prospect_rel"
    }
  };
  const options = {
    tableName: "cao_os",
    comment: "",
    indexes: []
  };
  const CaoOsModel = sequelize.define("cao_os_model", attributes, options);
  return CaoOsModel;
};