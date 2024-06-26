import React, { useContext } from 'react';
import  CurrencyContext  from './CurrencyContext';

function CurrencySelectionContext() {

    // const { currency, setCurrency } = useContext(CurrencyContext);
    // Use the useContext hook to access the state and dispatch from Context
    const { state, dispatch } = useContext(CurrencyContext);

    const handleCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        // setCurrency(selectedCurrency);
        // localStorage.setItem('currencyPreference', selectedCurrency); // Save to local storage
        dispatch({
            type: 'currency/set', // Action type for setting the currency
            payload: selectedCurrency // The new currency to set
        });
    };
    console.log("state" ,state);
    return (
        
        <div>
            <h2>Select Currency</h2>
            <select value={state.currency} onChange={handleCurrencyChange}>
              <option value="EUR">Euro (EUR)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="CZK">Czech Koruna (CZK)</option>
            </select>
            <p>Current currency: {state.currency}</p>
            
        </div>
    );
}

export default CurrencySelectionContext; 
