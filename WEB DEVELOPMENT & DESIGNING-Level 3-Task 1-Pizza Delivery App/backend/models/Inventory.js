const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ['base', 'sauce', 'cheese', 'vegetable'], required: true },
  quantity: { type: Number, default: 50 },
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
