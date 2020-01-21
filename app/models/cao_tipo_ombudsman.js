const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idtipo: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idtipo"
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "cao_tipo_ombudsman",
    comment: "",
    indexes: []
  };
  const CaoTipoOmbudsmanModel = sequelize.define("cao_tipo_ombudsman_model", attributes, options);
  return CaoTipoOmbudsmanModel;
};