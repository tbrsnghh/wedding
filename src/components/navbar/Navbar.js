import React from "react";
import "./navbar.css"; // Import CSS thường

const Navbar = () => {
  return (
    <nav className="navbar">
       <a href="#" className="nav-logo">
    <img src="src/images/2.png" alt="Nhà Hàng Tiệc Cưới Đông Á" />
    </a>
      <ul className="nav-menu">
        {["TRANG CHỦ", "GIỚI THIỆU", "TUYỂN DỤNG", "BLOG", "SẢN PHẨM", "LIÊN HỆ"].map(
          (item, index) => (
            <li key={index}>
              <a href="#" className="nav-link">
                {item}
              </a>
            </li>
          )
        )}
        <li className="dropdown">
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
