const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  balances: { type: Map, of: Number, default: {} },
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);