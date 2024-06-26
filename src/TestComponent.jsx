import React, { useContext } from 'react';
import Context from './Context';

const TestComponent = () => {
    const { contextValue, setContextValue } = useContext(Context);

    const changeTheme = () => {
        setContextValue(prevValue => ({
            ...prevValue,
            settings: {
                ...prevValue.settings,
                theme: prevValue.settings.theme === 'dark' ? 'light' : 'dark',
            }
        }));
    };
    const buttonStyle = {
        backgroundColor: 'blue',
        padding: '10px',
        marginTop: '20px',
        color: 'white'
    };
    const themStyle = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '20px'
    };
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {contextValue.user.name}</p>
            <p>Age: {contextValue.user.age}</p>
            <p>Logged In: {contextValue.user.isLoggedIn ? 'Yes' : 'No'}</p>
            <h2>Books</h2>
            <ul>
                {contextValue.books.map((book, index) => (
                    <li key={index}>{book.title} by {book.author}</li>
                ))}
            </ul>
            <h2>Settings</h2>
            <p style={themStyle}>Theme: {contextValue.settings.theme}</p>
            <p>Language: {contextValue.settings.language}</p>
            <button style={buttonStyle} onClick={changeTheme}>Toggle Theme</button>
        </div>
    );
}

export default TestComponent;