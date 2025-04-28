import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ContactUs from './pages/Contactus';
import AboutUs from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contactus" element={<ContactUs/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
