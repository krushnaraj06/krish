import React from "react";
import BusinessBanner from "../components/BusinessBanner";
import ProductShowcase from "../components/ProductShowCase";
import Pharma from "../assets/pharma.jpg";
import FabricImageBanner from "../components/PurpleFabric";

const Pharmaceutical = () => {
  // Pharmaceutical product data
  const pharmaceuticalProducts = [
    { name: "Cetrimide BP", cas: "1119-97-7" },
    { name: "Cetyl Pyridinium chloride", cas: "6004-24-6" },
    { name: "Chlorohexidine Base", cas: "55-56-1" },
    { name: "Lauryl Pyridinium Chloride", cas: "207234-02-4" },
    { name: "Povidone Iodine Powder", cas: "25655-41-8" },
    { name: "Sodium Iodide USP", cas: "7681-82-5" },
    { name: "Potassium Iodide USP", cas: "7681-11-0" },
    { name: "Calcium Iodate", cas: "10102-68-8" }
  ];

  return (
    <div>
      <ProductShowcase
        title="PHARMACEUTICAL API"
        description="At Krish Chemicals LLC, we supply a reliable range of Active Pharmaceutical Ingredients (APIs) and intermediates that meet stringent quality and regulatory standards. Our API portfolio supports formulations for antiseptics, disinfectants, and essential healthcare products"
        additionalText="We source our APIs from certified manufacturers with a strong track record in compliance and consistent production. This ensures purity, efficacy, and batch-to-batch reliability for pharmaceutical companies worldwide. Partner with Krish Chemicals LLC for a dependable API supply chain built on quality, trust, and regulatory excellence."
        imageSrc={Pharma}
        imageAlt="Collection of colorful pigment bottles"
        reversed={false}
      />

      <FabricImageBanner/>

      {/* Pharmaceutical Products Table */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Pharmaceutical Products</h2>
        
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-4 text-left text-xl font-bold">PRODUCT NAME</th>
                <th className="border border-gray-300 px-6 py-4 text-left text-xl font-bold">CAS NO.</th>
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

      <BusinessBanner />
    </div>
  );
};

export default Pharmaceutical;