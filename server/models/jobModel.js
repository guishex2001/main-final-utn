// jobModel.js

const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Job = sequelize.define('job', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  client: {
    type: Sequelize.STRING
  },
  technology: {
    type: Sequelize.STRING
  }
});

module.exports = Job;
