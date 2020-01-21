const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idescala: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idescala"
    },
    qtd_visual: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "qtd_visual"
    },
    pontuacao: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "pontuacao"
    }
  };
  const options = {
    tableName: "cao_escala_ranking",
    comment: "",
    indexes: []
  };
  const CaoEscalaRankingModel = sequelize.define("cao_escala_ranking_model", attributes, options);
  return CaoEscalaRankingModel;
};