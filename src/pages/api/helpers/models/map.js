const {DataTypes} = require('sequelize');
const sequelize = require('../db/config');

const Map = sequelize.define('Map', {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Map;
