const express = require('express');
const Inventory = require('../models/Inventory');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const items = await Inventory.find({});
    res.json(items);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', protect, admin, async (req, res) => {
  const { name, type, quantity, price } = req.body;
  try {
    const item = await Inventory.create({ name, type, quantity, price });
    res.status(201).json(item);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.put('/:id', protect, admin, async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
