import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const PackagingProductDisplay = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Product data with images and descriptions
  const products = [
    {
      title: "Jumbo Bags",
      description: "Designed for bulk packaging needs, our Jumbo Bags (also known as FIBCs) are made from strong woven polypropylene. They are ideal for storing and transporting large volumes of dry materials such as chemicals, grains, and minerals. Available in various sizes from 100 kg to 600 kg capacity, with customizable options for filling, discharge, and lifting.",
      imageSrc: require("../assets/packag1.png"),
      altText: "Jumbo Bags on wooden pallets"
    },
    {
      title: "Shrink Film",
      description: "Our high-quality shrink film provides superior sealing and protection for products during storage and transit. It tightly conforms to the shape of items, offering tamper-evident and moisture-resistant packaging. Commonly used in bundling, retail packaging, and pallet wrapping across diverse industries.",
      imageSrc:  require("../assets/packag2.jpg"),
      altText: "Rolls of clear shrink film with packaged products"
    },
    {
      title: "Bubble Wrap",
      description: "Engineered for cushioning and shock absorption, our bubble wrap rolls provide excellent protection for fragile items during shipping. Lightweight, reusable, and easy to use, it helps reduce breakage and damage in handling and transport. Ideal for electronics, glassware, and delicate machinery.",
      imageSrc:  require("../assets/packag3.jpg"),
      altText: "Bubble wrap packaging material"
    },
    {
      title: "HDPE Bags",
      description: "Our High-Density Polyethylene (HDPE) bags are durable, tear-resistant, and ideal for packaging a wide variety of industrial and commercial goods. Available in capacities ranging from 5 kg to 50 kg, they are suitable for chemicals, fertilizers, resins, and more. Custom printing options available.",
      imageSrc:  require("../assets/packag4.jpg"),
      altText: "Stacked HDPE bags filled with product"
    },
    {
      title: "Paper Bags",
      description: "Eco-friendly and recyclable, our industrial-grade paper bags offer sustainable packaging solutions without compromising strength. These bags are available in multiple ply options and sizes (5 kg to 50 kg) and are ideal for packaging food ingredients, seeds, powders, and granular materials.",
      imageSrc:  require("../assets/packag5.jpg"),
      altText: "Various sizes of kraft paper bags"
    },
    {
      title: "Dustbin Bags",
      description: "Manufactured using high-grade polymers, our dustbin bags are puncture-resistant and leak-proof, making them perfect for hygiene and waste disposal in residential, commercial, and industrial setups. Available in multiple sizes and thicknesses to suit varied usage needs.",
      imageSrc:  require("../assets/packag6.jpg"),
      altText: "Black garbage bags piled on street"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-gray-200 mt-2">
        {products.map((product, index) => (
          <button
            key={index}
            className={`flex-shrink-0 px-5 py-3 font-medium text-sm transition-colors duration-200 relative ${
              activeTab === index
                ? 'text-red-500'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {product.title}
            {activeTab === index && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full bg-red-500"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-6 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            {/* Product Description Text */}
            <motion.div 
              className="w-full mb-4 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-700 leading-relaxed max-w-6xl mx-auto">
                {products[activeTab].description}
              </p>
            </motion.div>

            {/* Product Image with Animation */}
            <motion.div 
              className="w-full max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="overflow-hidden border border-gray-200">
                <img 
                  src={products[activeTab].imageSrc} 
                  alt={products[activeTab].altText}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PackagingProductDisplay; 