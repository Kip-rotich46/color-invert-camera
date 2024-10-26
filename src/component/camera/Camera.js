import React, { useRef, useEffect } from 'react';

function CameraInverter() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }
    startCamera();
  }, []);

  return (
    <div className="camera-container mt-5 text-center">
      <h5 className="mb-3">Live Camera Feed (Inverted)</h5>
      <video ref={videoRef} autoPlay className="border rounded w-100" style={{ filter: 'invert(1)', height: '100%' }}></video>
    </div>
  );
}

export default CameraInverter;
