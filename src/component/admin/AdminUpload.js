import React, { useState } from 'react';
import './AdminUpload.css'; // Create this CSS file for styling

const AdminUpload = () => {
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!image) {
            setMessage('Please select an image to upload.');
            return;
        }

        // Replace this with your storage solution API call
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch('YOUR_STORAGE_API_ENDPOINT', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('Image uploaded successfully!');
                setImage(null);
            } else {
                setMessage('Failed to upload image.');
            }
        } catch (error) {
            setMessage('Error uploading image: ' + error.message);
        }
    };

    return (
        <div className="admin-upload-container">
            <h2>Upload Artwork</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminUpload;
