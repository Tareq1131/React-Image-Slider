import React, { useState, useEffect } from 'react';
import './Slider.css'

const images = [
    'https://placekitten.com/500/300',
    'https://placekitten.com/501/300',
    'https://placekitten.com/502/300',
    'https://placekitten.com/503/300',
 
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the delay time as needed

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
    <div className="slider-container">
        <div>
      <button onClick={handlePrev}>Previous</button>
      <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} />
      <button onClick={handleNext}>Next</button>
      </div>
      <div className="dot-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default App;
