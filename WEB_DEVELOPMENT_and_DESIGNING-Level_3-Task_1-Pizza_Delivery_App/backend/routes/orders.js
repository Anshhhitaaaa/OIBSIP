const express = require('express');
const Order = require('../models/Order');
const Inventory = require('../models/Inventory');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, async (req, res) => {
  try {
    const order = await Order.create({ ...req.body, user: req.user._id });
    for (const item of order.items) {
      if (item.base) await Inventory.findOneAndUpdate({ name: item.base, type: 'base' }, { $inc: { quantity: -1 } });
      if (item.sauce) await Inventory.findOneAndUpdate({ name: item.sauce, type: 'sauce' }, { $inc: { quantity: -1 } });
      if (item.cheese) await Inventory.findOneAndUpdate({ name: item.cheese, type: 'cheese' }, { $inc: { quantity: -1 } });
      if (item.vegetables) {
        for (const veg of item.vegetables) {
          await Inventory.findOneAndUpdate({ name: veg, type: 'vegetable' }, { $inc: { quantity: -1 } });
        }
      }
    }
    res.status(201).json(order);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/', protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'name email').sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.put('/:id/status', protect, admin, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(order);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
