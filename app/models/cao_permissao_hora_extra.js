const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_permissao: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_permissao"
    },
    co_movimento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_movimento"
    }
  };
  const options = {
    tableName: "cao_permissao_hora_extra",
    comment: "",
    indexes: []
  };
  const CaoPermissaoHoraExtraModel = sequelize.define("cao_permissao_hora_extra_model", attributes, options);
  return CaoPermissaoHoraExtraModel;
};