import React, { useReducer } from 'react';
import reducer from './reducer';
import CurrencyContext from './CurrencyContext';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';

const initialState = {
    currency: 'USD' // Or any default value you prefer
};

function App() {
    // Use the useReducer hook to get the state and dispatch function from the reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
     // Provide the state and dispatch function to the rest of the app using Context.Provider
        <CurrencyContext.Provider value={{ state, dispatch }}>
            <div className="App">
            <BrowserRouter>
              <Header />
              <MainContent />
           </BrowserRouter>            
            </div>
        </CurrencyContext.Provider>
    );
}

export default App;
