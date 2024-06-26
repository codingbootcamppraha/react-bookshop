import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {

    // Extract the 'id' parameter from the URL
    const { id } = useParams();
    // Initialize state to hold the book details
    const [book, setBook] = useState(null);

    // Function to fetch book details from the API
    const loadBookDetail = async () => {
        try {
            // Fetch book details using the 'id' parameter
            const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=${id}`);
            if (!response.ok) {
                // Throw an error if the network response is not ok
                throw new Error('Network response was not ok');
            }
            // Parse the JSON data from the response
            const data = await response.json();
            // Update state with the fetched book data
            setBook(data);
            console.log("data", data);
        } catch (error) {
            // Log any errors that occur during the fetch operation
            console.error('Error fetching book details:', error);
        }
    };

    // useEffect to call loadBookDetail when the component mounts
    useEffect(() => {
        loadBookDetail();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <h2>BookDetail page</h2>
            <p>Book id: {id}</p>
            {/* Conditionally render book details or a loading message */}
            {book ? (<p>Book title: {book.title}</p>) : (<p>...loading</p>)}
            {book ? (<p>Book price: {book.price}</p>) : (<p>...loading</p>)}
            {book ? (<p>Book pages: {book.pages}</p>) : (<p>...loading</p>)}
        </div>
    );
}

export default BookDetail;