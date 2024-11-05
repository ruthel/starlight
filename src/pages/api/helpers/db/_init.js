const map = require('./../models/map');
const order = require('./../models/order');
const sequelize = require('./config');

const _init = () => {
  (sequelize.sync({force: false})).then(() => {
    console.log('Database & tables initialized!')
  }).catch((e) => {
    throw new Error(e)
  })
}

module.exports = _init