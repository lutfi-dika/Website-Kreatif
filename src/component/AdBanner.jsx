import { useState } from 'react';
import LogoPromo from "../assets/logo_Webkraf-removebg-preview.png";
import "../styles/AdBanner.css";

const AdBanner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="ad-banner">
        <div className="ad-banner-container">
          <div className="ad-banner-content">
            <span className="ad-banner-badge">Promo Spesial</span>
            <h2 className="ad-banner-title">
              Dapatkan Website Profesional <span>50% OFF</span>
            </h2>
            <p className="ad-banner-desc">
              Bangun website impian Anda dengan harga hemat. Kualitas premium,
              desain modern, dan performa tinggi.
            </p>
            <div className="ad-banner-buttons">
              <button className="ad-banner-btn primary" onClick={() => setShowModal(true)}>
                Pesan Sekarang
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#contact" className="ad-banner-btn secondary">
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="ad-banner-visual">
            <img src={LogoPromo} alt="Webkraf Promo" />
            <div className="ad-banner-visual-glow" />
          </div>
        </div>
      </section>

      {showModal && (
        <div className="ad-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="ad-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="ad-modal-title">Promo 50% OFF</h3>
            <p className="ad-modal-desc">
              Dapatkan harga spesial untuk pembuatan website profesional.
              Hubungi kami melalui email untuk informasi lebih lanjut.
            </p>
            <p className="ad-modal-email">lutfiandika33@gmail.com</p>
            <button className="ad-modal-btn" onClick={() => setShowModal(false)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdBanner;
