const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_ativ_comp: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_ativ_comp"
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data"
    },
    assunto: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "assunto"
    },
    tempo_gasto: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tempo_gasto"
    }
  };
  const options = {
    tableName: "cao_dr_ativ_comp",
    comment: "",
    indexes: [{
      name: "co_usuario",
      unique: false,
      type: "BTREE",
      fields: ["co_usuario"]
    }]
  };
  const CaoDrAtivCompModel = sequelize.define("cao_dr_ativ_comp_model", attributes, options);
  return CaoDrAtivCompModel;
};