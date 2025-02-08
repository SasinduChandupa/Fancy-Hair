import React from 'react';
import './GImagesComponent.css';

const GImagesComponent = () => {
  // Array of image URLs
  const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.jpg',
    '/12.jpg',
  ];

  return (
    <div className="g-images-container">
      {images.map((image, index) => (
        <div className="g-image-card" key={index}>
          <img src={image} alt={`Gallery Image ${index + 1}`} className="g-image" />
          {image === '/1.jpg' && (<div className="g-image-text">Luxury Feeling</div>)}
          {image === '/2.jpg' && (<div className="g-image-text">Temporary curly hair</div>)}
          {image === '/3.jpg' && (<div className="g-image-text">Gentlemant hair cut</div>)}
          {image === '/4.jpg' && (<div className="g-image-text">Waxing</div>)}
          {image === '/5.jpg' && (<div className="g-image-text">Relaxing therapy</div>)}
          {image === '/6.jpg' && (<div className="g-image-text">Hair washing</div>)}
          {image === '/7.jpg' && (<div className="g-image-text">Permanent hair coloring</div>)}
          {image === '/8.jpg' && (<div className="g-image-text">Permanent curly hair</div>)}
          {image === '/9.jpg' && (<div className="g-image-text">Mens hair treatment</div>)}
          {image === '/10.jpg' && (<div className="g-image-text">Hair washing</div>)}
          {image === '/11.jpg' && (<div className="g-image-text">Mens beard cutting</div>)}
          {image === '/12.jpg' && (<div className="g-image-text">Mens hair cutting</div>)}

        </div>
      ))}
    </div>
  );
};

export default GImagesComponent;
