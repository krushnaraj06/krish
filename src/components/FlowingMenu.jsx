import React, { useEffect, useRef } from 'react';

function FlowingMenu({ items = [
  { link: '#home', text: 'Home', image: '/api/placeholder/200/120' },
  { link: '#about', text: 'About', image: '/api/placeholder/200/120' },
  { link: '#services', text: 'Services', image: '/api/placeholder/200/120' },
  { link: '#contact', text: 'Contact', image: '/api/placeholder/200/120' }
] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const isHovered = useRef(false);
  const animationRef = useRef(null);
  
  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };
  
  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    isHovered.current = true;
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    
    // Only animate the container in, leave the inner content running
    marqueeRef.current.style.transition = 'transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)';
    marqueeRef.current.style.transform = 'translateY(0%)';
  };
  
  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current) return;
    
    isHovered.current = false;
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    
    // Only animate the container out, leave the inner content running
    marqueeRef.current.style.transition = 'transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)';
    marqueeRef.current.style.transform = `translateY(${edge === 'top' ? '-101%' : '101%'})`;
  };
  
  useEffect(() => {
    if (!marqueeInnerRef.current) return;
    
    // Set up continuous animation for the inner content
    const startMarqueeAnimation = () => {
      if (!marqueeInnerRef.current) return;
      
      let startTime = null;
      const duration = 20000; // 20 seconds for one complete loop
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;
        
        // Move from 0% to -50% (half the width since we have duplicated content)
        const translateX = -50 * progress;
        
        if (marqueeInnerRef.current) {
          marqueeInnerRef.current.style.transform = `translateX(${translateX}%)`;
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    startMarqueeAnimation();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  const repeatedMarqueeContent = Array.from({ length: 8 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-black uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0] flex items-center whitespace-nowrap">
        {text}
      </span>
      <div
        className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center inline-block"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));
  
  return (
    <div className="flex-1 relative overflow-hidden text-center border-b border-black" ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-black text-xl hover:text-gray-800 focus:text-white focus-visible:text-gray-800"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-gradient-to-r from-teal-400 to-green-400"
        ref={marqueeRef}
        style={{ transform: 'translateY(101%)' }}
      >
        <div className="h-full w-full flex" ref={marqueeInnerRef}>
          <div className="flex items-center h-full whitespace-nowrap">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;