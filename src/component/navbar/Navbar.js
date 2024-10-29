// src/component/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-title">Art Show Experience</h2>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/artGallery">Gallery</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
