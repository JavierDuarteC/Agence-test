const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    idtipo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idtipo"
    },
    idcategoria: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idcategoria"
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data"
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "comentario"
    },
    co_escritorio: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_escritorio"
    }
  };
  const options = {
    tableName: "cao_ombudsman",
    comment: "",
    indexes: [{
      name: "idtipo",
      unique: false,
      type: "BTREE",
      fields: ["idtipo"]
    }, {
      name: "idcategoria",
      unique: false,
      type: "BTREE",
      fields: ["idcategoria"]
    }, {
      name: "co_escritorio",
      unique: false,
      type: "BTREE",
      fields: ["co_escritorio"]
    }]
  };
  const CaoOmbudsmanModel = sequelize.define("cao_ombudsman_model", attributes, options);
  return CaoOmbudsmanModel;
};