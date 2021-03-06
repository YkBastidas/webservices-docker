const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const Order = db.Order;

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete
};

async function getAll() {
    return await Order.find().select('-hash');
}

async function getById(id) {
    return await Order.findById(id).select('-hash');
}

async function create(orderParam) {
    const order = new Order(orderParam);
    // save order
    await order.save();
}

async function _delete(id) {
    await Order.findByIdAndRemove(id);
}
