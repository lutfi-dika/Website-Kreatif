import React, { useState } from "react";
import "../styles/AdBanner.css";
import promoImage from "../assets/logo_new.png";

const AdBanner = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <section className="ad-banner">
                <div className="ad-container">

                    <div className="ad-left">
                        <h2 className="ad-title">
                            Promo <span>50% OFF</span> ✨
                        </h2>

                        <p className="ad-desc">
                            Bangun website profesional dengan desain modern, cepat, dan responsif.
                            Harga hemat — kualitas premium.
                        </p>

                        <button className="ad-btn" onClick={() => setShowPopup(true)}>
                            Pesan Sekarang 🚀
                        </button>
                    </div>

                    <div className="ad-right">
                        <div className="img-wrapper">
                            <img src={promoImage} alt="Promo Banner" />
                        </div>
                    </div>

                </div>
            </section>

            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        <h2>Mulai Sekarang</h2>
                        <p>
                            Dapatkan website profesional dengan harga terjangkau.
                            Hubungi kami melalui email:
                            <br />
                            <strong>lutfiandika33@gmail.com</strong>
                        </p>

                        <button className="close-popup-btn" onClick={() => setShowPopup(false)}>
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdBanner;
