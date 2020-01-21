const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idocorrencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idocorrencia"
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
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
    data: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data"
    },
    tipo: {
      type: DataTypes.ENUM('Interna', 'Externa'),
      allowNull: false,
      defaultValue: "Interna",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipo"
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    responsavel: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "responsavel"
    },
    data_fechamento: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data_fechamento"
    }
  };
  const options = {
    tableName: "cao_hist_ocorrencias_os",
    comment: "",
    indexes: [{
      name: "co_usuario",
      unique: false,
      type: "BTREE",
      fields: ["co_usuario"]
    }, {
      name: "co_os",
      unique: false,
      type: "BTREE",
      fields: ["co_os"]
    }]
  };
  const CaoHistOcorrenciasOsModel = sequelize.define("cao_hist_ocorrencias_os_model", attributes, options);
  return CaoHistOcorrenciasOsModel;
};