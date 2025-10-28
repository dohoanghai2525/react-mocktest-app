import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Thêm useNavigate
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
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Làm Bài
              </NavLink>
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
            // Nếu chưa đăng nhập -> 2 nút
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to="/login#login">
                <button className="btn btn-secondary">Đăng nhập</button>
              </Link>
              <Link to="/login#register">
                <button className="btn btn-primary">Đăng ký</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;