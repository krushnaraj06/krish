import React from 'react';
import krishlogo from '../assets/krishlogo.png';
import { Link } from 'react-router-dom'; // Import Link for routing

const Footer = () => {   
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
              
              {/* Social Media Links - Mobile Only */}
              <div className="flex space-x-4 mt-4 md:hidden">
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-teal-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="hover:text-teal-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-teal-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM1 9h4v12H1V9zm6.32 0h3.87v1.76h.06c.54-1.02 1.86-2.1 3.82-2.1 4.1 0 4.86 2.7 4.86 6.2V21h-4.03v-6.53c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.34V21h-4.05V9z"/></svg>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-teal-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.23-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.15.63c-.78.3-1.44.7-2.1 1.37C1.36 2.7.96 3.36.66 4.15.36 4.9.16 5.77.1 7.05.04 8.33.03 8.74.03 12c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.9.3.8.7 1.45 1.37 2.12.67.66 1.33 1.06 2.12 1.37.76.3 1.63.5 2.9.56 1.28.06 1.7.07 4.95.07 3.26 0 3.67-.01 4.95-.07 1.27-.06 2.15-.26 2.9-.56.8-.3 1.45-.7 2.12-1.37.66-.67 1.06-1.33 1.37-2.12.3-.76.5-1.63.56-2.9.06-1.28.07-1.7.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.27-.26-2.15-.56-2.9-.3-.8-.7-1.45-1.37-2.12-.67-.66-1.33-1.06-2.12-1.37-.76-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0z"/><path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16 0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
                </a>
              </div>
            </div>                          
            {/* Navigation columns - right side */}             
            <div className="flex flex-wrap md:w-3/4 justify-between">               
              {/* Products column */}               
              <div className="w-1/2 sm:w-1/3 mb-8">                 
                <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6 uppercase">Products</h3>                 
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">                   
                  <li>
                    <Link to="/products/pigments" className="hover:text-teal-200 transition-colors inline-flex items-center">
                      <span className="mr-2">—</span> Pigments
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/products/dyes" className="hover:text-teal-200 transition-colors inline-flex items-center">
                      <span className="mr-2">—</span> Dyes
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/products/pharmaceutical-apis" className="hover:text-teal-200 transition-colors inline-flex items-center">
                      <span className="mr-2">—</span> Pharmaceutical APIs
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/products/constructional-materials" className="hover:text-teal-200 transition-colors inline-flex items-center">
                      <span className="mr-2">—</span> Constructional Materials
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/products/fine-chemicals" className="hover:text-teal-200 transition-colors inline-flex items-center">
                      <span className="mr-2">—</span> Fine Chemicals
                    </Link>
                  </li>                 
                </ul>               
              </div>                              
              {/* Corporate Office column */}               
              <div className="w-1/2 sm:w-1/3 mb-8">                 
                <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6 uppercase">Corporate Office</h3>                 
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">                   
                  <li>
                    <Link to="/appointment" className="hover:text-teal-200 transition-colors">
                      Book Appointment
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/about" className="hover:text-teal-200 transition-colors">
                      About Us
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/careers" className="hover:text-teal-200 transition-colors">
                      Careers
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/blog" className="hover:text-teal-200 transition-colors">
                      Blog
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/contact" className="hover:text-teal-200 transition-colors">
                      Contact Us
                    </Link>
                  </li>                 
                </ul>               
              </div>                              
              {/* Industry Work column */}               
              <div className="w-full sm:w-1/3 mb-8">                 
                <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6 uppercase">Industry Work</h3>                 
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">                   
                  <li>
                    <Link to="/industries/textiles" className="hover:text-teal-200 transition-colors">
                      Textiles
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/industries/paints" className="hover:text-teal-200 transition-colors">
                      Paints & Coatings
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/industries/pharma" className="hover:text-teal-200 transition-colors">
                      Pharmaceuticals
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/industries/plastics" className="hover:text-teal-200 transition-colors">
                      Plastics
                    </Link>
                  </li>                   
                  <li>
                    <Link to="/industries/cosmetics" className="hover:text-teal-200 transition-colors">
                      Cosmetics
                    </Link>
                  </li>                 
                </ul>
                
                {/* Social Media Links - Desktop Only */}
                <div className="hidden md:flex space-x-4 mt-6">
                  <a href="https://facebook.com" aria-label="Facebook" className="hover:text-teal-200 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                  </a>
                  <a href="https://twitter.com" aria-label="Twitter" className="hover:text-teal-200 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-teal-200 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM1 9h4v12H1V9zm6.32 0h3.87v1.76h.06c.54-1.02 1.86-2.1 3.82-2.1 4.1 0 4.86 2.7 4.86 6.2V21h-4.03v-6.53c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.34V21h-4.05V9z"/></svg>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram" className="hover:text-teal-200 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.23-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.15.63c-.78.3-1.44.7-2.1 1.37C1.36 2.7.96 3.36.66 4.15.36 4.9.16 5.77.1 7.05.04 8.33.03 8.74.03 12c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.9.3.8.7 1.45 1.37 2.12.67.66 1.33 1.06 2.12 1.37.76.3 1.63.5 2.9.56 1.28.06 1.7.07 4.95.07 3.26 0 3.67-.01 4.95-.07 1.27-.06 2.15-.26 2.9-.56.8-.3 1.45-.7 2.12-1.37.66-.67 1.06-1.33 1.37-2.12.3-.76.5-1.63.56-2.9.06-1.28.07-1.7.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.27-.26-2.15-.56-2.9-.3-.8-.7-1.45-1.37-2.12-.67-.66-1.33-1.06-2.12-1.37-.76-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0z"/><path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16 0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
                  </a>
                </div>
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