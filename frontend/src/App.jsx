import React from 'react'
import Dashboard from './components/Dashboard'
import CurrencyConverter from './components/CurrencyConverter'
import PortfolioViewer from './components/PortfolioViewer'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <CurrencyConverter />
      <PortfolioViewer />
    </div>
  )
}

export default App;
