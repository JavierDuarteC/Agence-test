const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idpontos: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idpontos"
    },
    pontuacao: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "pontuacao",
      references: {
        key: "idescala",
        model: "cao_escala_ranking_model"
      }
    },
    co_coordenador: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_coordenador",
      references: {
        key: "co_usuario",
        model: "cao_usuario_model"
      }
    },
    idconhecimento: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idconhecimento",
      references: {
        key: "idconhecimento",
        model: "cao_conhecimentos_model"
      }
    }
  };
  const options = {
    tableName: "cao_pontos_conhecimento",
    comment: "",
    indexes: [{
      name: "pontuacao",
      unique: false,
      type: "BTREE",
      fields: ["pontuacao", "co_coordenador", "idconhecimento"]
    }, {
      name: "co_coordenador",
      unique: false,
      type: "BTREE",
      fields: ["co_coordenador"]
    }, {
      name: "idconhecimento",
      unique: false,
      type: "BTREE",
      fields: ["idconhecimento"]
    }]
  };
  const CaoPontosConhecimentoModel = sequelize.define("cao_pontos_conhecimento_model", attributes, options);
  return CaoPontosConhecimentoModel;
};