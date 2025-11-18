import React, { useState, useEffect } from "react";
import './Hero.css';

const Hero = () => {
    const heroText = "Welcome, To WEBKRAF";
    const chars = heroText.split('');
    const [visibleCharsCount, setVisibleCharsCount] = useState(0);

    useEffect(() => {
        if (visibleCharsCount < chars.length) {
            const timer = setTimeout(() => {
                setVisibleCharsCount(prev => prev + 1);
            }, 60);
            return () => clearTimeout(timer);
        }
    }, [visibleCharsCount, chars.length]);

    return (
        <section id="Hero" className="hero">

            {/* Grid 3D background */}
            <div className="grid-3d"></div>

            {/* Cube 3D */}
            <div className="cube3d">
                <div className="cube-face cube-front"></div>
                <div className="cube-face cube-back"></div>
                <div className="cube-face cube-right"></div>
                <div className="cube-face cube-left"></div>
                <div className="cube-face cube-top"></div>
                <div className="cube-face cube-bottom"></div>
            </div>

            {/* Ring kiri & kanan */}
            <div className="ring3d ring-left"></div>
            <div className="ring3d ring-right"></div>

            {/* Hero content */}
            <div className="hero-content">
                <h1 className="particle-text-wrapper">
                    {chars.map((char, index) => (
                        <span
                            key={index}
                            className={`char-container ${index < visibleCharsCount ? 'is-visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.03}s` }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
