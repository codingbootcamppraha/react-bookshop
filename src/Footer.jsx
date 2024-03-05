import './Footer.scss'
import CurrencyContext from './CurrencyContext'
import { useContext } from 'react'

export default function Footer() {

    const { currency } = useContext(CurrencyContext);

    return (
        <footer className="footer">
            <div className="footer__copyright">
                &copy; 2024 Flourish and Blotts
            </div>
            <div>
                Preffered currency: { currency }
            </div>
        </footer>
    )

}