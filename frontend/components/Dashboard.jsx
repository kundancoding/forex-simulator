import React from 'react';
import CurrencyConverter from './CurrencyConverter';
import PortfolioViewer from './PortfolioViewer';
import AlgoUpload from './AlgoUpload';

const Dashboard = () => (
  <div className="space-y-4">
    <h1 className="text-2xl font-bold">Forex Simulator</h1>
    <CurrencyConverter />
    <PortfolioViewer />
    <AlgoUpload />
  </div>
);

export default Dashboard;