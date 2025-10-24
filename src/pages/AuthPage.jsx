import React, { useState } from 'react';
// Corrected paths for Login and Register components
import Login from '../components/Login.jsx'; 
import Register from '../components/Register.jsx';

function AuthPage({ onLoginSuccess }) {
  const [currentForm, setCurrentForm] = useState('login');

  const handleToggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {currentForm === 'login' ? (
        <Login onToggleForm={handleToggleForm} onLoginSuccess={onLoginSuccess} />
      ) : (
        <Register onToggleForm={handleToggleForm} onLoginSuccess={onLoginSuccess} />
      )}
    </>
  );
}

export default AuthPage;