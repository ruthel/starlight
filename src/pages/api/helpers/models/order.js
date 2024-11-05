const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Order = sequelize.define('Order', {
  billingToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facilitatorAccessToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payerID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentSource: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mapID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Order;
