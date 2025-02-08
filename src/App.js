import React from 'react';
import {Routes, Route,  } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Gioithieu from './components/Gioithieu';
import Menu from './components/Menu';
import Capacity from './components/Capacity';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Gioithieu/>
      <Menu />
      <Capacity />  
      <Services />
      <Contact />
      <Footer />

      <Menu/>
    </div>
  );
}


export default App;