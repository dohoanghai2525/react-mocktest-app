import React, { useState } from 'react';
import './Auth.css';

// Thêm onLoginSuccess vào props
function Login({ onToggleForm, onLoginSuccess }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Đây là phần giả lập đăng nhập ---
    console.log('Đăng nhập với:', email, password);
    // Trong ứng dụng thật, bạn sẽ gọi API ở đây để kiểm tra
    // Nếu thành công thì gọi onLoginSuccess()
    alert('Đăng nhập thành công! (Giả lập)'); 
    onLoginSuccess(); // <-- GỌI HÀM NÀY KHI ĐĂNG NHẬP THÀNH CÔNG
    // ---------------------------------
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập</h2>
        <p className="auth-subtitle">Chào mừng bạn trở lại. Vui lòng nhập thông tin.</p>
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
        <button type="submit" className="auth-button">Đăng nhập</button>
        <p className="toggle-link">
          Chưa có tài khoản?{' '}
          <a href="#" onClick={() => onToggleForm('register')}>
            Đăng ký ngay
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;