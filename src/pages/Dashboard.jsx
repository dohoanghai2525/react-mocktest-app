import React from 'react';
import { Link } from 'react-router-dom';
import '../components/SkillsSection.css';
import './Dashboard.css';

const skills = [
  { title: 'Listening', path: '/test/listening', icon: '🎧' },
  { title: 'Speaking', path: '/test/speaking', icon: '🗣️' },
  { title: 'Reading', path: '/test/reading', icon: '📖' },
  { title: 'Writing', path: '/test/writing', icon: '✍️' }
];

function Dashboard() {
  return (
    <section className="dashboard-section">
      <div className="skills-container">
        <h2 className="skills-title">Chọn Kỹ Năng Của Bạn</h2>
        <p className="dashboard-subtitle">Bắt đầu bài thi theo kỹ năng bạn muốn luyện tập.</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <Link to={skill.path} key={skill.title} className="skill-card-link-wrapper">
              <div className="skill-card dashboard-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-card-title">{skill.title}</h3>
                <p className="skill-card-description">
                  Bắt đầu bài thi {skill.title.toLowerCase()}.
                </p>
                <div className="skill-card-actions">
                  <span className="skill-card-hint">Khoảng 15-60 phút</span>
                  <span className="spacer" />
                  <button className="btn btn-primary skill-cta" type="button">Vào thi</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;