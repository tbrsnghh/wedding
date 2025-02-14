import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Gioithieu from "./components/Gioithieu";
import Menu from "./components/Menu";
import Capacity from "./components/Capacity";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Login from "./page/Login";
import Admin from "./admin/Admin";
import Register from "./page/Register";
import ProtectedRoute from "./admin/ProtectedRoute";
import Sidebar from "./admin/components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* khách vãng lai và user đã đăng ký */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <Gioithieu />
              <Menu />
              <Capacity />
              <Services />
              <Contact />
              <Footer />
              <Menu />
            </>
          }
        />
        {/* login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Sidebar />
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
