const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_cliente: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_cliente"
    },
    dt_contato: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_contato"
    },
    fg_agendado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fg_agendado"
    },
    hr_ini: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "hr_ini"
    },
    hr_end: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "hr_end"
    }
  };
  const options = {
    tableName: "cao_cliente_contato",
    comment: "",
    indexes: []
  };
  const CaoClienteContatoModel = sequelize.define("cao_cliente_contato_model", attributes, options);
  return CaoClienteContatoModel;
};