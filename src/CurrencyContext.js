import { createContext } from "react";

//                                    initial value
//                                    (last resort, 99% not used)
//                                    (can be left 'null')
const CurrencyContext = createContext('EUR');

export default CurrencyContext;