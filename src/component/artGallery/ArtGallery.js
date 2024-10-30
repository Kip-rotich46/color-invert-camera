// src/component/ArtGallery.js
import React, { useEffect, useState } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';
import ImageUpload from '../ImageUpload/ImageUpload';
import './ArtGallery.css';

const ArtGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const listRef = ref(storage, 'images/');
            const res = await listAll(listRef);
            const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
            setImages(urls);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="art-gallery">
            <h2>Full Art Gallery</h2>
            {loading ? (
                <p>Loading images...</p>
            ) : (
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Artwork ${index + 1}`} className="gallery-image" />
                    ))}
                </div>
            )}
            <ImageUpload onUploadComplete={fetchImages} />
        </div>
    );
};

export default ArtGallery;
