const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_noticia: {
      type: DataTypes.INTEGER(20).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_noticia"
    },
    assunto: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "assunto"
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
    foto: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "foto"
    },
    co_usuario: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    dt_noticia: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_noticia"
    }
  };
  const options = {
    tableName: "cao_noticia",
    comment: "",
    indexes: []
  };
  const CaoNoticiaModel = sequelize.define("cao_noticia_model", attributes, options);
  return CaoNoticiaModel;
};