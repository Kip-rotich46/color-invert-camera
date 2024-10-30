// src/component/ImageUpload/ImageUpload.js
import React, { useState } from 'react';
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './ImageUpload.css';

const ImageUpload = ({ onUploadComplete }) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageURL, setImageURL] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!image) return;

        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        setUploading(true);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Optional: Track upload progress
            },
            (error) => {
                console.error("Upload error: ", error);
                setUploading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setImageURL(url);
                    console.log("File available at", url);
                    setUploading(false);
                    onUploadComplete();  // Trigger the gallery refresh
                });
            }
        );
    };

    return (
        <div className="image-upload">
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload} disabled={!image || uploading}>
                {uploading ? "Uploading..." : "Upload Image"}
            </button>
            {imageURL && <p className='imageUrl'>Image URL: <a href={imageURL} target="_blank" rel="noopener noreferrer">{imageURL}</a></p>}
        </div>
    );
};

export default ImageUpload;
