const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idfonte: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idfonte"
    },
    idconhecimento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idconhecimento"
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "datahora"
    },
    arquivo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "arquivo"
    },
    caminho: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "caminho"
    }
  };
  const options = {
    tableName: "cao_conhecimentos_fontes",
    comment: "",
    indexes: [{
      name: "idconhecimento",
      unique: false,
      type: "BTREE",
      fields: ["idconhecimento"]
    }]
  };
  const CaoConhecimentosFontesModel = sequelize.define("cao_conhecimentos_fontes_model", attributes, options);
  return CaoConhecimentosFontesModel;
};