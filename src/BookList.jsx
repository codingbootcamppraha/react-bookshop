import React, { useContext } from 'react';
import CurrencyContext from './CurrencyContext';

const bookPricesInEUR = {
  book1: 20,
  book2: 15,
  book3: 25,
};

function BookList() {
  const { currency } = useContext(CurrencyContext);

  // Convert EUR prices based on selected currency
  const convertPrice = (priceEUR) => {
    switch (currency) {
      case 'USD':
        return priceEUR * 1.12; // Conversion rate for demonstration, adjust as needed
      case 'CZK':
        return priceEUR * 25.5; // Conversion rate for demonstration, adjust as needed
      default:
        return priceEUR; // Default to EUR
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        <li>Book 1: {convertPrice(bookPricesInEUR.book1)} {currency}</li>
        <li>Book 2: {convertPrice(bookPricesInEUR.book2)} {currency}</li>
        <li>Book 3: {convertPrice(bookPricesInEUR.book3)} {currency}</li>
        {/* Render other books as needed */}
      </ul>
    </div>
  );
}

export default BookList;