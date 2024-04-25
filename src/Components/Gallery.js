import React from 'react';
import '../styles/Gallery.css'; 

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">PHOTOS</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="gallery-img" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
