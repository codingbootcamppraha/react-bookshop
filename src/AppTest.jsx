import React, { useState } from 'react';
import Context from './Context';
import TestComponent from './TestComponent'; 

// If you want to test this file, go to the main component and uncomment the line <AppTest />
// and comment the line  <App />

const AppTest = () => {
    // Define a complex object as the initial value of the context
    const initialContextValue = {
        user: {
            name: 'Albert HM',
            age: 10,
            isLoggedIn: true,
        },
        books: [
            { title: 'Wars', author: 'Dan K.P' },
            { title: 'Brave New World', author: 'Aldous Huxley' },
        ],
        settings: {
            theme: 'dark',
            language: 'en',
        }
    };

    // Define stateful value contextValue and its changing function setContextValue
    const [contextValue, setContextValue] = useState(initialContextValue);

    return (
        <Context.Provider value={{ contextValue, setContextValue }}>
            <div className="App">
                <h1>Books Project</h1>
                <TestComponent />
            </div>
        </Context.Provider>
    );
}

export default AppTest;
