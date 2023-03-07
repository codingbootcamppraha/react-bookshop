import { useContext, useEffect, useState } from "react"
import Context from "./Context";
// import CurrencyContext from "./CurrencyContext";

export default function CurrencySelection() {

    const { context: { currency, exchangeRate }, dispatch } = useContext(Context);

    // load the current value of the CurrencyContext
    // const entireValueOfTheContext = useContext(CurrencyContext);
    // const { currency, setCurrency } = useContext(CurrencyContext);
    // const { exchangeRate, setExchangeRate } = useContext(CurrencyContext);

    // const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR');
    // const [exchangeRate, setExchangeRate] = useState(1);

    const handleSelect = (event) => {

        event;              // the "change" event
        event.target;       // <select>
        event.target.value; // the selected value

        // setCurrency(event.target.value);

        // dispatch an *action* into the context
        // (it will be received by the *reducer function*)
        dispatch({
            type: 'currency/set',
            payload: event.target.value
        })
    }

    /**
     * load exchange rates from the bank and
     * find the exchange rate for the selected currency
     * and put it into the exchangeRate stateful var
     */
    const loadExchangeRates = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php');
        const data = await response.json();

        const exchange_rate = data.find((rate) => {
            return rate.currency === currency;
        });

        // setExchangeRate(exchange_rate.rate);

        dispatch({
            type: 'exchangeRate/set',
            payload: exchange_rate.rate
        })
    }

    useEffect(() => {
        console.log('Currency changed: ', currency);

        loadExchangeRates();

        localStorage.setItem('currency', currency);
    }, [currency]);

    return (
        <div className="currency-selection">

            Select currency:
            <select
                value={ currency }
                onChange={ handleSelect }
            >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CZK">CZK</option>
                <option value="AUD">AUD</option>
            </select>

            {
                currency !== 'EUR'
                    ? <>EUR exchange rate: { exchangeRate }</>
                    : ''
            }


        </div>
    )
}