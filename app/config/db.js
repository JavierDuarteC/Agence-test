const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/config');
let db = {};

// Start new connection
const sequelize = new Sequelize(config.database, config.username, config.password, config);

//Get every model in models folder and inport as Sequelize model
fs
  .readdirSync(__dirname + '/../models')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize.import(path.join(__dirname, '/../models/'+file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db has each model from models folder, sequelize connection and Sequelize import
module.exports = db;