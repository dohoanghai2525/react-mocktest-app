import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Corrected paths for Login and Register components
import Login from '../components/Login.jsx'; 
import Register from '../components/Register.jsx';

function AuthPage({ onLoginSuccess }) {
  const location = useLocation();
  const [currentForm, setCurrentForm] = useState('login');

  useEffect(() => {
    if (location.hash === '#register') {
      setCurrentForm('register');
    } else {
      setCurrentForm('login');
    }
  }, [location]);

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