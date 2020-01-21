const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_escritorio: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_escritorio"
    },
    local: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "local"
    }
  };
  const options = {
    tableName: "cao_escritorio",
    comment: "",
    indexes: []
  };
  const CaoEscritorioModel = sequelize.define("cao_escritorio_model", attributes, options);
  return CaoEscritorioModel;
};