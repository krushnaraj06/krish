import React from 'react'; 
import FlowingMenu from './FlowingMenu';  
import imgpigment from "../assets/pigment.png";
import dyes from "../assets/Dyes.png";
import Pharma from "../assets/pharma.jpg";
import construction from "../assets/construction.png";
import packagingimg from "../assets/packaging.png";

const Products = () => {   
  // Define product items with placeholder images to match the design   
  const productItems = [     
    {       
      text: "PIGMENTS",       
      link: "/products/01",       
      image: imgpigment   
    },     
    {       
      text: "DYES",       
      link: "/products/02",       
      image: dyes 
    },     
    {       
      text: "PHARMASEUTICAL API",       
      link: "/products/03",       
      image: Pharma   
    },     
    {       
      text: "CONSTRUCTION CHEMICALS",       
      link: "/products/04",       
      image: construction    
    },     
    {       
      text: "PACKAGING PRODUCTS",       
      link: "/products/05",       
      image: packagingimg   
    }   
  ];    

  return (     
    <div className="w-full">       
      {/* Section Heading - Centered title */}       
      <div className="container mx-auto px-4 py-10 text-center">         
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR PRODUCTS</h2>       
      </div>              
      {/* Flowing Menu with Products */}       
      <div className="w-full h-[80vh] bg-white  ">         
        <FlowingMenu items={productItems} />       
      </div>     
    </div>   
  ); 
};  

export default Products;