import { useState } from 'react';
import './Header.scss'
import CurrencySelection from './CurrencySelection';
import TopMenu from './TopMenu'
import CartOverview from './CartOverview';

export default function Header({ page, setPage }) {

    const [testValue, setTestValue] = useState(null);

    return (
        <header className="header">
            <div className="header__sitename">
                Black Books
            </div>

            {/* <div>
                Last menu item clicked: { testValue }
            </div> */}

            <CurrencySelection />

            <CartOverview />

            <TopMenu
                currentItem={ page }
                setPage={ setPage }
                setTestValue={ setTestValue }
            />
        </header>
    )

}