import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait a bit, then start fade out, then call onComplete
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // 2.5 seconds of loading

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3000); // 0.5s for fade out animation

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content-wrapper">
        {/* The user's logo */}
        <div className="loader-logo-wrapper">
          <img src="/logo.png" alt="Fami Logo" className="loader-logo" />
        </div>
        
        {/* Horizontal Line Loading Effect */}
        <div className="loader-line-container">
          <div className="loader-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
