import React, { useEffect, useState } from 'react';
// Import your image
import backgroundImage from '../assets/homebg.jpg'; // Adjust path as needed
import AboutUs from '../components/aboutcompany';
import Products from '../components/ProductSection';
import BusinessBanner from '../components/BusinessBanner';
import StatsCounter from '../components/statscounter';
import VideoGridLayout from '../components/VideoGridLayout';

const HomePage = () => {
  const [lineAnimated, setLineAnimated] = useState(false);
  const [imageRevealed, setImageRevealed] = useState(false);
  const [lineHidden, setLineHidden] = useState(false);
  
  useEffect(() => {
    // First animate the line from right to left
    setTimeout(() => {
      setLineAnimated(true);
      
      // Then reveal the image
      setTimeout(() => {
        setImageRevealed(true);
        
        // Finally, hide the line after image is revealed
        setTimeout(() => {
          setLineHidden(true);
        }, 1500);
      }, 800);
    }, 500);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero section */}
      <div className="h-screen w-full relative overflow-hidden">
        {/* Global style to ensure background extends behind navbar */}
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}</style>
        
        {/* This div covers the entire page and is positioned at the lowest z-index */}
        <div 
          className="absolute inset-0" 
          style={{ zIndex: -1 }} // Low z-index to ensure it's behind content but only in hero section
        >
          {/* White background that stays visible */}
          <div className="absolute inset-0 bg-white"></div>
          
          {/* Image container with clip-path animation */}
          <div 
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${imageRevealed ? 'opacity-100' : 'opacity-0'}`}
            style={{
              clipPath: imageRevealed ? 'inset(0 0 0 0)' : 'inset(50% 0 50% 0)',
              transition: 'clip-path 1.5s ease-out, opacity 0.5s ease-in-out',
              transitionDelay: '0s, 0s'
            }}
          >
            <img 
              src={backgroundImage} 
              alt="Krish Chemicals" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Horizontal line animation - right to left */}
          <div 
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 h-px bg-gray-800 transition-all duration-1000 ease-in-out
                        ${lineAnimated ? 'w-full' : 'w-0'} 
                        ${lineHidden ? 'opacity-0' : 'opacity-100'}`}
            style={{
              transformOrigin: 'right',
              transitionProperty: 'width, opacity',
              transitionDuration: '1000ms, 800ms',
              transitionDelay: '0ms, 0ms'
            }}
          />
        </div>
        
        {/* Content container - Add padding top to account for navbar height */}
        <div className="relative h-full flex flex-col justify-center items-center pt-16" style={{ zIndex: 1 }}>
          {/* Heading with animation */}
          <h1 
            className={`text-5xl md:text-7xl text-white font-bold tracking-wider text-center transform transition-all duration-1000 ${imageRevealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{transitionDelay: '800ms'}}
          >
            KRISH CHEMICALS
          </h1>
          
          {/* Subtext with animation */}
          <p 
            className={`text-xs md:text-sm text-white text-center max-w-2xl mt-6 transform transition-all duration-1000 ${imageRevealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{transitionDelay: '1100ms'}}
          >
            BRIDGING CONTINENTS THROUGH THE RELIABLE SUPPLY OF PREMIUM CHEMICALS AND INNOVATIVE PACKAGING SOLUTIONS, TAILORED TO MEET THE DYNAMIC NEEDS OF GLOBAL INDUSTRIES.
          </p>
        </div>
      </div>
      
      {/* About Us section - positioned below the hero section */}
      <AboutUs/>

      <StatsCounter/>
      
  
      {/* Products section */}
      <Products/>
      <VideoGridLayout/>
      <BusinessBanner/>
    </div>
  );
};

export default HomePage;