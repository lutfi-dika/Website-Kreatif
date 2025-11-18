import React, { useState } from "react";
import "./AdBanner.css";
import promoImage from "../assets/logo_new.png"; // ganti dengan path gambar kamu

const AdBanner = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="ad-banner">
                <div className="ad-content">
                    <div className="ad-text">
                        <h2>Promo Spesial: Layanan Pembuatan Website Profesional 50% OFF!</h2>
                        <p>Daftar sekarang dan wujudkan website impianmu dengan desain modern, fungsional, dan siap pakai.</p>
                        <button className="ad-btn" onClick={handleClick}>Pesan Sekarang</button>
                    </div>
                    <div className="ad-image">
                        <img src={promoImage} alt="Promo" />
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Daftar Kursus Premium</h2>
                        <p>Dapatkan akses materi eksklusif, proyek nyata, dan mentor profesional. Promo hanya berlaku hari ini!</p>
                        <button className="close-btn" onClick={closePopup}>Tutup</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdBanner;
