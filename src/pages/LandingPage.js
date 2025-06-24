// src/pages/LandingPage.js
import React from 'react';
import './LandingPage.css';

export default function LandingPage({ onStart }) {
  return (
    <div className="landing-container">
      <h1>Hello!</h1>
      <p>Welcome to our site. Please log in to continue.</p>
      <button onClick={onStart}>Login</button>
    </div>
  );
}
