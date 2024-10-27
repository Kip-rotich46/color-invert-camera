// src/ArtShow.js
import React, { useEffect, useRef, useState } from 'react';
import QRCodeDisplay from '../QRCodeDisplay/QRCodeDisplay'; // Import the new component
import './ArtShow.css';

const ArtworkDisplay = ({ showArtwork }) => {
    return (
        <div className="artwork-container" style={{ display: showArtwork ? 'block' : 'none' }}>
            <img src="your-artwork.jpg" alt="Your Artwork" className="artwork" />
        </div>
    );
};

const ArtShow = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const snapshotCanvasRef = useRef(null);
    const contextRef = useRef(null);
    const snapshotContextRef = useRef(null);
    const mediaStreamRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showArtwork, setShowArtwork] = useState(false);
    const [snapshotTaken, setSnapshotTaken] = useState(false);
    const [invertedSnapshot, setInvertedSnapshot] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        contextRef.current = context;

        const startVideoStream = async () => {
            try {
                mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = mediaStreamRef.current;

                if (!isPlaying) {
                    video.play().then(() => {
                        setIsPlaying(true);
                        requestAnimationFrame(draw);
                    }).catch((error) => {
                        console.error("Error playing the video:", error);
                    });
                }
            } catch (error) {
                console.error("Error accessing media devices.", error);
            }
        };

        const draw = () => {
            if (context && video.readyState === 4) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                let data = imageData.data;

                // Invert colors
                for (let i = 0; i < data.length; i += 4) {
                    data[i] = 255 - data[i];     // Red
                    data[i + 1] = 255 - data[i + 1]; // Green
                    data[i + 2] = 255 - data[i + 2]; // Blue
                }

                context.putImageData(imageData, 0, 0);
                requestAnimationFrame(draw);
            }
        };

        startVideoStream();

        return () => {
            if (mediaStreamRef.current) {
                const tracks = mediaStreamRef.current.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    const handleQRCodeScan = () => {
        setShowArtwork(true); // Show artwork when QR code is scanned
    };

    const takeSnapshot = () => {
        const snapshotCanvas = snapshotCanvasRef.current;
        const snapshotContext = snapshotCanvas.getContext('2d');
        snapshotContext.drawImage(canvasRef.current, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
        snapshotContextRef.current = snapshotContext;
        setSnapshotTaken(true);
    };

    const toggleInvertSnapshot = () => {
        if (snapshotContextRef.current) {
            const snapshotCanvas = snapshotCanvasRef.current;
            let imageData = snapshotContextRef.current.getImageData(0, 0, snapshotCanvas.width, snapshotCanvas.height);
            let data = imageData.data;

            // Toggle inversion
            for (let i = 0; i < data.length; i += 4) {
                data[i] = 255 - data[i];     // Red
                data[i + 1] = 255 - data[i + 1]; // Green
                data[i + 2] = 255 - data[i + 2]; // Blue
            }

            snapshotContextRef.current.putImageData(imageData, 0, 0);
            setInvertedSnapshot(!invertedSnapshot);
        }
    };

    return (
        <div className="container interactive-section">
            <QRCodeDisplay onScan={handleQRCodeScan} /> {/* Use the QRCodeDisplay component */}
            <ArtworkDisplay showArtwork={showArtwork} />
            <div className="video-container">
                <video ref={videoRef} style={{ display: 'none' }} />
                <canvas ref={canvasRef} width="640" height="480"></canvas>
            </div>
            <button className='button-snap' onClick={takeSnapshot} disabled={!isPlaying}>Take Snapshot</button>
            {snapshotTaken && (
                <>
                    <canvas ref={snapshotCanvasRef} width="640" height="480" className="snapshot-canvas"></canvas>
                    <button onClick={toggleInvertSnapshot}>
                        {invertedSnapshot ? 'Show Original Colors' : 'Show Inverted Colors'}
                    </button>
                </>
            )}
        </div>
    );
};

export default ArtShow;
