import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ProductShowcase = ({
  title,
  description,
  additionalText,
  imageSrc,
  imageAlt,
  titleColor = "blue",
  glowColor = "rgba(0, 0, 255, 0.6)",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();
  
  // TrueFocus specific states and refs
  const words = title.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      // Start TrueFocus animation after component is visible
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, 1500); // 0.5s animation + 1s pause
      
      return () => clearInterval(interval);
    }
  }, [isInView, controls, words.length]);
  
  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index) => {
    setLastActiveIndex(index);
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentIndex(lastActiveIndex);
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-16 mt-[20px]">
      {/* Title with TrueFocus effect */}
      <div className="text-center mb-12">
        <div
          className="relative inline-flex gap-4 justify-center items-center flex-wrap"
          ref={containerRef}
        >
          {words.map((word, index) => {
            const isActive = index === currentIndex;
            return (
              <span
                key={index}
                ref={(el) => (wordRefs.current[index] = el)}
                className="relative text-5xl font-bold cursor-pointer text-black"
                style={{
                  filter: isActive ? `blur(0px)` : `blur(5px)`,
                  transition: `filter 0.5s ease`,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {word}
              </span>
            );
          })}

          <motion.div
            className="absolute top-0 left-0 pointer-events-none box-border border-0"
            animate={{
              x: focusRect.x,
              y: focusRect.y,
              width: focusRect.width,
              height: focusRect.height,
              opacity: currentIndex >= 0 ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span
              className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
              style={{
                borderColor: titleColor,
                filter: `drop-shadow(0 0 4px ${glowColor})`,
              }}
            ></span>
            <span
              className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
              style={{
                borderColor: titleColor,
                filter: `drop-shadow(0 0 4px ${glowColor})`,
              }}
            ></span>
            <span
              className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
              style={{
                borderColor: titleColor,
                filter: `drop-shadow(0 0 4px ${glowColor})`,
              }}
            ></span>
            <span
              className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
              style={{
                borderColor: titleColor,
                filter: `drop-shadow(0 0 4px ${glowColor})`,
              }}
            ></span>
          </motion.div>
        </div>
      </div>

      {/* Content layout matching the photo */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text content - Left side */}
        <div className="flex-1 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.3 }
              }
            }}
          >
            <p className="text-gray-700 mb-6">
              {description}
            </p>
            
            <p className="text-gray-700">
              {additionalText}
            </p>
          </motion.div>
        </div>
        
        {/* Image - Right side */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1,
              x: 0,
              transition: { 
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
              }
            }
          }}
        >
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;