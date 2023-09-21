import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const imageWidth = 200;
  const scrollSpeed = 3;
  const numImages = images.length;

  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const slideImages = () => {
   
    setScrollPosition(prevPosition => {
      const newPosition = prevPosition + scrollSpeed;

      console.log(newPosition);

      if (newPosition > 2500) {
        
        sliderRef.current.style.transition = 'none'; 
        return -imageWidth * (numImages - 1); 
      }

      return newPosition;
    });
  };

  useEffect(() => {
    const interval = setInterval(slideImages, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
  }, []);

  return (
    <div className="image-slider-container">
      <div
        ref={sliderRef}
        className="image-slider"
        style={{
          width: `${imageWidth * numImages}px`,
          transform: `translateX(${scrollPosition}px)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="image-slide"
            style={{ width: `${imageWidth}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
