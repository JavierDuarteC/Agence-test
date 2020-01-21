const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_fatura_pag: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_fatura_pag"
    },
    co_fatura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_fatura",
      unique: "co_fatura"
    },
    dt_efetuado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_efetuado"
    },
    valor_pago: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valor_pago"
    }
  };
  const options = {
    tableName: "cao_fatura_pag",
    comment: "",
    indexes: []
  };
  const CaoFaturaPagModel = sequelize.define("cao_fatura_pag_model", attributes, options);
  return CaoFaturaPagModel;
};