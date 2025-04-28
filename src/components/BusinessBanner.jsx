import React from 'react';
import backgroundImage from '../assets/homebg.jpg'; 

const BusinessBanner = () => {
  return (
    <div className="w-full relative">
      {/* This div is where you'll add your background image */}
      <div className="absolute inset-0 bg-blue-900">
        {/* You can add your background image here */}
        <img 
  src={backgroundImage}
  alt="Background" 
  className="w-full h-full object-cover opacity-80"
/>
      </div>
      
      {/* Content overlay */}
      <div className="relative px-8 py-20">
        <div className="bg-blue-800 bg-opacity-50 rounded-lg p-12 mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-serif mb-6">
            <span className="text-white">Creativity For </span>
            <span className="text-green-400">Eternity</span>
          </h1>
          
          <p className="text-white text-lg mb-2">
            Ready to elevate your business with high-quality products that deliver results?
          </p>
          <p className="text-white text-lg mb-8">
            Let our expertise in chemicals and packaging power your success.
          </p>
          
          <div className="flex justify-center">
            <button className="bg-white text-blue-700 font-medium py-3 px-8 rounded hover:bg-blue-100 transition duration-300">
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;