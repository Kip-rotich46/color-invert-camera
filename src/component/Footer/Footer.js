// src/component/Footer.js
import React from 'react';

import profileImage from '../../assets/profile1.jpeg';

import './Footer.css'; // Import your CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
            <div className="artist-profile">
                <img src={profileImage} alt="Artist Profile" className="profile-image" />
                <div className="artist-info">
                    <h6>Artist Name</h6>
                    <p>artist@example.com</p>
                </div>
            </div>            
        </footer>
    );
};

export default Footer;
