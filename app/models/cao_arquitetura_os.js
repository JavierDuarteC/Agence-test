const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_arquitetura: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_arquitetura"
    },
    ds_arquitetura: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_arquitetura"
    }
  };
  const options = {
    tableName: "cao_arquitetura_os",
    comment: "",
    indexes: []
  };
  const CaoArquiteturaOsModel = sequelize.define("cao_arquitetura_os_model", attributes, options);
  return CaoArquiteturaOsModel;
};