import React from 'react';
import "./header.css";
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {
  
  return (
    <header className="header">
      <div className="logo">Nhà Hàng Tiệc Cưới Đông Á</div>
      <nav>
        <ul>
          <li><a href="#home">Trang Chủ</a></li>
          <li><a href="#about">Giới Thiệu</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#capacity">Sức Chứa</a></li>
          <li><a href="#services">Dịch Vụ</a></li>
          <li><a href="#contact">Liên Hệ</a></li>
          <li><Link to="/login">Đăng nhập</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;