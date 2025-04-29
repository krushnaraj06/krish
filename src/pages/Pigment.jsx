import React, { useState } from 'react';
import ProductShowcase from '../components/ProductShowCase';
import imgpigment from "../assets/pigment.png";
import BusinessBanner from '../components/BusinessBanner';

const Pigment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Complete pigment data from the provided images
  const pigmentData = [
    // Yellow Pigments
    { id: 1, name: 'Pigment Yellow 01', ciNo: '11680', cas: '2512-29-0', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'N', rubber: 'N', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE88' },
    { id: 2, name: 'Pigment Yellow 03', ciNo: '11710', cas: '6486-23-3', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'N', rubber: 'N', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEEBB' },
    { id: 3, name: 'Pigment Yellow 12', ciNo: '21090', cas: '6358-85-6', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 4, name: 'Pigment Yellow 13', ciNo: '21100', cas: '5102-83-0', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'L', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 5, name: 'Pigment Yellow 14', ciNo: '21095', cas: '5468-75-7', nc: 'N', printingInk: 'S', paints: 'L', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 6, name: 'Pigment Yellow 17', ciNo: '21105', cas: '4531-49-1', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 7, name: 'Pigment Yellow 62', ciNo: '13940', cas: '12286-66-7', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'S', textile: 'L', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 8, name: 'Pigment Yellow 65', ciNo: '11740', cas: '6528-34-3', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'L', rubber: 'L', textile: 'L', massTone: '#FFDD00', tintTone: '#FFEE88' },
    { id: 9, name: 'Pigment Yellow 73', ciNo: '11738', cas: '13515-40-7', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'N', rubber: 'N', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 10, name: 'Pigment Yellow 74', ciNo: '11741', cas: '6358-31-2', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'L', rubber: 'L', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 11, name: 'Pigment Yellow 83', ciNo: '21108', cas: '5567-15-7', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 12, name: 'Pigment Yellow 127', ciNo: '21102', cas: '5102-83-0', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 13, name: 'Pigment Yellow 151', ciNo: '13980', cas: '71872-67-8', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'L', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 14, name: 'Pigment Yellow 154', ciNo: '11781', cas: '63661-02-9', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'L', textile: 'L', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 15, name: 'Pigment Yellow 155', ciNo: '200310', cas: '68516-73-4', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'S', textile: 'L', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 16, name: 'Pigment Yellow 168', ciNo: '13960', cas: '71832-85-4', nc: 'N', printingInk: 'N', paints: 'S', plastic: 'S', rubber: 'S', textile: 'N', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 17, name: 'Pigment Yellow 183', ciNo: '18792', cas: '65212-77-3', nc: 'N', printingInk: 'N', paints: 'S', plastic: 'S', rubber: 'S', textile: 'N', massTone: '#FFDD00', tintTone: '#FFEE00' },
    { id: 18, name: 'Pigment Yellow 191:1', ciNo: '18795', cas: '129423-54-7', nc: 'N', printingInk: 'N', paints: 'S', plastic: 'S', rubber: 'S', textile: 'N', massTone: '#FFDD00', tintTone: '#FFEE00' },
    
    // Orange Pigments
    { id: 19, name: 'Pigment Orange 5', ciNo: '12075', cas: '3468-63-1', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'L', rubber: 'S', textile: 'S', massTone: '#FF0000', tintTone: '#FF9999' },
    { id: 20, name: 'Pigment Orange 13', ciNo: '21110', cas: '3520-72-7', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FF0000', tintTone: '#FF8844' },
    { id: 21, name: 'Pigment Orange 34', ciNo: '21115', cas: '15793-73-4', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FF0000', tintTone: '#FF7755' },
    
    // Blue Pigments
    { id: 22, name: 'Pigment Blue 15.0', ciNo: '74160', cas: '147-14-8', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#000066', tintTone: '#0099FF' },
    { id: 23, name: 'Pigment Blue 15.1', ciNo: '74160', cas: '147-14-8', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#000066', tintTone: '#0099FF' },
    { id: 24, name: 'Pigment Blue 15.3', ciNo: '74160', cas: '147-14-8', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'N', textile: 'N', massTone: '#000066', tintTone: '#0099FF' },
    
    // From Image 2 (additional pigments)
    { id: 25, name: 'Pigment Blue 15.4', ciNo: '74160', cas: '147-14-8', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'N', textile: 'N', massTone: '#000066', tintTone: '#0099FF' },
    { id: 26, name: 'Pigment Green 7', ciNo: '74260', cas: '1328-53-6', nc: 'S', printingInk: 'N', paints: 'S', plastic: 'S', rubber: 'N', textile: 'S', massTone: '#000066', tintTone: '#009988' },
    { id: 27, name: 'Pigment Green 7', ciNo: '74260', cas: '1328-53-6', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#000066', tintTone: '#009988' },
    { id: 28, name: 'Pigment Red 2', ciNo: '12310', cas: '6041-94-7', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'L', rubber: 'N', textile: 'S', massTone: '#FF0000', tintTone: '#FF4477' },
    { id: 29, name: 'Pigment Red 3', ciNo: '12120', cas: '2425-85-6', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 30, name: 'Pigment Red 4', ciNo: '12085', cas: '2814-77-9', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'N', rubber: 'N', textile: 'N', massTone: '#FF0000', tintTone: '#FF7744' },
    { id: 31, name: 'Pigment Red 8', ciNo: '12335', cas: '6410-30-6', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'N', rubber: 'N', textile: 'S', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 32, name: 'Pigment Red 12', ciNo: '12385', cas: '6410-32-8', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 33, name: 'Pigment Red 22', ciNo: '12315', cas: '6448-95-9', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#FF0000', tintTone: '#FF99AA' },
    { id: 34, name: 'Pigment Red 23', ciNo: '12355', cas: '6471-49-4', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FF0000', tintTone: '#FF99AA' },
    { id: 35, name: 'Pigment Red 31', ciNo: '12360', cas: '6448-96-0', nc: 'N', printingInk: 'N', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FF0000', tintTone: '#FF99AA' },
    { id: 36, name: 'Pigment Red 32', ciNo: '12320', cas: '6410-29-3', nc: 'N', printingInk: 'N', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#FF0000', tintTone: '#FF99AA' },
    { id: 37, name: 'Pigment Red 48:1', ciNo: '15865:1', cas: '7585-41-3', nc: 'L', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'S', textile: 'L', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 38, name: 'Pigment Red 48:2', ciNo: '15865:2', cas: '7023-61-2', nc: 'N', printingInk: 'L', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 39, name: 'Pigment Red 48:3', ciNo: '15865:3', cas: '15782-05-5', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'N', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 40, name: 'Pigment Red 48:4', ciNo: '15865:4', cas: '5280-66-0', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'N', massTone: '#990000', tintTone: '#CC99CC' },
    { id: 41, name: 'Pigment Red 49:1', ciNo: '15630:1', cas: '1103-38-4', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'N', massTone: '#990000', tintTone: '#CC99CC' },
    { id: 42, name: 'Pigment Red 49:2', ciNo: '15630:2', cas: '1103-39-5', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#990000', tintTone: '#CC99CC' },
    { id: 43, name: 'Pigment Red 52:2', ciNo: '15860:2', cas: '12238-31-2', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'S', textile: 'S', massTone: '#990000', tintTone: '#CC99CC' },
    { id: 44, name: 'Pigment Red 53:1', ciNo: '15585:1', cas: '5160-02-1', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'L', massTone: '#FF0000', tintTone: '#FF99AA' },
    { id: 45, name: 'Pigment Red 57:1', ciNo: '12850', cas: '5281-04-9', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'L', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 46, name: 'Pigment Red 63:1', ciNo: '15880:1', cas: '6417-83-0', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'N', massTone: '#990000', tintTone: '#990000' },
    { id: 47, name: 'Pigment Red 53:2', ciNo: '15880:2', cas: '35355-77-2', nc: 'S', printingInk: 'S', paints: 'S', plastic: 'L', rubber: 'L', textile: 'L', massTone: '#990000', tintTone: '#FF99AA' },
    { id: 48, name: 'Pigment Red 112', ciNo: '12370', cas: '6535-46-2', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#FF0000', tintTone: '#FF99AA' },
    { id: 49, name: 'Pigment Red 122', ciNo: '73915', cas: '16043-40-6', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#CC0099', tintTone: '#FF99CC' },
    { id: 50, name: 'Pigment Red 146', ciNo: '12485', cas: '5280-68-2', nc: 'N', printingInk: 'S', paints: 'S', plastic: 'S', rubber: 'L', textile: 'S', massTone: '#990000', tintTone: '#FF99AA' }
  ];

  // Filter pigments based on search term
  const filteredPigments = pigmentData.filter(pigment => 
    pigment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pigment.ciNo.includes(searchTerm) ||
    pigment.cas.includes(searchTerm)
  );

  // Helper function to render S, N, L with colors
  const renderValue = (value) => {
    switch(value) {
      case 'S':
        return <span style={{ color: '#16a34a', fontWeight: 500 }}>S</span>;
      case 'N':
        return <span style={{ color: '#dc2626', fontWeight: 500 }}>N</span>;
      case 'L':
        return <span style={{ color: '#ca8a04', fontWeight: 500 }}>L</span>;
      default:
        return value;
    }
  };

  return (

   
    <div style={{ maxWidth: '100%', padding: '20px' }}>
        <ProductShowcase 
  title="Pigment Powder"
  description="At Krish Chemicals LLC, we offer a comprehensive range of high-quality industrial pigments that deliver vibrant color, consistency, and durability across applications. Our pigments are sourced from trusted manufacturers and are designed to meet the exacting standards of industries such as textiles, plastics, coatings, inks, cosmetics, construction, and more.

"
  additionalText="Our pigment portfolio can be tailored to your product needs, whether you're looking for standard formulations or custom solutions. At Krish Chemicals, we believe in coloring your vision with quality and trust."
  imageSrc= {imgpigment} 
  imageAlt="Collection of colorful pigment bottles"
  reversed={false} // Optional: set to true to switch layout direction
/>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2563eb' }}>Organic Pigments</h1>
      
      {/* Search input */}
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search by name, CI No, or CAS No..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
      </div>
      
      {/* Responsive table container */}
      <div style={{ overflowX: 'auto', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6' }}>
              <th style={{ padding: '12px 15px', textAlign: 'left', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Sr No.</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Color Index Name</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>CAS No</th>
              <th style={{ padding: '12px 15px', textAlign: 'center', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>NC Lacquer</th>
              <th style={{ padding: '12px 15px', textAlign: 'center', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Printing Ink</th>
              <th style={{ padding: '12px 15px', textAlign: 'center', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Paints</th>
              <th style={{ padding: '12px 15px', textAlign: 'center', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Plastic</th>
              <th style={{ padding: '12px 15px', textAlign: 'center', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Rubber</th>
              <th style={{ padding: '12px 15px', textAlign: 'center', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Textile</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Mass Tone</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', fontSize: '14px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>Tint Tone</th>
            </tr>
          </thead>
          <tbody>
            {filteredPigments.map((pigment) => (
              <tr key={pigment.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px 15px', fontSize: '14px' }}>{pigment.id}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px' }}>
                  <a 
                    href={`#${pigment.name}`} 
                    style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}
                    onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                  >
                    {pigment.name}
                  </a>
                  <span style={{ display: 'block', fontSize: '12px', color: '#6b7280', marginTop: '3px' }}>
                    C I No - {pigment.ciNo}
                  </span>
                </td>
                <td style={{ padding: '12px 15px', fontSize: '14px' }}>{pigment.cas}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px', textAlign: 'center' }}>{renderValue(pigment.nc)}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px', textAlign: 'center' }}>{renderValue(pigment.printingInk)}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px', textAlign: 'center' }}>{renderValue(pigment.paints)}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px', textAlign: 'center' }}>{renderValue(pigment.plastic)}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px', textAlign: 'center' }}>{renderValue(pigment.rubber)}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px', textAlign: 'center' }}>{renderValue(pigment.textile)}</td>
                <td style={{ padding: '12px 15px', fontSize: '14px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '24px', 
                    backgroundColor: pigment.massTone,
                    borderRadius: '4px'
                  }}></div>
                </td>
                <td style={{ padding: '12px 15px', fontSize: '14px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '24px', 
                    backgroundColor: pigment.tintTone,
                    borderRadius: '4px'
                  }}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* No results message */}
      {filteredPigments.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          No pigments found matching your search.
        </div>
      )}
    <BusinessBanner/>
     
    </div>
  );
};

export default Pigment;