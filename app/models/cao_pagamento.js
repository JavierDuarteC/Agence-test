const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_pagamento: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "co_pagamento"
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
    tp_pagamento: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tp_pagamento"
    },
    dt_pagamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_pagamento"
    },
    vl_pagamento: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "vl_pagamento"
    },
    dt_referencia_pagamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_referencia_pagamento"
    }
  };
  const options = {
    tableName: "cao_pagamento",
    comment: "",
    indexes: [{
      name: "nu_os",
      unique: false,
      type: "BTREE",
      fields: ["co_pagamento"]
    }]
  };
  const CaoPagamentoModel = sequelize.define("cao_pagamento_model", attributes, options);
  return CaoPagamentoModel;
};