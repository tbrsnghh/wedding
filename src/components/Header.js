import React, { useEffect } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/authSlice";

const Header = () => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Gọi getMe() nếu có token mà chưa có user
  useEffect(() => {
    if (token && !user) {
      dispatch(getMe());
    }
  }, [token, user, dispatch]);

  // ✅ Xử lý đăng xuất
  const handleLogout = () => {
    dispatch(logout());
    // navigate("/login"); 
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="logo">Nhà Hàng Tiệc Cưới Đông Á</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li>
            <Link to="/about">Giới Thiệu</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/capacity">Sức Chứa</Link>
          </li>
          <li>
            <Link to="/services">Dịch Vụ</Link>
          </li>
          <li>
            <Link to="/contact">Liên Hệ</Link>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Đăng xuất
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
