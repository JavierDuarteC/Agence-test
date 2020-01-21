const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idcategoria: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idcategoria"
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
    tableName: "cao_categorias_ombudsman",
    comment: "",
    indexes: []
  };
  const CaoCategoriasOmbudsmanModel = sequelize.define("cao_categorias_ombudsman_model", attributes, options);
  return CaoCategoriasOmbudsmanModel;
};