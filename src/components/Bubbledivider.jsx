import React, { useState, useEffect } from 'react';
import packagingimage from '../assets/packagingdivider.png';

const FabricImageBanner = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div 
        className={`transition-all duration-1000 ease-in-out transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <img 
          src={packagingimage}
          alt="Colorful fabric texture with purple, turquoise and pink textiles" 
          className="w-full object-cover transition-transform duration-7000 ease-in-out hover:scale-105 shadow-lg"
        />
        
        {/* Overlay with subtle gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-400/10 mix-blend-overlay"></div>
      </div>
    </div>
  );
};

export default FabricImageBanner;



