import React from 'react';
import './Topmenu.scss';
import { Link } from 'react-router-dom'; 

const Topmenu = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-us">About us</Link>
      </nav>   
    </div>
  );
};

export default Topmenu;