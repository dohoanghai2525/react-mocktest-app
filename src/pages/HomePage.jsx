import React from 'react';

// Đảm bảo import CẢ HAI component
import Hero from '../components/Hero.jsx'; 
import SkillsSection from '../components/SkillsSection.jsx';

function HomePage() {
  return (
    // Hiển thị CẢ HAI component
    <>
      <Hero />
      <SkillsSection /> 
    </>
  );
}

export default HomePage;