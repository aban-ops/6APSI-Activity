import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import './pages/LoginPage.css'; 

function App() {
  const [view, setView] = useState('landing');

  return (
    <>
      {view === 'landing' && <LandingPage onStart={() => setView('login')} />}
      {view === 'login' && <LoginPage onLogin={() => setView('home')} />}
      {view === 'home' && (
        <div className="login-wrapper">
          <div className="login-title">Welcome</div>
          <div className="loggedin-content">
            <p>You're logged in!</p>
            <button className="logout-button" onClick={() => setView('landing')}>
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;