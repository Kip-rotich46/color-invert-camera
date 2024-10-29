// src/component/ImageUpload.js
import React, { useState } from 'react';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');

    const handleChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = () => {
        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            uploadBytes(imageRef, image).then(() => {
                getDownloadURL(imageRef).then((downloadURL) => {
                    setUrl(downloadURL);
                    console.log('File available at', downloadURL);
                });
            });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload Image</button>
            {url && <img src={url} alt="Uploaded" width="200" />}
        </div>
    );
};

export default ImageUpload;
