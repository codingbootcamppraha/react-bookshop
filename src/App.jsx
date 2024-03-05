import { useReducer, useState } from 'react';
import './App.scss'
import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'
import CurrencyContext from './CurrencyContext'
import Context from './Context';
import reducer from './reducer';

function App() {

  const [currentItem, setCurrentItem] = useState('');
  // const [currency, setCurrency] = useState('EUR');

  const [state, dispatch] = useReducer(reducer, {
      page: '',
      user: null,
      theme: 'light',
      language: 'en',
      currency: 'USD',
      authHash: null,
      shoppingCart: [],
      totalPrice: 0
  })

  // const myReducer = (old_value, new_value) => {
  //   return new_value * 3;
  // }

  // const [value, setValue] = useState(0);
  // const [value, setValue] = useReducer(myReducer, 0);

  return (

    <Context.Provider value={ { state, dispatch } }>
      {/* <CurrencyContext.Provider value={
        {
          currency: currency,
          setCurrency: setCurrency
        }
      }> */}

        <div className="app">

            <Header currentItem={ currentItem } setCurrentItem={ setCurrentItem } />

            <MainContent currentItem={ currentItem } />

            <Footer />

        </div>

      {/* </CurrencyContext.Provider> */}
    </Context.Provider>
  )
}

export default App
