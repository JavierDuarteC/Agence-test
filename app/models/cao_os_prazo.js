const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_prazo: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_prazo"
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
    },
    co_fase: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_fase"
    },
    total_analista: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total_analista"
    },
    total_hora: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total_hora"
    }
  };
  const options = {
    tableName: "cao_os_prazo",
    comment: "",
    indexes: []
  };
  const CaoOsPrazoModel = sequelize.define("cao_os_prazo_model", attributes, options);
  return CaoOsPrazoModel;
};