import { useState } from 'react';

const VisionCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex justify-center">
      <div 
        className="relative w-96 h-64 bg-gray-300 flex flex-col items-center justify-center rounded-3xl cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      // Removed the external gradient effect
    >
      <p className={`z-10 text-3xl font-medium transition-colors duration-700 ease-in-out ${isHovered ? 'text-white' : 'text-gray-800'}`}>
        OUR VISION
      </p>
      
      {isHovered && (
        <p className="z-10 text-white text-base mt-6 max-w-[80%] text-center">
          Trading and Distribution of different chemicals and packaging products worldwide.
        </p>
      )}
      
      <div 
        className={`absolute bottom-0 right-0 w-full h-2/5 bg-teal-600 rounded-full transition-all duration-700 ease-in-out ${
          isHovered ? 'scale-[7] -translate-x-5 bg-[#34A0A4]' : 'translate-y-[70px]'
        }`}
      ></div>
      </div>
    </div>
  );
};

export default VisionCard;