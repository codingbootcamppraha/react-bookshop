import { useState } from "react"
import './TopMenu.scss';
import TopMenuItem from "./TopMenuItem";

export default function TopMenu({ currentItem }) {


    console.log(currentItem);

    //                           default value
    const [open, setOpen] = useState(false);
    // const [current, setCurrent] = useState(null);
    // const [user, setUser] = useState(null);

    /*
        user = 'abc';   // WRONG
        setUser('abc') // correct
    */

    // const doThisWhenBurgerIsClicked = () => {
    //     setOpen(true)
    // }

    const handleCloseMenu = () => {
        setOpen(false);
    }

    return (
        <div className="topmenu">

            {
                open
                    ? (
                        <nav className="topmenu__links">
                            <TopMenuItem currentItem={ currentItem } slug="" label="Home" />
                            <TopMenuItem currentItem={ currentItem } slug="products" label="Products" />
                            <TopMenuItem currentItem={ currentItem } slug="about" label="About us" />
                            <TopMenuItem currentItem={ currentItem } slug="contact" label="Contact" />

                            <div onClick={ handleCloseMenu }>&times;</div>
                        </nav>
                    )
                    : (
                        <div onClick={ () => setOpen(true) } className="topmenu__burger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )
            }

        </div>
    )
}