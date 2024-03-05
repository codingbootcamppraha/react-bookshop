import { useEffect, useState } from "react"

export default function CurrencySelection() {

    const [currency, setCurrency] = useState('')
    const [exchangeRate, setExchangeRate] = useState(1);
    const [currencies, setCurrencies] = useState([]);

    const loadExchangeRate = async (currency) => {
        // load exchange rates from the bank for the given currency
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=' + currency);
        const data = await response.json();

        setExchangeRate(data.rate);
    }

    /**
     * load the currencies (ONCE) during initialization
     * of this component
     */
    const loadCurrencies = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php');
        const data = await response.json();

        setCurrencies(data);
    }

    const handleCurrencyChange = event => {
        setCurrency(event.target.value);
    }

    useEffect(() => {

        // load the exchange rates for the current currency...
        loadExchangeRate(currency);

    }, [currency]) // ... whenever currency changes

    useEffect(() => {

        // load all the available currencies from the bank...
        loadCurrencies()

    }, []) // ...when the component first mounts into the page

    return (
        <div className="currency-selection">

            <select
                name="currency"
                value={ currency }
                onChange={ handleCurrencyChange }
            >
                <option value="">-- please choose --</option>
                {
                    currencies.map(code => (
                        <option key={ code } value={ code }>{ code }</option>
                    ))
                }
            </select>

            Exchange rate (to EUR): { exchangeRate }
        </div>
    )

}