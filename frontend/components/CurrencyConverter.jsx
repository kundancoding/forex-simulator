import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(100);

  useEffect(() => {
    axios.get("http://localhost:5000/api/rates").then(res => setRates(res.data));
  }, []);

  const handleConvert = () => {
    axios.post("http://localhost:5000/api/convert", {
      userId: "testUser",
      from,
      to,
      amount
    }).then(() => alert("Converted!"));
  };

  return (
    <div>
      <h2>Convert Currency</h2>
      <input value={amount} onChange={e => setAmount(e.target.value)} />
      <select value={from} onChange={e => setFrom(e.target.value)}>
        {Object.keys(rates).map(r => <option key={r}>{r}</option>)}
      </select>
      <span> ➡️ </span>
      <select value={to} onChange={e => setTo(e.target.value)}>
        {Object.keys(rates).map(r => <option key={r}>{r}</option>)}
      </select>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}