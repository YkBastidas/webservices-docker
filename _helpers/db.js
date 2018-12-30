const config = require('config.json');
const mongoose = require('mongoose');
const DataBaseConnect = 'mongodb://mongo:27017/app';
mongoose.connect(DataBaseConnect);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Order: require('../orders/order.model')
};
