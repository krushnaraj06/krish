import React from 'react';  

const Footer = () => {   
  return (     
    <div className="w-full bg-white px-6 md:px-12 lg:px-20 mt-8">       
      <footer className="bg-teal-500 text-white rounded-t-[45px] overflow-hidden">         
        {/* Main content area */}         
        <div className="max-w-6xl mx-auto px-8 py-16">           
          {/* Main footer content */}           
          <div className="flex flex-col md:flex-row justify-between">             
            {/* Logo and description - left side */}             
            <div className="md:w-1/4 mb-6 md:mb-0">               
              <div className="mb-6">                 
                <img                    
                  src="/logo.png"                    
                  alt="Wadhwa Events and Exhibits"                    
                  className="h-20"                 
                />               
              </div>               
              <p className="text-sm leading-relaxed">                 
                Trading and Distribution of different<br />                 
                chemicals and packaging products<br />                 
                worldwide.               
              </p>             
            </div>                          
            {/* Navigation columns - right side */}             
            <div className="flex flex-wrap md:w-3/4 justify-between">               
              {/* Products column */}               
              <div className="w-full sm:w-1/3 mb-8">                 
                <h3 className="text-base font-medium mb-6 uppercase">Products</h3>                 
                <ul className="space-y-4 text-sm">                   
                  <li>— Pigments</li>                   
                  <li>— Dyes</li>                   
                  <li>— Pharmaceutical APIs</li>                   
                  <li>— Constructional Materials</li>                   
                  <li>— Pigments</li>                 
                </ul>               
              </div>                              
              {/* Corporate Office column */}               
              <div className="w-full sm:w-1/3 mb-8">                 
                <h3 className="text-base font-medium mb-6 uppercase">Corporate Office</h3>                 
                <ul className="space-y-4 text-sm">                   
                  <li>Book Appointment</li>                   
                  <li>Link 2</li>                   
                  <li>Link 3</li>                   
                  <li>Link 4</li>                   
                  <li>Link 5</li>                 
                </ul>               
              </div>                              
              {/* Industry Work column */}               
              <div className="w-full sm:w-1/3 mb-8">                 
                <h3 className="text-base font-medium mb-6 uppercase">Industry Work</h3>                 
                <ul className="space-y-4 text-sm">                   
                  <li>Link 1</li>                   
                  <li>Link 2</li>                   
                  <li>Link 3</li>                   
                  <li>Link 4</li>                   
                  <li>Link 4</li>                 
                </ul>               
              </div>             
            </div>           
          </div>         
        </div>                  
        {/* Copyright bar */}         
        <div className="py-4 border-t border-teal-400">           
          <div className="max-w-6xl mx-auto px-8 text-center text-xs">             
            © 2024 - All Rights Reserved - Wadhwa Events and Exhibits           
          </div>         
        </div>       
      </footer>     
    </div>   
  ); 
};  

export default Footer;