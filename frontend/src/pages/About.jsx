import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/4.jpg'; // Adjust the paths to your images
import image2 from '../assets/5.jpg';
import image3 from '../assets/3.jpg';

const About = () => {
  const images = [
    { src: image1, title: "Welcome to Our Restaurant!", note: "We serve the best dishes in town. Located in Kebele 14, Bahirdar Near Akotet." },
    { src: image2, title: "Fresh Ingredients, Local Flavors", note: "ልዩ ጥዑም ምግቦችን ለማግኘት ብቅ ይበሉ" },
    { src: image3, title: "Perfect Atmosphere", note: "Best place to chill, Date, Dinner!" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(intervalId);
  }, []); // Run only once on mount

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="About" className=" relative w-full h-screen overflow-hidden">
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
      <div className="relative  flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-4">{images[currentIndex].title}</h1>
        <p className="text-center text-white max-w-2xl">
          {images[currentIndex].note}
        </p>
        
        {/* Navigation Icons with Adjusted Positioning */}
        <div 
          className="absolute left-[10em] top-1/2 transform -translate-y-1/2 cursor-pointer" 
          onClick={handlePrev}
          role="button" // Accessibility
          aria-label="Previous Image" // Accessibility
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-white text-3xl" />
        </div>
        <div 
          className="absolute right-[10em] top-1/2 transform -translate-y-1/2 cursor-pointer" 
          onClick={handleNext}
          role="button" // Accessibility
          aria-label="Next Image" // Accessibility
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default About;