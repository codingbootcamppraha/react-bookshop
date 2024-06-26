import React, { useState, useEffect } from 'react';

const CurrencySelection = () => {
  const [currency, setCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const loadExchangeRate = async (currency) => {
    try {
      const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=${currency}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setExchangeRate(data.rate);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };
   const loadCurrencies = async () => {
    try {
      const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCurrencies(data);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };
  
    useEffect(() => {
    loadExchangeRate(currency);
  }, [currency]);

  useEffect(() => {
    loadCurrencies();
  }, []);   // only once

  return (
    <div>
      <h1>Select Currency</h1>
      <select value={currency} onChange={handleCurrencyChange}>
        
        {/* <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CZK">CZK</option> */}

        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <span>Exchange Rate: {exchangeRate}</span>
    </div>
  );
};

export default CurrencySelection;