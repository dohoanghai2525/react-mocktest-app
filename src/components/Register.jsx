import React, { useState } from 'react';
import './Auth.css';

// Nhận 2 prop: onToggleForm và onLoginSuccess
function Register({ onToggleForm, onLoginSuccess }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang tải lại
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // --- Sửa phần giả lập ---
    console.log('Đăng ký với:', email, password);
    alert('Đăng ký thành công! Vui lòng đăng nhập.'); // 1. Hiện thông báo
    // Không gọi onLoginSuccess() nữa
    onToggleForm('login'); // <-- THAY BẰNG DÒNG NÀY ĐỂ CHUYỂN VỀ LOGIN
    // -------------------------
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Đăng ký</button>
        <p className="toggle-link">
          Đã có tài khoản?{' '}
          <a href="#" onClick={() => onToggleForm('login')}>
            Đăng nhập
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;