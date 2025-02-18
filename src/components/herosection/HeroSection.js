import React, { useState, useEffect, useCallback } from "react";
import "./herosection.css";
import logo from "../../images/anhcuoi3.jpg";

const HeroSection = ({ onScrollPast }) => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = useCallback(() => {
    const threshold = window.innerHeight;
    if (window.scrollY > threshold) {
      setHidden(true);
      if (onScrollPast) {
        onScrollPast();
      }
    } else {
      setHidden(false);
    }
  }, [onScrollPast]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="hero-wrapper">
      <div className={`hero-container ${hidden ? "hidden" : ""}`}>
        <img 
          src={logo} 
          alt="Nhà Hàng Tiệc Cưới Đông Á" 
          className="hero-image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroSection;
