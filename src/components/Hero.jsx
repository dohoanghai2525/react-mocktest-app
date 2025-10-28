import React from 'react';
import './Hero.css'; // File CSS chúng ta sẽ tạo ngay sau đây

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Đồng hành cùng bạn chinh phục
            <br />
            mọi kỹ năng
          </h1>
          <p className="hero-subtitle">
            Học viện trực tuyến chuyên nghiệp với lộ trình cá nhân hóa.
            <br />
            Nền tảng học tập dành cho bạn.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="/login#register" className="btn btn-accent" style={{ textDecoration: 'none' }}>Bắt đầu học ngay</a>
            <a href="/login#login" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Đăng nhập</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;