import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data for all tabs extracted from the images
const dyeData = {
  reactive: {
    title: "Reactive Dyes",
    description: "Our Reactive Dyes are specially formulated to bond chemically with cellulose fibers, ensuring vibrant, long-lasting color and superior wash fastness. Ideal for cotton, rayon, and other natural fibers, these dyes are widely used in textile dyeing and printing applications. With excellent solubility and shade consistency, they are a preferred choice for precision and durability in fabric coloration.",
    productTable: {
      headers: ["Colour", "Product Name", "Case No.", "Other Name"],
      rows: [
        // For each product, add custom colors for 1% and 4% samples
        // Format: ["", "Product Name", "CAS No.", "Other Name", "1% color", "4% color"]
        ["", "REACTIVE BLUE 21 - 133%", "73049-92-0", "REACTIVE BLUE G", "#BBDEFB", "#2196F3"],
        ["", "REACTIVE BLUE 21 - 160%", "73049-92-0", "REACTIVE BLUE G", "#90CAF9", "#1E88E5"],
        ["", "REACTIVE BLUE 21 - 190%", "73049-92-0", "REACTIVE BLUE G", "#64B5F6", "#1976D2"],
        ["", "REACTIVE BLUE 21 - 266%", "73049-92-0", "REACTIVE BLUE G", "#42A5F5", "#1565C0"],
        ["", "REACTIVE BLUE 25", "12236-87-2", "REACTIVE BLUE H5G", "#29B6F6", "#0D47A1"],
        ["", "REACTIVE BLUE 71", "12677-15-5", "REACTIVE BLUE HA", "#03A9F4", "#0277BD"],
        ["", "REACTIVE BLUE 72", "61968-93-2", "REACTIVE BLUE PGR", "#00B0FF", "#01579B"]
      ]
    }
  },
  direct: {
    title: "Direct Dyes",
    description: "Direct Dyes offer a simple and economical solution for dyeing cellulose fibers such as cotton, paper, and viscose without the need for a mordant. These water-soluble dyes are known for their ease of application, good light fastness, and bright shades, making them ideal for bulk textile and paper industries.",
    productTable: {
      headers: ["Product Name", "CAS No."],
      rows: [
        ["Direct Blue 86", "1330-38-7"],
        ["Direct Blue 199", "12222-04-07"],
        ["Direct Yellow 11", "1325-37-7"],
        ["Direct Yellow 12", "2870-32-8"],
        ["Direct Yellow 44", "8005-52-5"],
        ["Direct Orange 34", "12222-37-6"],
        ["Direct Orange 108", "6358-79-8"],
        ["Direct Red 23", "3441-14-3"],
        ["Direct Red 81", "2610-11-9"],
        ["Direct Red 254", ""],
        ["Direct Red 239", "60202-35-9"]
      ]
    }
  },
  basic: {
    title: "Basic Dyes",
    description: "Known for their intense brightness and high tinctorial strength, Basic Dyes are perfect for dyeing acrylic fibers, paper, leather, and inks. These cationic dyes offer strong fiber affinity and vibrant tones, and are widely used where brilliance and impact are key.",
    productTable: {
      headers: ["Product Name", "CAS No."],
      rows: [
        ["Basic Violet 10", "81-88-9"],
        ["Basic Yellow 2", "2465-27-2"],
        ["Basic Violet 1", "8004-87-3"],
        ["Basic Violet 2", "3248-91-7"],
        ["Basic Violet 3", "548-62-9"],
        ["Basic Brown 1", "10114-58-6"],
        ["Basic Brown 4", "5421-66-9"],
        ["Basic Red 12", "6320-14-5"],
        ["Basic Blue 9", "61-73-4"],
        ["Basic Blue 26", "2580-56-5"],
        ["Basic Orange 1", "4438-16-8"],
        ["Basic Orange 2", "532-82-1"],
        ["Basic Green 1", "633-03-4"],
        ["Basic Green 4", "2437-29-8"],
        ["Basic Blue 140", "61724-62-7"],
        ["Basic Violet 4", "2390-59-2"]
      ]
    }
  },
  acid: {
    title: "Acid Dyes",
    description: "Acid Dyes are designed for protein fibers like wool, silk, and nylon, offering brilliant shades with high fastness properties. They are ideal for textile and cosmetic applications that demand depth of color, smoothness, and durability.",
    productTable: {
      headers: ["Product Name", "CAS No."],
      rows: [
        ["Acid Yellow 36", "587-98-4"],
        ["Acid Orange 7", "633-96-5"],
        ["Acid Red 18", "2611-82-7"],
        ["Acid Red 88", "1658-56-6"],
        ["Acid Blue 9", "2650-18-2"],
        ["Acid Orange 10", "1936-15-8"],
        ["Acid Violet 49", "1694-09-3"],
        ["Acid Black 2", "8005-03-6"]
      ]
    }
  },
  solvent: {
    title: "Solvent Dyes",
    description: "Our Solvent Dyes are non-polar, oil-soluble dyes used for plastics, hydrocarbon fuels, waxes, inks, and coatings. These dyes provide transparent, bright, and heat-stable colors, making them ideal for industrial applications requiring vividness and stability.",
    productTable: {
      headers: ["Product Name", "CAS No."],
      rows: [
        ["Solvent Yellow 2", "60-11-7"],
        ["Solvent Yellow 14", "842-07-9"],
        ["Solvent Violet 8", "67989-22-4"],
        ["Solvent Yellow 34", "492-80-8"],
        ["Solvent Violet 9", "467-63-0"],
        ["Solvent Red 1", "1229-55-6"],
        ["Solvent Red 23", "85-86-9"],
        ["Solvent Red 24", "85-83-6"],
        ["Solvent Red 49", "509-34-2"],
        ["Solvent Blue 4", "6786-83-0"],
        ["Solvent Orange 3", "495-45-5"],
        ["Solvent Black 7", "10135-15-7"],
        ["Solvent Blue 48", "61711-30-6"]
      ]
    }
  },
  food: {
    title: "Food-Grade Colors",
    description: "We offer a trusted selection of Food-Grade Colors formulated to meet international safety standards. Perfect for confectionery, beverages, dairy, baked goods, and pharmaceuticals, our food colors ensure consistent performance, vibrant appearance, and regulatory compliance across all applications.",
    productTable: {
      headers: ["Product Name", "CAS No."],
      rows: [
        ["Acid Yellow 23", "1934-21-0"],
        ["Orange Yellow S", "2783-94-0"],
        ["Acid Red 7", "2611-82-7"],
        ["Acid Red 27", "915-67-3"],
        ["Acid Blue 9", "3844-45-9"],
        ["Chocolate Brown", "4553-89-3"],
        ["Food Red 17", "25956-17-6"]
      ]
    }
  }
};

const TabbedProductDisplay = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = Object.values(dyeData);
  
  // Teal color constants
  const tealPrimary = "#34A0A4";
  const tealLight = "#B2E4E6";
  const tealLighter = "#E0F5F6";
  const tealDark = "#2C8A8E";

  // Function to render the table with appropriate colors
  const renderTable = (tableData, index) => {
    if (!tableData) return null;

    // First tab (index 0) gets the blue style (original colors), all others get the simple style with teal accents
    if (index === 0) {
      // Custom color samples for Reactive Dyes table
      return (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md border border-blue-200">
          <div className="border-2 border-white rounded shadow-lg overflow-hidden">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th 
                    colSpan="2" 
                    className="bg-blue-600 text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    COLOUR
                  </th>
                  <th 
                    className="bg-blue-600 text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    PRODUCT NAME
                  </th>
                  <th 
                    className="bg-blue-600 text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    CASE NO.
                  </th>
                  <th 
                    className="bg-blue-600 text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    OTHER NAME
                  </th>
                </tr>
                <tr>
                  <th 
                    className="bg-blue-600 text-white px-3 py-2 text-center text-sm font-bold border border-white w-16"
                  >
                    1%
                  </th>
                  <th 
                    className="bg-blue-600 text-white px-3 py-2 text-center text-sm font-bold border border-white w-16"
                  >
                    4%
                  </th>
                  <th colSpan="3" className="border-none"></th>
                </tr>
              </thead>
              <tbody>
                {tableData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {/* 1% Column - Custom color from data */}
                    <td className="p-0 m-0 border border-white">
                      <div 
                        className="w-full h-full min-h-[45px] flex items-center justify-center"
                        style={{ backgroundColor: row[4] || '#BBDEFB' }} // Use custom color or default
                      >
                        {rowIndex === 0 ? "1%" : ""}
                      </div>
                    </td>
                    
                    {/* 4% Column - Custom color from data */}
                    <td className="p-0 m-0 border border-white">
                      <div 
                        className="w-full h-full min-h-[45px] flex items-center justify-center"
                        style={{ backgroundColor: row[5] || '#2196F3' }} // Use custom color or default
                      >
                        {rowIndex === 0 ? "4%" : ""}
                      </div>
                    </td>
                    
                    {/* Product name */}
                    <td className="px-4 py-3 text-base text-gray-800 border border-white bg-white">
                      {row[1]}
                    </td>
                    
                    {/* CAS number */}
                    <td className="px-4 py-3 text-base text-gray-800 border border-white bg-white text-center">
                      {row[2]}
                    </td>
                    
                    {/* Other name */}
                    <td className="px-4 py-3 text-base text-gray-800 border border-white bg-white">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      // Simple style table for all other tabs, but with teal accent
      return (
        <div className="mt-6 rounded overflow-hidden shadow-md border-t-4 border-[#34A0A4]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E0F5F6]">
              <tr>
                {tableData.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-3 text-left text-xs font-medium text-[#2C8A8E] uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-gray-200 mt-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-shrink-0 px-5 py-3 font-medium text-sm transition-colors duration-200 relative ${
              activeTab === index
                ? 'text-[#34A0A4]'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
            {activeTab === index && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full bg-[#34A0A4]"
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
          >
            {/* Description Text */}
            <div className="text-gray-700 leading-relaxed mb-8">
              {tabs[activeTab].description}
            </div>

            {/* Product Table with style based on tab index */}
            {tabs[activeTab].productTable && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="overflow-x-auto"
              >
                {renderTable(tabs[activeTab].productTable, activeTab)}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabbedProductDisplay;