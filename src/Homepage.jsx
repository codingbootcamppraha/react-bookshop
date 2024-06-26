import React from 'react';
import CurrencySelection from './CurrencySelection';
import CurrencySelectionContext from './CurrencySelectionContext';

function Homepage() {
  return (
    <div>
      <h1>Home page</h1>
      < CurrencySelection />
      <br />
      < CurrencySelectionContext />
      </div>
  );
}

export default Homepage;