const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log('Testing MongoDB connection to:', process.env.MONGO_URI.replace(/:.*@/, ':***@'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
