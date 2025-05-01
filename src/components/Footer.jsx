import React from 'react';
import krishlogo from '../assets/krishlogo.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler function to navigate and scroll to top
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top after navigation
  };
  
  return (     
    <div className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-20 mt-8">       
      <footer className="bg-teal-500 text-white rounded-t-[25px] sm:rounded-t-[35px] md:rounded-t-[45px] overflow-hidden">         
        {/* Main content area */}         
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">           
          {/* Main footer content */}           
          <div className="flex flex-col md:flex-row justify-between">             
            {/* Logo and description - left side */}             
            <div className="md:w-1/4 mb-8 md:mb-0">               
              <div className="mb-4 md:mb-6">                 
                <img                    
                  src={krishlogo}                   
                  alt="Krish Chemicals"                    
                  className="h-16 md:h-20"                 
                />               
              </div>               
              <p className="text-sm md:text-base leading-relaxed">                 
                Trading and Distribution of different<br />                 
                chemicals and packaging products<br />                 
                worldwide.               
              </p>
            </div>                          
            {/* Navigation columns - right side */}             
            <div className="flex flex-wrap md:w-3/4 justify-between">               
              {/* Products column */}               
              <div className="w-1/2 sm:w-1/3 mb-8">                 
                <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6 uppercase">Products</h3>                 
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">                   
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/products/01');
                      }}
                      className="hover:text-teal-200 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">—</span> Pigments
                    </a>
                  </li>                   
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/products/02');
                      }}
                      className="hover:text-teal-200 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">—</span> Dyes
                    </a>
                  </li>                   
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/products/03');
                      }}
                      className="hover:text-teal-200 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">—</span> Pharmaceutical APIs
                    </a>
                  </li>                   
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/products/04');
                      }}
                      className="hover:text-teal-200 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">—</span> Constructional Chemicals
                    </a>
                  </li>   
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/products/06');
                      }}
                      className="hover:text-teal-200 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">—</span> Water Treatment Chemical
                    </a>
                  </li>                   
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/products/05');
                      }}
                      className="hover:text-teal-200 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">—</span> Packaging Products
                    </a>
                  </li>                 
                </ul>               
              </div>                              
              {/* Corporate Office column */}               
              <div className="w-1/2 sm:w-1/3 mb-8">                                
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">                   
                <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/about');
                      }}
                      className="hover:text-teal-200 transition-colors"
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('/contactus');
                      }}
                      className="hover:text-teal-200 transition-colors"
                    >
                     CONTACT US
                    </a>
                  </li>                     
                </ul>               
              </div>                              
              {/* Industry Work column */}               
              <div className="w-full sm:w-1/3 mb-8">                 
                <h3 className="text-lg md:text-xl font-medium mb- md:mb- uppercase">Work Address</h3>                 
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">                   
                  <li>
                    <a 
                      href="https://maps.app.goo.gl/uS4ZJyvcehiAJVaK9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-teal-200 transition-colors"
                    >
                      5463 Dierks Dr Rockford, II 61108
                    </a>
                  </li>           
                </ul>
                <h3 className="text-lg md:text-xl font-medium mb- md:mb- uppercase mt-[20px]">Contact</h3>                 
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg ">                   
                  <li>
                    <a href="tel:+12679018801" className="hover:text-teal-200 transition-colors block">
                      +1(267)901-8801
                    </a>
                    <a href="tel:+18153294126" className="hover:text-teal-200 transition-colors block mt-1">
                      +1(815)329-4126
                    </a>
                  </li>           
                </ul>
                <h3 className="text-lg md:text-xl font-medium mb- md:mb- uppercase mt-[20px]">Email</h3>                 
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">                   
                  <li>
                    <a href="mailto:info@krishchemusa.com" className="hover:text-teal-200 transition-colors">
                      info@krishchemusa.com
                    </a>
                  </li>           
                </ul>
                
              </div>             
            </div>           
          </div>         
        </div>                  
        {/* Copyright bar */}         
        <div className="py-3 sm:py-4 border-t border-teal-400">           
          <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center text-sm md:text-base">             
            © {new Date().getFullYear()} - All Rights Reserved - Krish Chemicals          
          </div>         
        </div>       
      </footer>     
    </div>   
  ); 
};  

export default Footer;