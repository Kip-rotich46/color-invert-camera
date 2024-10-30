import React, { useEffect, useState } from 'react';
import { storage, ref, listAll, getDownloadURL, uploadBytesResumable } from '../../firebase';
import './ArtGallery.css';

const ArtGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [showAlert, setShowAlert] = useState(false); // State for alert visibility

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

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) return;

        setUploading(true);
        const fileRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                console.error("Upload failed:", error);
                setUploading(false);
            },
            async () => {
                await fetchImages();  // Refresh gallery after upload
                setFile(null); // Clear the file selection
                setUploading(false); // Reset upload state
                setShowAlert(true); // Show alert on successful upload
                setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
            }
        );
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
            {showAlert && <div className="upload-alert">Image uploaded successfully!</div>}
            <div className="upload-container">
                <label htmlFor="file-upload" className="custom-file-label">
                    {file ? file.name : "Choose File"}
                </label>
                <input
                    id="file-upload"
                    type="file"
                    className="file-input"
                    onChange={handleFileChange}
                />
                <button
                    className="upload-button"
                    onClick={handleUpload}
                    disabled={!file || uploading}
                >
                    {uploading ? `Uploading... ${Math.round(uploadProgress)}%` : "Upload Image"}
                </button>
            </div>
        </div>
    );
};

export default ArtGallery;
