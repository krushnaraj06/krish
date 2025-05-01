import React from "react";
import ProductShowcase from "../components/ProductShowCase";
import img from "../assets/Wt.png";
const WaterTreatment = () => {
    const pharmaceuticalProducts = [
        { name: "Calcium Hypochlorite ", cas: "68% granules" },

      ];
    
    return (
        <div>

<ProductShowcase
        title="Water Treatment"
        description="Our range of water treatment chemicals is designed to improve water quality, ensure safety, and enhance the efficiency of water systems across industrial, municipal, and commercial applications. These chemicals help in the removal of impurities, prevention of scaling and corrosion, and control of microbial growth, contributing to clean and compliant water processes."
        additionalText=""
        imageSrc={img}
        imageAlt="Collection of colorful pigment bottles"
        reversed={false}
      />

<div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Water Treatment Chemical Products</h2>
        
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-4 text-left text-xl font-bold">PRODUCT NAME</th>
                <th className="border border-gray-300 px-6 py-4 text-left text-xl font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {pharmaceuticalProducts.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-6 py-4 text-lg">{product.name}</td>
                  <td className="border border-gray-300 px-6 py-4 text-lg">{product.cas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


            
        </div>
    )
}
export default WaterTreatment;