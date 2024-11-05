const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('moonlig4_sitemap', 'moonlig4_moonlig4', 'n5pD19uT2h', {
  host: process.env.DB_HOST || '172.104.159.251',
  dialect: 'mysql',
});

module.exports = sequelize;
