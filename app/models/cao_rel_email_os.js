const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(20).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    co_email: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_email"
    },
    co_os: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_os"
    }
  };
  const options = {
    tableName: "cao_rel_email_os",
    comment: "",
    indexes: []
  };
  const CaoRelEmailOsModel = sequelize.define("cao_rel_email_os_model", attributes, options);
  return CaoRelEmailOsModel;
};