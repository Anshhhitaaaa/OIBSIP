
# Forno - Pizza Delivery App

A modern, full-stack pizza delivery web application built with React, Express, and MongoDB!

## Features

### User Features
- 🔐 User Registration & Login (with JWT authentication)
- 🍕 Browse full pizza menu (20+ delicious options!)
- 🍕 Build your own custom pizza
- 🛒 Add to cart and checkout
- 📦 Track your order status in real-time
- 📋 View your order history
- 🎁 Special offers and discounts
- 👤 Personalized user dashboard with welcome message using your name from the database

### Admin Features
- 📊 Inventory management
- 📦 Order management (update order status, view all orders)
- 📉 Low stock alerts via email

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React Icons
- React Toastify

### Backend
- Node.js
- Express
- MongoDB (with Mongoose ODM)
- JWT Authentication
- Nodemailer (for email alerts)
- Node-cron (for scheduled low stock checks)

## Project Structure

```
OASIS/
├── forno-frontend/                  # React frontend
│   ├── src/
│   │   ├── components/             # React components
│   │   │   ├── ui/                # Reusable UI components
│   │   │   ├── AdminNavbar.jsx
│   │   │   ├── UserNavbar.jsx
│   │   │   └── ...
│   │   ├── context/               # React Contexts (Auth, Order, etc.)
│   │   ├── data/                  # Mock data (menu items, offers)
│   │   ├── lib/                   # API client
│   │   ├── pages/                 # Page components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── WEB DEVELOPMENT & DESIGNING-Level 3-Task 1-Pizza Delivery App/
│   └── backend/                   # Express backend
│       ├── middleware/            # Auth middleware
│       ├── models/                # MongoDB models (User, Order, Inventory)
│       ├── routes/                # API routes (auth, inventory, orders, payment)
│       ├── server.js              # Main server file
│       ├── seed.js                # Database seeding script
│       └── package.json
└── README.md                       # This file!
```

## Local Development Setup

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd "WEB DEVELOPMENT & DESIGNING-Level 3-Task 1-Pizza Delivery App/backend"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ADMIN_EMAIL=admin_email@example.com
   ```

4. (Optional) Seed the database with initial inventory:
   ```bash
   node seed.js
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd forno-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

The app should now be running at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Deployment

### Backend Deployment (Render/Railway/Heroku)
1. Push your code to GitHub
2. Connect your repository to Render/Railway/Heroku
3. Set environment variables in the hosting platform
4. Deploy!

### Frontend Deployment (Vercel)
1. Push your forno-frontend code to GitHub
2. Connect your repository to Vercel
3. Set the environment variable `VITE_API_URL` to your deployed backend URL (without /api at the end)
4. Deploy!

## Default Credentials (if using seed.js)
- Admin Email: admin@forno.com
- Admin Password: admin123

## License
MIT

