const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_123',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'test_secret'
});

router.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  const options = { amount: amount * 100, currency: 'INR', receipt: 'order_rcptid_' + Date.now() };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
