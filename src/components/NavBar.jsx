import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Thêm useNavigate
import './NavBar.css';

// Nhận props từ App.jsx
function NavBar({ isLoggedIn, onLogout }) { 
  const navigate = useNavigate(); // Hook để chuyển trang

  const handleLogoutClick = () => {
    onLogout(); // Gọi hàm logout từ App.jsx
    navigate('/'); // Chuyển về trang chủ sau khi logout
  };

  return (
    <nav className="navbar-pro">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LearnPro
        </Link>

        <ul className="nav-menu">
          {/* Thêm link Dashboard nếu đã đăng nhập */}
          {isLoggedIn && (
             <li className="nav-item">
              <Link to="/dashboard" className="nav-link">Làm Bài</Link>
            </li>
          )}
        </ul>

        <div className="nav-button-container">
          {/* Dùng điều kiện để hiển thị nút */}
          {isLoggedIn ? (
            // Nếu đã đăng nhập -> Nút Đăng xuất
            <button onClick={handleLogoutClick} className="nav-button logout-button">
              Đăng xuất
            </button>
          ) : (
            // Nếu chưa đăng nhập -> Nút Đăng nhập
            <Link to="/login">
              <button className="nav-button">Đăng nhập / Đăng ký</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;