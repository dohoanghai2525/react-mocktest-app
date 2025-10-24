import React from 'react';
import './Footer.css'; // We'll create this CSS file next

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer-pro">
      <div className="footer-container">
        <div className="footer-section">
          <h4>LearnPro</h4>
          <p>Your partner in conquering language skills.</p>
          {/* You can add social media icons here later */}
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li> 
            <li><a href="/about">About Us</a></li> 
            <li><a href="/contact">Contact</a></li> 
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} LearnPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;