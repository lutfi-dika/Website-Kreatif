import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 30);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="loading-container">
            {/* Efek cahaya di background */}
            <div className="bg-glow"></div>

            <div className="loader-content">
                <h1 className="logo-text">
                    WEBKRAF<span className="dot"></span>
                </h1>

                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="loading-status">
                    {progress < 100 ? `Loading... ${progress}%` : "Welcome"}
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;