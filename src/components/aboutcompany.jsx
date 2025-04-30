import React from 'react';
import TiltedCard from './TitledCard.jsx';
// Import image from src/assets directory
import profileImage from '../assets/krishlogo.png';

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Header with line */}
      
      {/* Main content section */}
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left side - Text content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide leading-tight mb-6">
              YOUR TRUSTED PARTNER FOR QUALITY CHEMICALS<br />
              AND SMART PACKAGING SOLUTIONS.
            </h2>
            
            {/* About Us button */}
            <a href="#about" className="inline-block px-10 py-4 bg-teal-500 text-black font-bold rounded-full mb-12 hover:bg-teal-600 transition-colors">
              ABOUT US
            </a>
          </div>
          
          {/* Right side - Tilted card */}
          <div className=" md:w-1/1 bg-gray-200">
            <TiltedCard 
              imageSrc={profileImage}
              altText="Company Profile"
              captionText="Krish Chemicals"
              containerHeight="200px"
              containerWidth="100%"
              imageHeight="200px"
              imageWidth="200px"
              showMobileWarning={false}
            />
          </div>
        </div>
      </div>
      
      {/* Full width gradient background section */}
      <div className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-16">
        <div className="container mx-auto px-4 md:px-20">
          <p className="text-center text-lg md:text-xl leading-relaxed">
            We at Krish Chemicals LLC are committed to being your reliable partner for high-quality chemicals and
            packaging solutions. Based in Rockford, Illinois, we specialize in a wide range of industrial chemicals —
            from pigments, dyes, and pharmaceutical APIs to construction chemicals — along with durable
            packaging products like jumbo bags, shrink films, and bubble wraps. Backed by strong industry
            expertise and partnerships with leading manufacturers, we ensure consistent quality, timely deliveries,
            and complete transparency in every deal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;