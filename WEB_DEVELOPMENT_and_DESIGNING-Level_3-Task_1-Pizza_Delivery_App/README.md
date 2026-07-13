# PizzaHub - Professional Full-Stack Pizza Delivery App

## Project Overview
This is a production-grade, full-stack pizza delivery application built for **OIBSIP Level 3 Web Development & Designing Task**.

### Tech Stack
- **Frontend**: React + Vite + React Router
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Payment Gateway**: Razorpay (Test Mode)
- **Email Notifications**: Nodemailer (Low stock alerts)
- **Scheduled Jobs**: node-cron

## Features
### User Side
- User Registration & Login (JWT authentication)
- Custom pizza builder with 4 steps
- Cart management
- Checkout with Razorpay payment integration
- Order history with real-time status tracking
- Responsive design

### Admin Side
- Separate admin dashboard
- Inventory management
- Order management & status updates
- Automated low-stock email alerts

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB running locally or MongoDB Atlas URI

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env file to add your credentials
# Seed initial inventory
npm run seed
# Start server
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### MongoDB Atlas Setup (Free Cloud Database)
1. Go to [mongodb.com](https://www.mongodb.com) and sign up
2. Create a new free M0 cluster (shared)
3. Create a database user (username + password)
4. Allow your IP address in Network Access (add 0.0.0.0/0 for all IPs)
5. Get your connection string, replace `<password>` with your user's password
6. Update `MONGO_URI` in .env!

### Environment Variables (.env in backend/)
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/pizza-delivery?retryWrites=true&w=majority
JWT_SECRET=your-jwt-secret-key
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin-email@example.com
```

## Default Admin Setup
1. Register a new user via the app
2. Open your MongoDB Atlas database
3. Go to the `users` collection
4. Edit your user document and set `isAdmin: true`
5. Logout and login again - you're now admin!

## Project Structure
```
OIBSIP/WEB DEVELOPMENT & DESIGNING-Level 3-Task 1-Pizza Delivery App/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   └── main.jsx
    └── package.json
```

## License
MIT
