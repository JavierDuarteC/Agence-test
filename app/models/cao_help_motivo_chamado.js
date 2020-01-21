const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_motivo: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_motivo",
      unique: "co_motivo"
    },
    ds_motivo: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_motivo"
    }
  };
  const options = {
    tableName: "cao_help_motivo_chamado",
    comment: "",
    indexes: [{
      name: "co_motivo_2",
      unique: false,
      type: "BTREE",
      fields: ["co_motivo"]
    }]
  };
  const CaoHelpMotivoChamadoModel = sequelize.define("cao_help_motivo_chamado_model", attributes, options);
  return CaoHelpMotivoChamadoModel;
};