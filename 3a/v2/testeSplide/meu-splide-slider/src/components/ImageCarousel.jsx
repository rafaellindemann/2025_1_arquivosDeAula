import React, { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    '/img/6.jpg',
    '/img/1.jpg',
    '/img/3.jpg',
    // mais imagens...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
      <div>
        <button onClick={handlePrev}>Voltar</button>
        <button onClick={handleNext}>Avançar</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
