import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail() {

    const { id } = useParams();

    const [book, setBook] = useState(null);

    const loadBook = async () => {
        const r = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=' + id);
        const data = await r.json();

        setBook(data);
    }

    useEffect(() => {
        loadBook();
    }, [])

    return (
        <>
            <h1>Book detail</h1>

            {
                book
                    ? <div className="book">
                        <h2 className="book__title">{ book.title }</h2>
                        <div className="book__price">{ book.price } EUR</div>
                    </div>
                    : ''
            }
        </>
    )
}