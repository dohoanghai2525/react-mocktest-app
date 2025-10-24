import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx'; // <-- 1. Import Footer
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import TestPage from './pages/TestPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ResultsPage from './pages/ResultsPage.jsx'; 
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Giữ nguyên state completedSkills
  const [completedSkills, setCompletedSkills] = useState({
    listening: false,
    reading: false,
    writing: false,
    speaking: false,
  });

  // Giữ nguyên các hàm xử lý
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCompletedSkills({ listening: false, reading: false, writing: false, speaking: false });
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleCompleteSkill = (skillName) => {
    if (completedSkills.hasOwnProperty(skillName)) {
      setCompletedSkills(prev => ({ ...prev, [skillName]: true }));
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <main className="app-container">
          <Routes>
            {/* Giữ nguyên các Route */}
             <Route path="/" element={<HomePage />} />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <AuthPage onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard completedSkills={completedSkills} /> : <Navigate to="/login" />} />
            <Route path="/test/:skillName" element={isLoggedIn ? <TestPage onCompleteSkill={handleCompleteSkill} /> : <Navigate to="/login" />} />
            <Route path="/results" element={isLoggedIn ? <ResultsPage /> : <Navigate to="/login" />} />
          </Routes>
        </main>

        <Footer /> {/* <-- 2. Thêm Footer vào đây */}

      </div>
    </BrowserRouter>
  );
}

export default App;