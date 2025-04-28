import React from 'react'; 
import FlowingMenu from './FlowingMenu'; 
import profileImage from '../assets/krishlogo.png'; // Using your logo for the product that has an image  

const Products = () => {   
  // Define product items with placeholder images to match the design   
  const productItems = [     
    {       
      text: "PIGMENTS",       
      link: "/products/pigments",       
      image: "/api/placeholder/400/200"     
    },     
    {       
      text: "DYES",       
      link: "/products/dyes",       
      image: profileImage // Using your logo as shown in the image     
    },     
    {       
      text: "PHARMASEUTICAL API",       
      link: "/products/pharmaceutical-api",       
      image: "/api/placeholder/400/200"     
    },     
    {       
      text: "CONSTRUCTION CHEMICALS",       
      link: "/products/construction-chemicals",       
      image: "/api/placeholder/400/200"     
    },     
    {       
      text: "PACKAGING PRODUCTS",       
      link: "/products/packaging-products",       
      image: "/api/placeholder/400/200"     
    }   
  ];    

  return (     
    <div className="w-full">       
      {/* Section Heading - Centered title */}       
      <div className="container mx-auto px-4 py-10 text-center">         
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR PRODUCTS</h2>       
      </div>              
      {/* Flowing Menu with Products */}       
      <div className="w-full h-[80vh] bg-white ">         
        <FlowingMenu items={productItems} />       
      </div>     
    </div>   
  ); 
};  

export default Products;