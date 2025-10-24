import React from 'react';
import { Link } from 'react-router-dom';
// Chúng ta dùng lại CSS của SkillsSection cho đồng bộ
import '../components/SkillsSection.css'; 

const skills = [
  { title: 'Listening', path: '/test/listening', icon: '🎧' },
  { title: 'Speaking', path: '/test/speaking', icon: '🗣️' },
  { title: 'Reading', path: '/test/reading', icon: '📖' },
  { title: 'Writing', path: '/test/writing', icon: '✍️' }
];

function Dashboard() {
  return (
    <section className="skills-section" style={{ backgroundColor: '#fff', minHeight: '80vh' }}>
      <div className="skills-container">
        <h2 className="skills-title">Chọn Kỹ Năng Của Bạn</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            // Dùng <Link> để chuyển trang
            <Link to={skill.path} key={skill.title} className="skill-card-link-wrapper">
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-card-title">{skill.title}</h3>
                <p className="skill-card-description">
                  Bắt đầu bài thi {skill.title.toLowerCase()}.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// CSS bổ sung để <Link> không có gạch chân
const style = document.createElement('style');
style.innerHTML = `
  .skill-card-link-wrapper {
    text-decoration: none;
  }
`;
document.head.appendChild(style);

export default Dashboard;