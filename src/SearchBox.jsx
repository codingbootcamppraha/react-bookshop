import { useState } from 'react';
import './SearchBox.scss';

export default function SearchBox() {

    const [searchTerm, setSearchTerm] = useState('abc');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="search-box">
            <input
                type="text"
                name="search"
                value={ searchTerm }
                onInput={ handleInputChange }
            />
        </div>
    )
}