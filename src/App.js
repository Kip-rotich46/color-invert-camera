import React from 'react';

import Gallery from './component/gallery/Gallery';
import ArtShow from './component/artShow/ArtShow';
import Footer from './component/Footer/Footer';

import './App.css';

function App() {

  return (
    <div className="app-container">
      <h1 className='heading'>Art Show Interactive Experience</h1>
      <div className="flex-row"> {/* Flex container for side by side layout */}
        <Gallery />
        <ArtShow />
      </div>
      <Footer /> {/* Add the Footer here */}
    </div>
  );
}

export default App;
