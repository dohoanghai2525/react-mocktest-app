import React from 'react';
import './Hero.css'; // File CSS chúng ta sẽ tạo ngay sau đây

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container">
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
        <button className="hero-button">Bắt đầu học ngay</button>
      </div>
    </div>
  );
}

export default Hero;