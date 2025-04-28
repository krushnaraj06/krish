import React from 'react';
import BusinessBanner from "../components/BusinessBanner";
import ProductShowcase from "../components/ProductShowCase";
import TabbedProductDisplay from "../components/ProductDisplay";
import packagingimg from "../assets/packaging.png";

const ProductPackaging = () => {
  // Updated tab data structure for the exact color display
  const tabData = [
    {
      title: "Reactive Dyes",
      description: "Our Reactive Dyes are specially formulated to bond chemically with cellulose fibers, ensuring vibrant, long-lasting color and superior wash fastness. Ideal for cotton, rayon, and other natural fibers, these dyes are widely used in textile dyeing and printing applications. With excellent solubility and shade consistency, they are a preferred choice for precision and durability in fabric coloration.",
      productTable: {
        headers: ["COLOUR", "PRODUCT NAME", "CASE NO.", "OTHER NAME"],
        rows: [
          ["1%", "REACTIVE BLUE 21 - 133%", "73049-92-0", "REACTIVE BLUE G"],
          ["", "REACTIVE BLUE 21 - 160%", "73049-92-0", "REACTIVE BLUE G"],
          ["", "REACTIVE BLUE 21 - 190%", "73049-92-0", "REACTIVE BLUE G"],
          ["", "REACTIVE BLUE 21 - 266%", "73049-92-0", "REACTIVE BLUE G"],
          ["", "REACTIVE BLUE 25", "12236-87-2", "REACTIVE BLUE H5G"],
          ["", "REACTIVE BLUE 71", "12677-15-5", "REACTIVE BLUE HA"],
          ["", "REACTIVE BLUE 72", "61968-93-2", "REACTIVE BLUE PGR"]
        ]
      }
    },
    {
      title: "Acid Dyes",
      description: "Our Acid Dyes are designed for dyeing protein fibers such as wool, silk, nylon, and leather. Known for their excellent light fastness and bright color profile, these dyes create vibrant, long-lasting results. They perform well in diverse application methods and are compatible with a wide range of pH conditions, making them versatile choices for both industrial and artisanal textile processing.",
      productTable: {
        headers: ["PRODUCT NAME", "CAS NO."],
        rows: [
          ["Acid Yellow 36", "587-98-4"],
          ["Acid Yellow 73", "5460-09-3"],
          ["Acid Red 88", "1658-56-6"],
          ["Acid Red 114", "6459-94-5"],
          ["Acid Blue 9", "2650-18-2"],
          ["Acid Blue 45", "2861-02-1"]
        ]
      }
    },
    {
      title: "Direct Dyes",
      description: "Our Direct Dyes offer superior affinity for cellulosic fibers without requiring a mordant, providing excellent color uniformity and cost-effectiveness. These dyes are valued for their simple application process and good light fastness properties. Ideal for cotton, rayon, and blended fabrics, our Direct Dyes deliver reliable color performance across a wide spectrum of shades, making them perfect for both industrial production and craft applications.",
      productTable: {
        headers: ["PRODUCT NAME", "CAS NO."],
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
          ["Direct Red 239", "60202-35-9"]
        ]
      }
    },
    {
      title: "Disperse Dyes",
      description: "Our Disperse Dyes are specially engineered for synthetic fibers such as polyester, acetate, and nylon. These water-insoluble dyes form a fine dispersion in the dyebath and have excellent thermal migration properties for even coloration. With superior color fastness to washing, light, and sublimation, our Disperse Dyes deliver reliable performance for textiles that require vibrant, long-lasting colors even under demanding conditions.",
      productTable: {
        headers: ["PRODUCT NAME", "CAS NO."],
        rows: [
          ["Disperse Yellow 54", "12223-85-7"],
          ["Disperse Yellow 211", "70528-90-4"],
          ["Disperse Red 167", "61968-52-3"],
          ["Disperse Red 60", "17418-58-5"],
          ["Disperse Blue 60", "12217-80-0"],
          ["Disperse Blue 183", "2537-62-4"]
        ]
      }
    }
  ];

  return (
    <div>
      <ProductShowcase 
        title="Packaging Products"
        description="At Krish Chemicals LLC, we supply a wide spectrum of high-performance dyes designed for efficiency, vibrancy, and longevity. Our dye portfolio is developed to serve various industries including textile, leather, paper, plastics, cosmetics, and food processing."
        additionalText="We offer all major dye categories to suit different fiber types and application processes, ensuring optimal compatibility and performance. Whether you're manufacturing garments, printing media, or producing specialty chemicals, Krish Chemicals LLC ensures that your dye requirements are met with precision, quality, and performance."
        imageSrc={packagingimg} 
        imageAlt="Collection of colorful dye samples"
        reversed={false}
      />
      
      <div className="my-12">
        <TabbedProductDisplay tabs={tabData} />
      </div>
      
      <BusinessBanner/>
    </div>
  );
};

export default ProductPackaging;