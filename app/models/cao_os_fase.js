const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_fase: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_fase"
    },
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    descricao_ingl: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao_ingl"
    },
    ordem: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ordem"
    }
  };
  const options = {
    tableName: "cao_os_fase",
    comment: "",
    indexes: []
  };
  const CaoOsFaseModel = sequelize.define("cao_os_fase_model", attributes, options);
  return CaoOsFaseModel;
};