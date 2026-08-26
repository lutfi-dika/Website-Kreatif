import { useEffect, useRef } from 'react';
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero-particle hero-particle-${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Digital Studio
        </div>

        <h1 className="hero-title">
          Wujudkan Website
          <br />
          <span className="hero-title-accent">Impian Bisnis</span>
          <br />
          Anda Bersama Kami
        </h1>

        <p className="hero-description">
          Webkraf Digital Studio hadir untuk membangun website profesional,
          modern, dan berkinerja tinggi yang mendorong pertumbuhan bisnis Anda.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="hero-btn-primary">
            Lihat Layanan
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#projects" className="hero-btn-secondary">
            Lihat Portfolio
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">50+</span>
            <span className="hero-stat-label">Proyek Selesai</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Kepuasan Klien</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">24/7</span>
            <span className="hero-stat-label">Dukungan</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
