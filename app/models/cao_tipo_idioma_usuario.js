const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_idioma: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_idioma"
    },
    ds_idioma: {
      type: DataTypes.STRING(13),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_idioma"
    }
  };
  const options = {
    tableName: "cao_tipo_idioma_usuario",
    comment: "",
    indexes: []
  };
  const CaoTipoIdiomaUsuarioModel = sequelize.define("cao_tipo_idioma_usuario_model", attributes, options);
  return CaoTipoIdiomaUsuarioModel;
};