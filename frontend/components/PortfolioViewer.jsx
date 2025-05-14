import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PortfolioViewer() {
  const [portfolio, setPortfolio] = useState({ balances: {}, totalUSD: 0 });

  useEffect(() => {
    axios.get("http://localhost:5000/api/portfolio", {
      params: { userId: "testUser" }
    }).then(res => setPortfolio(res.data));
  }, []);

  return (
    <div>
      <h2>Your Portfolio</h2>
      <ul>
        {Object.entries(portfolio.balances).map(([cur, val]) => (
          <li key={cur}>{cur}: {val.toFixed(2)}</li>
        ))}
      </ul>
      <p>Total Value in USD: ${portfolio.totalUSD.toFixed(2)}</p>
    </div>
  );
}