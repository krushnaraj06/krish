import React, { useState, useEffect } from "react";
import krishlogo from '../assets/krishlogo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // List of products
  const products = [
    { id: "01", name: "PIGMENT" },
    { id: "02", name: "DYES" },
    { id: "03", name: "PHARMACEUTICLE" },
    { id: "04", name: "CONSTRUCTION" },
    { id: "05", name: "PACKAGING" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto">
      <div className={`relative w-full ${scrolled ? "h-[55px]" : "h-[60px]"} transition-all duration-300`}>
        {/* Background gradient */}
        <div 
          className="absolute inset-0 transition-all duration-500 bg-opacity-70" 
          style={{
            background: scrolled 
              ? "linear-gradient(to right, rgba(42,157,143,0.8) 40%, rgba(100,182,172,0.8) 100%)" 
              : "linear-gradient(to right, rgba(52,160,164,0.8) 40%, rgba(118,200,147,0.8) 100%)"
          }}
        ></div>
        
        {/* Left triangle (white) */}
        <div 
          className={`absolute bottom-0 left-0 ${scrolled ? "w-[70px] h-[70px]" : "w-[80px] h-[80px]"} bg- transition-all duration-300`}
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 0 0)"
          }}
        ></div>
        
        {/* Right triangle (white) */}
        <div 
          className={`absolute bottom-0 right-0 ${scrolled ? "w-[70px] h-[70px]" : "w-[80px] h-[80px]"} bg- transition-all duration-300`}
          style={{
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)"
          }}
        ></div>
        
        {/* Content container */}
        <div className="relative z-10 container mx-auto h-full flex justify-between items-center">
          {/* Logo section - left side */}
          <div className="flex-shrink-0 ml-4 md:ml-10 transition-all duration-300">
            <a href="/" className="flex items-center">
              <img 
                src= {krishlogo} 
                alt="Krish Chemicals Logo" 
                className={`${scrolled ? "h-8" : "h-10"} transition-all duration-300`}
              />
            </a>
          </div>
          
          {/* Navigation Links - right side */}
          <div className="hidden md:flex items-center space-x-8 mr-10">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About Us" />
            
            {/* Products dropdown with hover functionality */}
            <div className="relative products-dropdown group">
              <button 
                className="products-dropdown-toggle relative text-white transition duration-300 py-1 flex items-center"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onFocus={() => setIsProductsDropdownOpen(true)}
              >
                Products
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {/* Products dropdown menu - shows on hover */}
              <div 
                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-200 opacity-0 invisible transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                onBlur={() => setIsProductsDropdownOpen(false)}
              >
                {products.map((product) => (
                  <a 
                    key={product.id}
                    href={`/products/${product.id}`} 
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </div>
            
            <NavLink href="/contactus" label="Contact Us" />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center mr-6">
            <button 
              className="text-white focus:outline-none transition-transform duration-300 ease-in-out menu-button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu, slide-in from right */}
        <div 
          className={`mobile-menu md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-gradient-to-b from-teal-500 to-teal-700 z-50 transform transition-all duration-300 ease-in-out pt-16 shadow-xl ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute top-4 right-4">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="px-6 py-8">
            <div className="border-b border-teal-400 pb-4 mb-6 flex justify-center">
              <a href="/">
                <img 
                  src={krishlogo}
                  alt="Krish Chemicals Logo" 
                  className="h-12"
                />
              </a>
            </div>
            
            <nav className="flex flex-col space-y-1">
              <MobileNavLink href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/about" label="About Us" onClick={() => setIsMenuOpen(false)} />
              
              {/* Mobile Products Section */}
              <div className="border-t border-teal-400 pt-2 mt-2">
                <div className="px-4 py-2 text-black text-sm font-medium">Products</div>
                <div className="pl-4">
                  {products.map((product) => (
                    <a 
                      key={product.id}
                      href={`/products/${product.id}`} 
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-4 text-sm text-white hover:bg-teal-600 hover:rounded-md transition-all duration-200"
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <MobileNavLink href="/contactus" label="Contact Us" onClick={() => setIsMenuOpen(false)} />
            </nav>
            
            <div className="mt-auto pt-8 border-t border-teal-400 mt-8">
              <div className="flex justify-center space-x-4">
                <SocialIcon icon="facebook" />
                <SocialIcon icon="twitter" />
                <SocialIcon icon="instagram" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Overlay when mobile menu is open */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 md:hidden ${
            isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </div>
    </header>
  );
}

// Desktop navigation link component
const NavLink = ({ href, label }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    // Check if this link is active based on current path
    setIsActive(window.location.pathname === href);
  }, [href]);
  
  return (
    <a 
      href={href} 
      className={`relative text-white transition duration-300 py-1 group ${
        isActive ? "font-medium" : "hover:text-gray-100"
      }`}
    >
      {label}
      <span 
        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ${
          isActive ? "w-full" : "group-hover:w-full"
        }`}
      ></span>
    </a>
  );
};

// Mobile navigation link component
const MobileNavLink = ({ href, label, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    // Check if this link is active based on current path
    setIsActive(window.location.pathname === href);
  }, [href]);
  
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`block py-3 px-4 text-sm transition-all duration-200 ${
        isActive 
          ? "bg-teal-600 font-medium rounded-md" 
          : "hover:bg-teal-600 hover:rounded-md"
      }`}
    >
      {label}
    </a>
  );
};

// Social media icon component
const SocialIcon = ({ icon }) => {
  const getIcon = () => {
    switch(icon) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.284 2 8.944 2.01 7.877 2.06 6.812 2.11 6.088 2.277 5.449 2.525 4.8 2.778 4.241 3.123 3.678 3.678 3.123 4.241 2.778 4.8 2.525 5.449 2.277 6.088 2.11 6.812 2.06 7.877 2.01 8.944 2 9.284 2 12 2 14.716 2.01 15.056 2.06 16.123 2.11 17.188 2.277 17.912 2.525 18.551 2.778 19.2 3.123 19.759 3.678 20.322 4.241 20.877 4.8 21.222 5.449 21.475 6.088 21.723 6.812 21.89 7.877 21.94 8.944 21.99 9.284 22 12 22 14.716 22 15.056 21.99 16.123 21.94 17.188 21.89 17.912 21.723 18.551 21.475 19.2 21.222 19.759 20.877 20.322 20.322 20.877 19.759 21.222 19.2 21.475 18.551 21.723 17.912 21.89 17.188 21.94 16.123 21.99 15.056 22 14.716 22 12 22 9.284 21.99 8.944 21.94 7.877 21.89 6.812 21.723 6.088 21.475 5.449 21.222 4.8 20.877 4.241 20.322 3.678 19.759 3.123 19.2 2.778 18.551 2.525 17.912 2.277 17.188 2.11 16.123 2.06 15.056 2.01 14.716 2 12 2ZM12 3.802C14.67 3.802 14.986 3.812 16.041 3.86 17.016 3.906 17.546 4.066 17.897 4.204 18.363 4.384 18.695 4.602 19.047 4.953 19.398 5.305 19.616 5.637 19.796 6.103 19.934 6.454 20.094 6.984 20.14 7.959 20.188 9.015 20.198 9.33 20.198 12 20.198 14.67 20.188 14.986 20.14 16.041 20.094 17.016 19.934 17.546 19.796 17.897 19.616 18.363 19.398 18.695 19.047 19.047 18.695 19.398 18.363 19.616 17.897 19.796 17.546 19.934 17.016 20.094 16.041 20.14 14.986 20.188 14.67 20.198 12 20.198 9.33 20.198 9.015 20.188 7.959 20.14 6.984 20.094 6.454 19.934 6.103 19.796 5.637 19.616 5.305 19.398 4.953 19.047 4.602 18.695 4.384 18.363 4.204 17.897 4.066 17.546 3.906 17.016 3.86 16.041 3.812 14.986 3.802 14.67 3.802 12 3.802 9.33 3.812 9.015 3.86 7.959 3.906 6.984 4.066 6.454 4.204 6.103 4.384 5.637 4.602 5.305 4.953 4.953 5.305 4.602 5.637 4.384 6.103 4.204 6.454 4.066 6.984 3.906 7.959 3.86 9.015 3.812 9.33 3.802 12 3.802ZM12 7.364C9.209 7.364 7 9.572 7 12.364 7 15.155 9.209 17.364 12 17.364 14.791 17.364 17 15.155 17 12.364 17 9.572 14.791 7.364 12 7.364ZM12 15.562C10.208 15.562 8.802 14.156 8.802 12.364 8.802 10.572 10.208 9.166 12 9.166 13.792 9.166 15.198 10.572 15.198 12.364 15.198 14.156 13.792 15.562 12 15.562ZM17.25 8.291C18.004 8.291 18.625 7.671 18.625 6.916 18.625 6.161 18.004 5.541 17.25 5.541 16.495 5.541 15.875 6.161 15.875 6.916 15.875 7.671 16.495 8.291 17.25 8.291Z"></path>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <a href={`#${icon}`} className="text-white hover:text-teal-200 transition-colors duration-200 p-2 rounded-full hover:bg-teal-600">
      {getIcon()}
    </a>
  );
};

export default Navbar;