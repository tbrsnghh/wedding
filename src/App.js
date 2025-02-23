import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; 
import Header from './components/header/Header';
import HeroSection from './components/herosection/HeroSection';
import Gioithieu from './components/sanhtiec/Gioithieu';
import Thucdon from './components/thucdon/Thucdon';
import Trangchu from './components/trangchu/Trangchu';

import Lienhe from './components/lienhe/Lienhe';
import Footer from './components/footer/Footer';

function App() {
  const location = useLocation(); 

  return (
    <>
      <Header />
      
      
      {location.pathname === "/" && <HeroSection />}
      <div style={{ marginTop: location.pathname !== "/" ? "100px" : "0" }}></div>
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/lienhe" element={<Lienhe />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/thucdon" element={<Thucdon />} />
        <Route path="/lienhe" element={<Lienhe />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
