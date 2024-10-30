import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from './component/ImageUpload/ImageUpload';
import Gallery from './component/gallery/Gallery';
import ArtShow from './component/artShow/ArtShow';
import Footer from './component/Footer/Footer';
import Navbar from './component/navbar/Navbar';
import ArtGallery from './component/artGallery/ArtGallery'; // Ensure this component exists

import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <h1 className='heading'>Art Show Interactive Experience</h1>
                <Routes>
                    {/* Main route with Gallery and ArtShow side by side */}
                    <Route 
                        path="/" 
                        element={
                            <div className="flex-row">
                                <Gallery />
                                <ArtShow />
                            </div>
                        } 
                    />
                    {/* Route for Image Upload */}
                    <Route path="/upload" element={<ImageUpload />} />
                    {/* Route for Art Gallery */}
                    <Route path="/art-gallery" element={<ArtGallery />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
