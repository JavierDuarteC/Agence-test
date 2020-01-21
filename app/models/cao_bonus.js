const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    bon_categoria: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "bon_categoria"
    },
    bon_inicio: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "bon_inicio"
    },
    bon_fim: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "bon_fim"
    },
    bon_valor_sem: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bon_valor_sem"
    },
    bon_valor_fimsem: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bon_valor_fimsem"
    }
  };
  const options = {
    tableName: "cao_bonus",
    comment: "",
    indexes: []
  };
  const CaoBonusModel = sequelize.define("cao_bonus_model", attributes, options);
  return CaoBonusModel;
};