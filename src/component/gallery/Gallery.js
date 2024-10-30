// src/component/gallery/Gallery.js
import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const storage = getStorage();

    useEffect(() => {
        const fetchImages = async () => {
            const storageRef = ref(storage, 'images/');
            const imageRefs = await listAll(storageRef);
            const urls = await Promise.all(
                imageRefs.items.map(itemRef => getDownloadURL(itemRef))
            );
            setImages(urls);
        };
        fetchImages();
    }, []);

    return (
        <div className="gallery">
            <h2>Art Gallery</h2>
            <div className="gallery-grid">
                {images.slice(0, 5).map((src, index) => (  // Display the first 5 images
                    <img key={index} src={src} alt={`Artwork ${index + 1}`} className="gallery-image" />
                ))}
            </div>
            <Link to="/art-gallery" className="show-more-button">Show More...</Link>
        </div>
    );
};

export default Gallery;
