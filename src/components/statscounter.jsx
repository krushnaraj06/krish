import React, { useState, useEffect } from 'react';

const CounterItem = ({ value, label, hasImage = false }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 50; // Number of steps in the animation
    const stepTime = duration / steps;
    const increment = value / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      setCount(Math.min(Math.round(increment * currentStep), value));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <div className="flex flex-col items-center px-2 sm:px-4 md:px-8 mt-6 w-full">
      <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 flex items-center">
        {count}
        <span className="text-blue-500 text-2xl sm:text-3xl md:text-4xl">
          {value === 100 ? "%" : "+"}
        </span>
      </div>
      <div className="text-xxs xs:text-xs uppercase tracking-wider text-gray-600 text-center">
        {label}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:divide-x divide-gray-300">
        <CounterItem value={50} label="PRODUCTS IN OUR PORTFOLIO" />
        <CounterItem value={100} label="QUALITY ASSURANCE" />
        <CounterItem value={15} label="YEARS OF INDUSTRY EXPERIENCE" />
      </div>
    </div>
  );
};

export default StatsCounter;