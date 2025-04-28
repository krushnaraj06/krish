import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabbedProductDisplay = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Function to render the table with exact blue shades
  const renderTable = (tableData, index) => {
    if (!tableData) return null;

    // First tab (index 0) gets the blue style, all others get the simple style
    if (index === 0) {
      // Blue style table with exact color shades from the image
      return (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md border border-blue-200">
          <div className="border-2 border-white rounded shadow-lg overflow-hidden">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th 
                    colSpan="2" 
                    className="bg-[#2589c8] text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    COLOUR
                  </th>
                  <th 
                    className="bg-[#2589c8] text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    PRODUCT NAME
                  </th>
                  <th 
                    className="bg-[#2589c8] text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    CASE NO.
                  </th>
                  <th 
                    className="bg-[#2589c8] text-white px-3 py-3 text-center text-base font-bold uppercase border border-white"
                  >
                    OTHER NAME
                  </th>
                </tr>
                <tr>
                  <th 
                    className="bg-[#2589c8] text-white px-3 py-2 text-center text-sm font-bold border border-white w-16"
                  >
                    1%
                  </th>
                  <th 
                    className="bg-[#2589c8] text-white px-3 py-2 text-center text-sm font-bold border border-white w-16"
                  >
                    4%
                  </th>
                  <th colSpan="3" className="border-none"></th>
                </tr>
              </thead>
              <tbody>
                {tableData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {/* 1% Column */}
                    <td className="p-0 m-0 border border-white">
                      <div 
                        className="w-full h-full min-h-[45px] flex items-center justify-center"
                        style={{ backgroundColor: '#9EDBF3' }} // Light blue shade from image
                      >
                        {rowIndex === 0 ? "1%" : ""}
                      </div>
                    </td>
                    
                    {/* 4% Column */}
                    <td className="p-0 m-0 border border-white">
                      <div 
                        className="w-full h-full min-h-[45px] flex items-center justify-center"
                        style={{ 
                          backgroundColor: rowIndex % 2 === 0 ? '#3C92C8' : '#1d6ca8'  // Alternate between two dark blue shades
                        }}
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
      // Simple style table for all other tabs
      return (
        <div className="mt-6 rounded overflow-hidden shadow-md border-t-4 border-blue-500">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableData.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
    <div className="w-full max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-gray-200 mt-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-shrink-0 px-5 py-3 font-medium text-sm transition-colors duration-200 relative ${
              activeTab === index
                ? 'text-red-500'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
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