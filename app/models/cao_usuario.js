const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "co_usuario"
    },
    no_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_usuario"
    },
    ds_senha: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_senha"
    },
    co_usuario_autorizacao: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "co_usuario_autorizacao"
    },
    nu_matricula: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_matricula"
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_nascimento"
    },
    dt_admissao_empresa: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_admissao_empresa"
    },
    dt_desligamento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_desligamento"
    },
    dt_inclusao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_inclusao"
    },
    dt_expiracao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_expiracao"
    },
    nu_cpf: {
      type: DataTypes.STRING(14),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_cpf"
    },
    nu_rg: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_rg"
    },
    no_orgao_emissor: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_orgao_emissor"
    },
    uf_orgao_emissor: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "uf_orgao_emissor"
    },
    ds_endereco: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_endereco"
    },
    no_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_email"
    },
    no_email_pessoal: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_email_pessoal"
    },
    nu_telefone: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_telefone"
    },
    dt_alteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_alteracao"
    },
    url_foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "url_foto"
    },
    instant_messenger: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "instant_messenger"
    },
    icq: {
      type: DataTypes.INTEGER(13).UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "icq"
    },
    msn: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "msn"
    },
    yms: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "yms"
    },
    ds_comp_end: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_comp_end"
    },
    ds_bairro: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ds_bairro"
    },
    nu_cep: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nu_cep"
    },
    no_cidade: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "no_cidade"
    },
    uf_cidade: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "uf_cidade"
    },
    dt_expedicao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dt_expedicao"
    }
  };
  const options = {
    tableName: "cao_usuario",
    comment: "",
    indexes: [{
      name: "co_usuario_1",
      unique: false,
      type: "BTREE",
      fields: ["co_usuario", "no_usuario", "dt_alteracao"]
    }]
  };
  const CaoUsuarioModel = sequelize.define("cao_usuario_model", attributes, options);
  return CaoUsuarioModel;
};