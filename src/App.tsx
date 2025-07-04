import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from './PhotoViewer/PhotoViewer'
import {ImageSelector} from './PhotoViewer/ImageSelector'
import {imageUrls} from './PhotoViewer/ImageSelector'

function App() {

  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  return (
    <div>
      <h1 id='website-title'>React Photo Viewer</h1>
      <PhotoViewer imgURL={selectedImage}/>
      <h2 id='select-text'>Select your photo</h2>
      <ImageSelector imageURLsArray={imageUrls} setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>
    </div>

  );
}

export default App
