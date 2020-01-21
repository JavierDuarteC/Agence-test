const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_pagamento: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: true,
      comment: null,
      field: "id_pagamento"
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_usuario",
      references: {
        key: "co_usuario",
        model: "cao_usuario_model"
      }
    },
    dt_efetuado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "dt_efetuado"
    },
    status: {
      type: DataTypes.ENUM('Autorizado', 'Pago', 'Pendente'),
      allowNull: false,
      defaultValue: "Pendente",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "observacao"
    }
  };
  const options = {
    tableName: "cao_salario_pag",
    comment: "",
    indexes: [{
      name: "unico",
      unique: true,
      type: "BTREE",
      fields: ["co_usuario", "dt_efetuado"]
    }, {
      name: "id_pagamento",
      unique: false,
      type: "BTREE",
      fields: ["id_pagamento"]
    }]
  };
  const CaoSalarioPagModel = sequelize.define("cao_salario_pag_model", attributes, options);
  return CaoSalarioPagModel;
};