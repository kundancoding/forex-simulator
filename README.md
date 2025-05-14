# Forex Trading Simulator

This is a full-stack application for simulating forex trading algorithms in real-time using live forex data.

## Features

- Convert and hold currencies in a simulated portfolio
- View current holdings and total value in USD
- Upload and test custom trading algorithms in a sandboxed environment
- Real-time exchange rates from an open API

## Tech Stack

- Backend: Node.js, Express, MongoDB, VM2, Axios
- Frontend: React, Vite, Axios

## Getting Started

### Backend Setup

```bash
cd backend
npm install
cp ../.env .env  # Make sure the Mongo URI is correct
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run start
```

### Environment Variables

Create a `.env` file in the backend directory with:

```
MONGO_URI=mongodb://localhost:27017/forex-sim
```

## Sample Algorithm

```js
// Access to portfolio, rates, and log()
if (portfolio.USD > 1000 && rates.EUR) {
  let amount = 100;
  portfolio.USD -= amount;
  portfolio.EUR = (portfolio.EUR || 0) + (amount * rates.EUR);
  log("Bought EUR!");
}
```