const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    base: String,
    sauce: String,
    cheese: String,
    vegetables: [String],
    price: Number
  }],
  total: Number,
  status: {
    type: String,
    enum: ['Order Received', 'In Kitchen', 'Sent to Delivery', 'Delivered'],
    default: 'Order Received'
  },
  paymentId: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
