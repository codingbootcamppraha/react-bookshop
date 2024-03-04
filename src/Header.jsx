import './Header.scss';
import TopMenu from './TopMenu';

export default function Header() {

    return (
        <header className="header">
            <div className="header__sitename">
                Flourish and Blotts
            </div>

            <TopMenu currentItem={ 'about' }  />
        </header>
    )

}