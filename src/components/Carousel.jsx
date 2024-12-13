// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      src: 'https://placehold.co/500x300',
      alt: 'Business person working on laptop',
    },
    {
      src: 'https://placehold.co/500x300?text=Image+2',
      alt: 'Another business scenario',
    },
    {
      src: 'https://placehold.co/500x300?text=Image+3',
      alt: 'PayPal services',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg">
      <div className="carousel overflow-hidden rounded-lg">
        <div
          className="slides flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>
      {/* Previous/Next Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-3 py-1 rounded-full  bg-opacity-50 hover:bg-opacity-75"
      >
<span className="text-2xl font-semibold text-black">
  &larr;
        </span>


      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white px-3 py-1 rounded-full  bg-opacity-50 hover:bg-opacity-75"
      >
<span className="text-2xl font-semibold text-black">
  &rarr;
        </span>   </button>
    </div>
  );
};

export default Carousel;
