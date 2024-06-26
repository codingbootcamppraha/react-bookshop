import { createContext } from 'react';

// Retrieve the currency preference from local storage, default to 'EUR' if not set
const defaultCurrency = localStorage.getItem('currencyPreference') || 'EUR';

// Create the context with the default value
const CurrencyContext = createContext(defaultCurrency);

// Export the context as the default export
export default CurrencyContext;
