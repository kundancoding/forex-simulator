const { VM } = require('vm2');
const Portfolio = require('../models/Portfolio');
const { getLiveRates } = require('./forexService');

exports.runAlgorithm = async (code, userId) => {
  const rates = await getLiveRates();
  const portfolio = await Portfolio.findOne({ userId });

  const vm = new VM({
    timeout: 1000,
    sandbox: {
      portfolio: JSON.parse(JSON.stringify(portfolio.balances)),
      rates,
      log: console.log
    }
  });

  try {
    vm.run(code);
    return { updatedPortfolio: vm.sandbox.portfolio };
  } catch (e) {
    return { error: e.message };
  }
};