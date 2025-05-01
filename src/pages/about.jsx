import React from 'react';
import labimage from '../assets/labimage.png';
import ProductShowcase from '../components/ProductShowCase';
import about from "../assets/aboutus.png";
import VideoGridLayout from '../components/VideoGridLayout';
import TailwindCard from '../components/Card';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
              <ProductShowcase 
  title="About Us"
  description="Krish Chemicals LLC is a privately owned trading firm based in Rockford, Illinois, USA, specializing in a diverse range of industrial chemicals and packaging products. With a strong foundation in chemical manufacturing and trading, we bridge the gap between leading manufacturers and end-users, delivering quality, consistency, and trust.

"
  additionalText="We offer an extensive portfolio of industrial chemicals including Pigments, Dyes, Pharmaceutical APIs and Intermediates, Food Colors, Construction Chemicals, and General Chemicals. In addition, we provide a wide range of industrial packaging solutions such as Jumbo Bags, Shrink Films, Bubble Wraps, HDPE Bags, and Paper Bags to meet varied industry needs."
  imageSrc= {about} 
  imageAlt="Collection of colorful pigment bottles"
  reversed={false} // Optional: set to true to switch layout direction
/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Plain background */}
        <div className="mb-16">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <img 
                className="w-full h-auto rounded-lg shadow-md object-cover" 
                src={labimage}
                alt="Laboratory Equipment at Krish Chemicals" 
              />
            </div>
            <div className="md:w-3/5">
              <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-[20px]"></h1>
              <p className="mb-4 text-gray-700 leading-relaxed">
                At Krish Chemicals, we are more than just suppliers — we are partners in your growth. Under the leadership of our founder, Mr. Nikunj Devani, a seasoned expert in the chemical manufacturing industry with established operations in India, we are committed to offering products backed by industry expertise and global collaborations.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Our strong partnerships with reputed manufacturers allow us to ensure consistent quality, uninterrupted supply, and competitive pricing. Transparency is a cornerstone of our operations — we provide clear, up-to-date information to both our customers and suppliers, fostering long-term, trust-based relationships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Krish Chemicals LLC, our goal is to deliver excellence, empower industries, and become your preferred partner for chemical and packaging needs worldwide.
              </p>
            </div>
          </div>
        </div>
{/* Vision and Mission Cards */}
<div className="grid md:grid-cols-2 gap-6">
  {/* Vision Card */}
  <div className="bg-white border-l-4 border-blue-600 rounded shadow-md p-6 transition hover:shadow-lg">
    <h2 className="text-xl font-semibold text-blue-700 mb-4">
      Our Values
    </h2>
    
    <p className="text-gray-700 mb-4">
    · INTIGRITY – We are ethical and trustworthy in our relationships with all stakeholders.<br/>
· RELIABILITY – We deliver quality products and services as agreed upon in a consistent manner.<br/>
· EXCELLENCE – We deliver what we promise and add value that goes beyond what is expected.
    </p>
    
  </div>

  {/* Mission Card */}
  <div className="bg-white border-l-4 border-green-600 rounded shadow-md p-6 transition hover:shadow-lg">
    <h2 className="text-xl font-semibold text-green-700 mb-4">
      Our Mission
    </h2>
    
    <p className="text-gray-700 mb-4">
    · To be preferred and trustful supplier of Chemicals and packaging products.<br/>
· Deliver our promises in safely and responsible manner.<br/>
· Deliver world class products reliably.<br/>
· Driving growth through excellence, performance and customer focus.
    </p>
  
         
           
            </div>

          </div>
        </div>
        <div className=''>
        <TailwindCard/>
        </div>
      </div>
  
  );
};

export default AboutUs;