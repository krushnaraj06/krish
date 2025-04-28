import React from 'react';
import BusinessBanner from "../components/BusinessBanner";
import ProductShowcase from "../components/ProductShowCase";
import TabbedProductDisplay from "../components/ProductDisplay2";
import dyes from "../assets/Dyes.png";

const Dyes = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero section with showcase */}
            <ProductShowcase
                title="Soluble Dyes"
                description="At Krish Chemicals LLC, we supply a wide spectrum of high-performance dyes designed for efficiency, vibrancy, and longevity. Our dye portfolio is developed to serve various industries including textile, leather, paper, plastics, cosmetics, and food processing."
                additionalText="We offer all major dye categories to suit different fiber types and application processes, ensuring optimal compatibility and performance. Whether you're manufacturing garments, printing media, or producing specialty chemicals, Krish Chemicals LLC ensures that your dye requirements are met with precision, quality, and performance."
                imageSrc={dyes}
                imageAlt="Collection of colorful pigment bottles"
                reversed={false}
            />
            
            {/* Tabbed product catalog */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Our Product Catalog</h2>
                    <TabbedProductDisplay />
                </div>
            </section>
            
            {/* Banner at the bottom */}
            <BusinessBanner />
        </div>
    );
};

export default Dyes;