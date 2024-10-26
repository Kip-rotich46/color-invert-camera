import React from 'react';

import Camera from './component/camera/Camera';
import QRCodeComponent from './component/QRCode/QRCodeComponent';
import Gallery from './component/gallery/Gallery';

import './App.css';
import ArtShow from './component/artShow/ArtShow';

function App() {
  const cameraUrl = window.location.href + "camera"; // link for the QR code to direct to

  return (
    <div className="app-container">
      <Gallery />
      <ArtShow />
    </div>
  );
}



export default App;
