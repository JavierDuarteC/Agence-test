const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_dt_disp: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_dt_disp"
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    dt_disp: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_disp"
    },
    dt_alt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_alt"
    }
  };
  const options = {
    tableName: "cao_usuario_dt_disp",
    comment: "",
    indexes: []
  };
  const CaoUsuarioDtDispModel = sequelize.define("cao_usuario_dt_disp_model", attributes, options);
  return CaoUsuarioDtDispModel;
};