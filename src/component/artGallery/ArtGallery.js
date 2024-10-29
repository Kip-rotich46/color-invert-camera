// src/component/ArtGallery.js
import React from 'react';
import ImageUpload from '../ImageUpload/ImageUpload'; // Assuming you have an ImageUpload component
import { initialImages, additionalImages } from '../constants/imageConstants';
import './ArtGallery.css';

const ArtGallery = () => {
    return (
        <div className="art-gallery">
            <h2>Full Art Gallery</h2>
            <div className="gallery-grid">
                {initialImages.map((src, index) => (
                    <img key={index} src={src} alt={`Artwork ${index + 1}`} className="gallery-image" />
                ))}
            </div>
            <ImageUpload /> {/* Admin upload section */}
        </div>
    );
};

export default ArtGallery;
