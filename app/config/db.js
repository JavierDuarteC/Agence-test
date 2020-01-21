const { Sequelize } = require('sequelize');
const config    = require(__dirname + '/config');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

let db = {};

db.cliente = sequelize.import(__dirname + "/../models/cao_cliente");

module.exports = db;