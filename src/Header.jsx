import './Header.scss';
import TopMenu from './TopMenu';
import SearchBox from './SearchBox';
import CurrencySelection from './CurrencySelection';

export default function Header({ currentItem, setCurrentItem }) {

    return (
        <header className="header">
            <div
                className="header__sitename"
                onClick={ () => setCurrentItem('') }
            >
                Flourish and Blotts
            </div>

            <SearchBox />

            <CurrencySelection />

            <TopMenu currentItem={ currentItem } setCurrentItem={ setCurrentItem }  />
        </header>
    )

}