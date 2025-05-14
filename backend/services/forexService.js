const axios = require('axios');

let cachedRates = {};
let lastFetch = 0;

exports.getLiveRates = async () => {
  const now = Date.now();
  if (now - lastFetch < 60 * 1000 && Object.keys(cachedRates).length) {
    return cachedRates;
  }

  const res = await axios.get(`https://open.er-api.com/v6/latest/USD`);
  cachedRates = res.data.rates;
  lastFetch = now;
  return cachedRates;
};