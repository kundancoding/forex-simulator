// frontend/src/utils/index.js

// 1. Format Currency
export function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(value);
}

// 2. Format Date
export function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

// 3. Number With Commas (thousands separator)
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 4. Calculate Portfolio Value
export function calculatePortfolioValue(portfolio) {
  return portfolio.reduce((total, item) => {
    return total + (item.amount * item.exchangeRate);
  }, 0);
}

// 5. Fetch Data (API request)
import axios from 'axios';
export async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// 6. Convert Currency
export function convertCurrency(amount, fromRate, toRate) {
  return (amount / fromRate) * toRate;
}

// 7. Get Random Number (between min and max)
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 8. Format Time
export function formatTime(date) {
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return new Date(date).toLocaleTimeString('en-US', options);
}

// 9. Sleep (pause execution for a given time in ms)
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 10. Validate Input (check if number or currency code)
export function validateInput(input, type) {
  switch (type) {
    case 'number':
      return !isNaN(input) && input > 0;
    case 'currency':
      return /^[A-Z]{3}$/.test(input); // 3-letter currency code
    default:
      return false;
  }
}
