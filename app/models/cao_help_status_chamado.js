const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_status: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_status",
      unique: "co_status"
    },
    ds_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_status"
    }
  };
  const options = {
    tableName: "cao_help_status_chamado",
    comment: "",
    indexes: [{
      name: "co_status_2",
      unique: false,
      type: "BTREE",
      fields: ["co_status"]
    }]
  };
  const CaoHelpStatusChamadoModel = sequelize.define("cao_help_status_chamado_model", attributes, options);
  return CaoHelpStatusChamadoModel;
};