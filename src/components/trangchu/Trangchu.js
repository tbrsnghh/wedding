import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import HeroSection from "../herosection/HeroSection";
import "./trangchu.css";

const TrangChu = () => {
  const [showContent, setShowContent] = useState(false);

  const handleScrollPast = useCallback(() => {
    setShowContent(prev => (prev ? prev : true));
  }, []);

  return (
    <div>
     
      <HeroSection onScrollPast={handleScrollPast} />

    
      {showContent && (
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="content-box">
            <h2 className="title">Giới thiệu</h2>
            <p className="description">
              Trung tâm Hội Nghị – Tiệc Cưới Hoàng Long có 2 chi nhánh tọa lạc tại Quận 1 và Quận Tân Bình...
            </p>
            <button className="cta-button">Tìm hiểu thêm</button>
          </div>

          <motion.div
            className="image-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://storage.googleapis.com/a1aa/image/VfNh6jVXiOXVPX-zpSv7ZvF9RUS6l1SabhlhG9RXgBw.jpg"
              alt="Ảnh giới thiệu"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default TrangChu;
