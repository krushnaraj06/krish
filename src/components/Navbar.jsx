import React, { useState, useEffect, useRef } from "react";
// Make sure this path is correct based on your project structure
import krishlogo from '../assets/krishlogo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChemicalsOpen, setIsChemicalsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  
  // Create ref for the products dropdown
  const productsDropdownRef = useRef(null);

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
      // More specific check to avoid closing when clicking within the menu
      if (isMenuOpen && 
          !event.target.closest('.mobile-menu') && 
          !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Close products dropdown when clicking outside
  useEffect(() => {
    if (!productsDropdownOpen) return;
    
    const handleClickOutside = (event) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [productsDropdownOpen]);

  // List of products
  const products = {
    chemicals: [
      { id: "01", name: "PIGMENT" },
      { id: "02", name: "DYES" },
      { id: "03", name: "PHARMACEUTICAL API" },
      { id: "04", name: "CONSTRUCTION CHEMICALS" },
      { id: "06", name: "WATER TREATMENT CHEMICALS" }
    ],
    packaging: [
      { id: "05", name: "PACKAGING" }
    ]
  };

  // Debug: log the chemical products to verify the data
  console.log("Chemical products:", products.chemicals);

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
        

        
        {/* Content container */}
        <div className="relative z-10 container mx-auto h-full flex justify-between items-center">
          {/* Logo section - left side */}
          <div className="flex-shrink-0 ml-4 md:ml-10 transition-all duration-300">
            <a href="/" className="flex items-center">
              <img 
                src={krishlogo} 
                alt="Krish Chemicals Logo" 
                className={`${scrolled ? "h-8" : "h-10"} transition-all duration-300`}
              />
            </a>
          </div>
          
          {/* Navigation Links - right side */}
          <div className="hidden md:flex items-center space-x-8 mr-20">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About Us" />
            
            {/* Products dropdown with click functionality */}
            <div 
              className="relative products-dropdown"
              ref={productsDropdownRef}
            >
              <button 
                className="products-dropdown-toggle relative text-white transition duration-300 py-1 flex items-center"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                Products
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-1 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${productsDropdownOpen ? 'w-full' : 'w-0 hover:w-full'}`}></span>
              </button>
              
              {/* First level dropdown - Categories */}
              <div 
                className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-200 
                  ${productsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
              >
                {/* Main Category - Chemicals */}
                <div className="chemicals-menu-item relative">
                  <button
                    className="block w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center relative"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent dropdown from closing
                      setIsChemicalsOpen(!isChemicalsOpen);
                    }}
                  >
                    <span>Chemicals</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform duration-200 ${isChemicalsOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Chemicals dropdown */}
                  <div className={`bg-white py-1 overflow-hidden transition-all duration-300 ${isChemicalsOpen ? 'max-h-60' : 'max-h-0'}`}>
                    {products.chemicals.map((product) => (
                      <a 
                        key={product.id}
                        href={`/products/${product.id}`} 
                        className="block px-6 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                        onClick={(e) => {
                          // Allow time for the click to register before navigating
                          e.stopPropagation();
                        }}
                      >
                        {product.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Packaging category - separate menu item */}
                <a 
                  href="/products/05" 
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  onClick={(e) => {
                    // Allow navigation but don't close the menu
                    e.stopPropagation();
                  }}
                >
                  Packaging
                </a>
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
                <div className="px-4 py-2 text-white text-sm font-medium">Products</div>
                
                {/* Chemicals subsection */}
                <div className="border-t border-teal-400/30 mt-1">
                  <button 
                    className="flex justify-between items-center w-full px-4 py-2 text-white text-sm"
                    onClick={() => setIsChemicalsOpen(!isChemicalsOpen)}
                  >
                    <span>Chemicals</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform duration-200 ${isChemicalsOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`pl-4 overflow-hidden transition-all duration-300 ${isChemicalsOpen ? 'max-h-60' : 'max-h-0'}`}>
                    {products.chemicals.map((product) => (
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
                
                {/* Packaging subsection */}
                <div className="border-t border-teal-400/30 mt-1">
                  <a 
                    href="/products/05" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 text-sm text-white hover:bg-teal-600 hover:rounded-md transition-all duration-200"
                  >
                    Packaging
                  </a>
                </div>
              </div>
              
              <MobileNavLink href="/contactus" label="Contact Us" onClick={() => setIsMenuOpen(false)} />
            </nav>
        
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
    
    // Update active state when the URL changes
    const handleRouteChange = () => {
      setIsActive(window.location.pathname === href);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
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
        className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
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
    
    // Update active state when the URL changes
    const handleRouteChange = () => {
      setIsActive(window.location.pathname === href);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [href]);
  
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`block py-3 px-4 text-white text-sm transition-all duration-200 ${
        isActive 
          ? "bg-teal-600 font-medium rounded-md" 
          : "hover:bg-teal-600 hover:rounded-md"
      }`}
    >
      {label}
    </a>
  );
};

export default Navbar;