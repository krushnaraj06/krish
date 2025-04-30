import React from 'react';
import backgroundImage from '../assets/homebg2.jpg';

const BusinessBanner = () => {
  return (
    <div className="w-full relative">
      {/* Background image container */}
      <div className="absolute inset-0 bg-blue-900">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Content overlay with blur effect */}
      <div className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="backdrop-blur-md bg-blue-800 bg-opacity-30 rounded-lg p-6 sm:p-10 md:p-16 mx-auto w-11/12 lg:w-5/6 xl:max-w-6xl text-center shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 md:mb-8">
            <span className="text-white">Products For </span>
            <span className="text-green-400 block sm:inline">Performance</span>
          </h1>
          
          <p className="text-white text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
            Ready to elevate your business with high-quality products that deliver results?
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10">
            Let our expertise in chemicals and packaging power your success.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="/contactus" 
              className="bg-white text-blue-700 font-medium sm:font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-md hover:bg-blue-100 transition duration-300 text-base md:text-lg"
            >
              Connect With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;