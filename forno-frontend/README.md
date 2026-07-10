
# Forno - Wood-Fired Pizza Ordering App

A professional, production-quality frontend for a wood-fired pizza ordering platform built with React, Vite, Tailwind CSS, and more.

## Features

### User Side
- 🎨 Beautiful, responsive design with custom color palette
- 🔐 User authentication (register, login, forgot password, email verification)
- 🍕 Pizza builder with live SVG preview (base, sauce, cheese, veggies)
- 📦 Order history and real-time order tracking
- 💳 Razorpay payment integration (UI)
- 📱 Fully responsive for all devices

### Admin Side
- 📊 Dashboard with revenue and order stats (Recharts)
- 📦 Inventory management with low-stock alerts
- 📝 Order management with status updates
- 🎨 Dark charcoal theme for admin interface

## Tech Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS
- Lucide React (icons)
- Recharts (admin charts)
- Axios (API calls)

## Color Palette

- **Charcoal (#211C1A):** Dark sections, admin theme
- **Warm Cream (#FBF6EE):** Light background
- **Char-Orange (#E8622C):** Primary CTAs, wood-fire accent
- **Basil Green (#4C6444):** Success states
- **Mozzarella (#F3E5B3):** Badges, highlights
- **Deep Tomato (#B23A2E):** Danger/alert states

## Fonts

- **Fraunces:** Headings and display text
- **Work Sans:** Body and UI text
- **IBM Plex Mono:** Prices, order numbers, tables

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Connecting to Backend

This frontend is designed to work with a Node.js/Express + MongoDB backend. The API client is configured in `src/lib/api.js` and uses `/api` as the base URL, which is proxied to `http://localhost:5000` by Vite (see `vite.config.js`).

### API Endpoints Used

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Send reset link
- `POST /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/verify/:token` - Verify email

#### User
- `GET /api/users/me` - Get current user
- `GET /api/orders/myorders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order

#### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard/stats` - Dashboard stats
- `GET /api/inventory` - Get all inventory items
- `POST /api/inventory` - Add inventory item
- `PUT /api/inventory/:id` - Update inventory item
- `GET /api/orders` - Get all orders
- `PATCH /api/orders/:id/status` - Update order status
- `POST /api/payment/create-order` - Create Razorpay order

### Environment Variables

Create a `.env` file (optional, currently all mock data):
```env
VITE_API_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY=your_razorpay_test_key
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives (Button, Input, etc.)
│   ├── AdminNavbar.jsx  # Admin navigation
│   ├── UserNavbar.jsx   # User navigation
│   ├── ProtectedRoute.jsx
│   ├── AdminProtectedRoute.jsx
│   └── OrderStatusTracker.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── AdminAuthContext.jsx
│   └── ToastContext.jsx
├── data/
│   └── mockData.js      # Mock data for development
├── lib/
│   └── api.js           # Axios API client instance
├── pages/
│   ├── (user pages)
│   └── (admin pages)
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT
