import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ContactUs from './pages/Contactus';
import PigmentsPage from './pages/Pigment';
import Pharmaceutical from './pages/Pharmaceutical';
import ConstructionChemicals from './pages/ConstructionChemicals';
import ProductPackaging from './pages/ProductPackaging';
import Dyes from './pages/Dyes';
import AboutUs from './components/aboutcompany';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path='/products/01 ' element={<PigmentsPage/>}/>
        <Route path='/products/03' element={<Pharmaceutical/>}/>
        <Route path='/products/04' element={<ConstructionChemicals/>}/>
        <Route path='/products/05' element={<ProductPackaging/>}/>
        <Route path='/products/02' element={<Dyes/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
