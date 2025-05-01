import React from 'react';
import BusinessBanner from "../components/BusinessBanner";
import ProductShowcase from "../components/ProductShowCase";
import TabbedProductDisplay from "../components/ProductDisplay";
import packagingimg from "../assets/packaging.png";
import Packagingdiv from '../components/Bubbledivider.jsx';

const ProductPackaging = () => {
  // Updated tab data structure for the exact color display

  return (
    <div>
      <ProductShowcase 
        title="Packaging Products"
        description="We offer a reliable range of industrial packaging products that ensure safe storage, efficient transportation, and optimal protection of goods across various industries. From heavy-duty bulk bags to protective films and wraps, our packaging solutions are designed for durability and performance. Each product is sourced with a focus on strength, sustainability, and cost-effectiveness to support your operational needs."
        additionalText=""
        imageSrc={packagingimg} 
        imageAlt="Collection of colorful dye samples"
        reversed={false}
      />

      <Packagingdiv/>
      
      <div className="my-12">
        <TabbedProductDisplay/>
     
      </div>
      
      <BusinessBanner/>
    </div>
  );
};

export default ProductPackaging;