const mongoose = require('mongoose');
const Inventory = require('./models/Inventory');
const dotenv = require('dotenv');

dotenv.config();

const seedInventory = [
  { name: 'Thin Crust', type: 'base', quantity: 50, price: 80 },
  { name: 'Thick Crust', type: 'base', quantity: 50, price: 100 },
  { name: 'Whole Wheat', type: 'base', quantity: 40, price: 110 },
  { name: 'Cheesy Crust', type: 'base', quantity: 35, price: 130 },
  { name: 'Gluten Free', type: 'base', quantity: 25, price: 150 },
  { name: 'Tomato Sauce', type: 'sauce', quantity: 60, price: 20 },
  { name: 'BBQ', type: 'sauce', quantity: 45, price: 30 },
  { name: 'Pesto', type: 'sauce', quantity: 35, price: 40 },
  { name: 'Alfredo', type: 'sauce', quantity: 40, price: 35 },
  { name: 'Peri-Peri', type: 'sauce', quantity: 30, price: 35 },
  { name: 'Mozzarella', type: 'cheese', quantity: 70, price: 50 },
  { name: 'Cheddar', type: 'cheese', quantity: 50, price: 60 },
  { name: 'Parmesan', type: 'cheese', quantity: 40, price: 70 },
  { name: 'Onion', type: 'vegetable', quantity: 80, price: 20 },
  { name: 'Tomato', type: 'vegetable', quantity: 85, price: 20 },
  { name: 'Capsicum', type: 'vegetable', quantity: 75, price: 25 },
  { name: 'Olives', type: 'vegetable', quantity: 50, price: 30 },
  { name: 'Mushroom', type: 'vegetable', quantity: 60, price: 30 },
  { name: 'Corn', type: 'vegetable', quantity: 70, price: 25 },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding!');

    // Drop the entire collection to avoid duplicates
    const db = mongoose.connection.db;
    try {
      await db.dropCollection('inventories');
      console.log('Dropped existing inventories collection');
    } catch (err) {
      console.log('Collection doesn\'t exist yet, skipping drop');
    }

    await Inventory.insertMany(seedInventory);
    console.log('Inventory seeded successfully!');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
