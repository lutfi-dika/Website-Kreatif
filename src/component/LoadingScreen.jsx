import { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    const fadeTimer = setTimeout(() => setFadeOut(true), 2400);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-glow" />
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-logo-w">W</span>
          <span className="loading-logo-rest">EBKRAF</span>
        </div>
        <div className="loading-bar-track">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="loading-text">
          {progress < 100 ? 'Loading experience...' : 'Welcome'}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
