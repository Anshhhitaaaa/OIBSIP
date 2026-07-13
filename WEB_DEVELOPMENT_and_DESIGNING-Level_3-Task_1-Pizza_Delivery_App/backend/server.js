const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cron = require('node-cron');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/payment', require('./routes/payment'));

const Inventory = require('./models/Inventory');
const checkLowStock = async () => {
  const lowStock = await Inventory.find({ quantity: { $lt: 20 } });
  if (lowStock.length > 0) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Low Stock Alert!',
      text: `Low stock items:\n${lowStock.map(item => `${item.name}: ${item.quantity}`).join('\n')}`
    };
    await transporter.sendMail(mailOptions);
    console.log('Low stock email sent!');
  }
};
cron.schedule('0 * * * *', checkLowStock);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
