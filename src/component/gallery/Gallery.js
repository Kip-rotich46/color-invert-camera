// src/component/artShow/Gallery.js
import React from 'react';
import { initialImages, additionalImages } from '../../constants/imageConstants'; // Adjust the import path as needed
import './Gallery.css';

const Gallery = () => {
    const displayedImages = initialImages.slice(0, 5); // Get only the first 5 images

    return (
        <div className="gallery">
            <h2>Art Gallery</h2>
            <div className="gallery-grid">
                {displayedImages.map((src, index) => (
                    <img key={index} src={src} alt={`Artwork ${index + 1}`} className="gallery-image" />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
