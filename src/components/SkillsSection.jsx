import React from 'react';
import './SkillsSection.css'; // File CSS cho 4 kỹ năng

// Chúng ta sẽ tạo một mảng chứa thông tin cho 4 kỹ năng
const skills = [
  {
    title: 'Listening',
    description: 'Luyện nghe chuyên sâu với các bài giảng từ cơ bản đến nâng cao.',
    icon: '🎧' // Bạn có thể thay bằng icon thật sau
  },
  {
    title: 'Speaking',
    description: 'Thực hành phát âm, giao tiếp và phản xạ tự nhiên với AI.',
    icon: '🗣️'
  },
  {
    title: 'Reading',
    description: 'Cải thiện tốc độ đọc và kỹ năng phân tích văn bản học thuật.',
    icon: '📖'
  },
  {
    title: 'Writing',
    description: 'Học cách viết luận, email và báo cáo một cách chuyên nghiệp.',
    icon: '✍️'
  }
];

function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Chinh Phục 4 Kỹ Năng</h2>
        <div className="skills-grid">
          {/* Dùng .map() để tạo 4 thẻ card từ mảng 'skills' */}
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-card-title">{skill.title}</h3>
              <p className="skill-card-description">{skill.description}</p>
              <a href="#" className="skill-card-link">
                Học ngay &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;