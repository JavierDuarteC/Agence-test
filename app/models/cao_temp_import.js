const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    codigo: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "codigo"
    },
    descricao: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "cao_temp_import",
    comment: "",
    indexes: []
  };
  const CaoTempImportModel = sequelize.define("cao_temp_import_model", attributes, options);
  return CaoTempImportModel;
};