import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/4.jpg';
import image2 from '../assets/5.jpg';
import image3 from '../assets/3.jpg';

const About = () => {
  const images = [
    { src: image1, title: "Welcome to Our Restaurant!", note: "We serve the best dishes in town. Located in Kebele 14, Bahirdar Near Akotet." },
    { src: image2, title: "Fresh Ingredients, Local Flavors", note: "ልዩ ጥዑም ምግቦችን ለማግኘት ብቅ ይበሉ" },
    { src: image3, title: "Perfect Atmosphere", note: "Best place to chill, Date, Dinner!" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) { // Threshold for swipe
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div 
      id="About" 
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}

      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{images[currentIndex].title}</h1>
        <p className="text-base sm:text-lg md:text-xl text-white max-w-md sm:max-w-2xl mb-8">
          {images[currentIndex].note}
        </p>
        
        {/* Dots indicator */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <FontAwesomeIcon 
              key={index}
              icon={faCircle} 
              className={`text-white text-xs ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`} 
            />
          ))}
        </div>
        
        {/* Navigation Icons (hidden on mobile) */}
        <div 
          className="absolute left-10 top-1/2 transform -translate-y-1/2 cursor-pointer hidden sm:block" 
          onClick={handlePrev}
          role="button"
          aria-label="Previous Image"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-white text-4xl" />
        </div>
        <div 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer hidden sm:block" 
          onClick={handleNext}
          role="button"
          aria-label="Next Image"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default About;