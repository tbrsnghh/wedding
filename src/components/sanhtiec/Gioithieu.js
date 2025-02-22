import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './gioithieu.css';

const About = () => {
  const halls = {
    "SẢNH BẠCH LONG": {
      images: ["/images/1.png", "/images/2.png"],
      title: "SẢNH BẠCH LONG",
      description: "Sảnh Bạch Long mang phong cách sang trọng với sức chứa lên đến 400 khách.",
      features: ["Sức chứa 400 khách", "Trang trí hiện đại", "Âm thanh ánh sáng tối tân"]
    },
    "SẢNH KIM LONG": {
      images: ["/images/anh1.jpg","/images/hero-bg.jpg"],
      title: "SẢNH KIM LONG",
      description: "Sảnh Kim Long nổi bật với thiết kế tinh tế, phù hợp cho các buổi tiệc sang trọng.",
      features: ["Sức chứa 450 khách", "Không gian rộng rãi", "Trang trí theo yêu cầu"]
    },
    "SẢNH HỒNG LONG": {
      images: [
        "https://storage.googleapis.com/a1aa/image/honglong.jpg",
        "https://storage.googleapis.com/a1aa/image/honglong2.jpg"
      ],
      title: "SẢNH HỒNG LONG",
      description: "Sảnh Hồng Long mang phong cách ấm cúng, tạo không khí thân thiện và gần gũi.",
      features: ["Sức chứa 300 khách", "Phong cách ấm cúng", "Âm thanh chất lượng cao"]
    },
    "SẢNH KIM HỒNG LONG": {
      images: [
        "https://storage.googleapis.com/a1aa/image/kimhonglong.jpg",
        "https://storage.googleapis.com/a1aa/image/kimhonglong2.jpg"
      ],
      title: "SẢNH KIM HỒNG LONG",
      description: "Sảnh Kim Hồng Long kết hợp tinh hoa của hai phong cách cổ điển và hiện đại.",
      features: ["Sức chứa hơn 500 khách", "Trang trí đẳng cấp", "Không gian linh hoạt"]
    }
  };

  const [currentHall, setCurrentHall] = useState(halls["SẢNH BẠCH LONG"]);

  const handleHallClick = (hallName) => {
    setCurrentHall(halls[hallName]);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false
  };

  return (
    <div className="about-container">
      <h1 className="about-title">SẢNH TIỆC TẠI HOÀNG LONG</h1>

      <div className="hall-buttons">
        {Object.keys(halls).map((hall) => (
          <button
            key={hall}
            onClick={() => handleHallClick(hall)}
            className={`hall-button ${currentHall.title === hall ? 'active' : ''}`}
          >
            {hall}
          </button>
        ))}
      </div>

      <div className="hall-details">
        <div className="hall-slider">
          <Slider {...sliderSettings}>
            {currentHall.images.map((img, idx) => (
              <div key={idx} className="slider-image-container">
                <img src={img} alt={`${currentHall.title} ${idx + 1}`} className="hall-image" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="hall-info">
          <h2>{currentHall.title}</h2>
          <p>{currentHall.description}</p>
          <ul>
            {currentHall.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;
