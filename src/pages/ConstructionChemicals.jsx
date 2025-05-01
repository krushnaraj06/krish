import React from "react";
import BusinessBanner from "../components/BusinessBanner";
import ProductShowcase from "../components/ProductShowCase";
import construction from "../assets/construction.png";
import FabricImageBanner from "../components/PurpleFabric";

const ConstructionChemicals = () => {
  // Construction chemicals product data
  const constructionProducts = [
    {
      productName: "Polymol® SNF Powder",
      casNo: "9084-06-4",
      chemicalName: "Sulphonated Naphthalene Formaldehyde Condensate, Sodium Salt."
    },
    {
      productName: "Polymol® SNF Liquid",
      casNo: "9084-06-4",
      chemicalName: "Sulphonated Naphthalene Formaldehyde Condensate, Sodium Salt."
    },
    {
      productName: "Polymol® PCE-700",
      casNo: "70789-60-6",
      chemicalName: "Synthetic Polycarboxylic Ether."
    },
    {
      productName: "Polymol® PCE-308",
      casNo: "70789-60-6",
      chemicalName: "Synthetic Polycarboxylic Ether."
    },
    {
      productName: "Polymol® PCE-310",
      casNo: "70789-60-6",
      chemicalName: "Synthetic Polycarboxylic Ether."
    },
    {
      productName: "Polymol® PCE-312",
      casNo: "70789-60-6",
      chemicalName: "Synthetic Polycarboxylic Ether."
    },
    {
      productName: "Polymol® PCE-315",
      casNo: "70789-60-6",
      chemicalName: "Synthetic Polycarboxylic Ether."
    },
    {
      productName: "Polymol® GPC Powder",
      casNo: "70789-60-6",
      chemicalName: "Synthetic Polycarboxylic Powder."
    }
  ];

  return (
    <div>
      <ProductShowcase
        title="Construction Chemicals"
        description="Our range of Construction Chemicals is designed to enhance the strength, durability, and performance of building structures and infrastructure projects. From admixtures and waterproofing agents to surface treatments and bonding solutions, we offer high-performance products tailored to meet the demands of modern construction"
        additionalText="Sourced from trusted manufacturers, our chemicals comply with global quality and safety standards, ensuring reliability across civil, industrial, and commercial construction. Choose Krish Chemicals LLC for innovative and dependable construction chemical solutions that support sustainable and long-lasting infrastructure."
        imageSrc={construction}
        imageAlt="Collection of colorful pigment bottles"
        reversed={false}
      />

      {/* Construction Chemicals Table - Responsive Version */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-light mb-10">
          <span className="text-gray-600">Construction</span>{" "}
          <span className="text-blue-400">Chemical</span>
        </h2>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-sm">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="w-12 md:w-16 bg-blue-400 border border-white text-center py-2 md:py-3 px-2 md:px-4"></th>
                  <th className="bg-blue-400 border border-white text-white text-lg md:text-2xl font-normal py-2 md:py-3 px-3 md:px-6 text-left">
                    PRODUCT NAME
                  </th>
                  <th className="bg-blue-400 border border-white text-white text-lg md:text-2xl font-normal py-2 md:py-3 px-3 md:px-6 text-left">
                    CHEMICAL NAME
                  </th>
                </tr>
              </thead>
              <tbody>
                {constructionProducts.map((product, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="border border-gray-200 p-2 md:p-4"></td>
                    <td className="border border-gray-200 p-2 md:p-4">
                      <div className="text-gray-700 text-base md:text-xl font-normal">
                        {product.productName}
                      </div>
                      <div className="text-red-500 text-sm md:text-base font-normal mt-1">
                        CAS No. {product.casNo}
                      </div>
                    </td>
                    <td className="border border-gray-200 p-2 md:p-4">
                      <div className="text-gray-600 text-base md:text-xl font-normal">
                        {product.chemicalName}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <BusinessBanner />
    </div>
  );
};

export default ConstructionChemicals;