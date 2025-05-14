const Portfolio = require('../models/Portfolio');
const { getLiveRates } = require('../services/forexService');
const { runAlgorithm } = require('../services/algoRunner');

exports.getRates = async (req, res) => {
  const rates = await getLiveRates();
  res.json(rates);
};

exports.convertCurrency = async (req, res) => {
  const { userId, from, to, amount } = req.body;
  const rates = await getLiveRates();
  const portfolio = await Portfolio.findOne({ userId });

  const convertedAmount = (amount * rates[to]) / rates[from];
  portfolio.balances[from] -= amount;
  portfolio.balances[to] = (portfolio.balances[to] || 0) + convertedAmount;
  await portfolio.save();

  res.json({ success: true, portfolio });
};

exports.getPortfolio = async (req, res) => {
  const { userId } = req.query;
  const portfolio = await Portfolio.findOne({ userId });
  const rates = await getLiveRates();

  let totalUSD = 0;
  for (const [currency, value] of Object.entries(portfolio.balances)) {
    totalUSD += value / rates[currency];
  }

  res.json({ balances: portfolio.balances, totalUSD });
};

exports.uploadAlgo = async (req, res) => {
  const { code, userId } = req.body;
  const result = await runAlgorithm(code, userId);
  res.json({ success: true, result });
};