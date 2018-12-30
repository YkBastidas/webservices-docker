const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    client: { type: String, unique: true, required: true },
    price: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true }
});

orderSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Order', orderSchema);
