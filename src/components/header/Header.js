import React from 'react';
import { Link } from "react-router-dom"; 
import "./header.css";


const Header = () => {
    return (
        <nav className="navbar">
           <Link to="/" className="nav-logo">
               <img src="/images/2.png" alt="Nhà Hàng Tiệc Cưới Đông Á" />
           </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/Gioithieu" className="nav-link">SẢNH TIỆC</Link>
            </li>
            <li>
              <Link to="/Thucdon" className="nav-link">THỰC ĐƠN</Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">THƯ VIỆN ẢNH</Link>
            </li>
            <li>
              <Link to="/sanpham" className="nav-link">ĐẶT LỊCH</Link>
            </li>
            <li>
              <Link to="/Lienhe" className="nav-link">LIÊN HỆ</Link>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">VN ▼</a>
            </li>
          </ul>
        </nav>
    );
};

export default Header;
