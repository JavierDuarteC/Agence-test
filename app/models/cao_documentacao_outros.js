const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(20).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    co_sistema: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_sistema"
    }
  };
  const options = {
    tableName: "cao_documentacao_outros",
    comment: "",
    indexes: []
  };
  const CaoDocumentacaoOutrosModel = sequelize.define("cao_documentacao_outros_model", attributes, options);
  return CaoDocumentacaoOutrosModel;
};