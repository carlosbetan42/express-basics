const { Sequelize } = require("sequelize");

const { config } = require('../config/config');
const setupModels = require('../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true
};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false
  };
}

const sequelize = new Sequelize(config.dbUrl, {
  dialect: 'postgres',
  logging: true,
  ssl: {
    rejectUnauthorized: true
  }
});

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
