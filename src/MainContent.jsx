import './MainContent.scss';
import CurrencyContext from './CurrencyContext'
import { useContext } from 'react';
import Context from './Context';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import BookDetail from './pages/BookDetail';
import SubpageLayout from './SubpageLayout';

export default function MainContent({ currentItem }) {

    // const { currency } = useContext(CurrencyContext);
    const { state: { currency, user, language }, dispatch } = useContext(Context);

    const loginUser = () => {
        dispatch({
            type: 'user/set',
            payload: 'Admin'
        })
    }

    return (
        <main className="main">
            <h1 className="app__headline">Flourish and Blotts</h1>

            <p>
                You will be paying in currency: { currency }
            </p>

            <p>
                Current user: { user }
            </p>

            <p>
                <button onClick={ loginUser }>Login</button>
            </p>

            <Routes>
                <Route path="/" element={ <Homepage /> } />

                <Route path="/" element={ <SubpageLayout /> }>
                    <Route path="/about-us" element={ <AboutUs /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/book/:id" element={ <BookDetail /> } />
                </Route>
            </Routes>

        </main>
    )

}
