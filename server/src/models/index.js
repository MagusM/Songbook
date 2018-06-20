const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.option
);

fs.readdirSync(__dirname)
   .filter((file) => file !== 'index.js')
   .forEach((file) => {
       let model = sequelize.import(path.join(__dirname, file));
       console.log(model);
        // db[model.name] = model;
   });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;