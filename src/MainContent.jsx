import './MainContent.scss';
import CurrencyContext from './CurrencyContext'
import { useContext } from 'react';
import Context from './Context';

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


            {
                currentItem === ''
                    && (
                        <p>Welcome!</p>
                    )
            }

            {
                currentItem === 'about'
                    && (
                        <p>About us: ...</p>
                    )
            }

            {
                currentItem === 'contact'
                    && (
                        <p>Please contact us</p>
                    )
            }

        </main>
    )

}