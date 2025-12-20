import React from 'react';
import '../styles/RunningText.css';

const RunningText = () => {
    const text = "Selamat Datang Di WEBKRAF ✦ Website Kreatif ✦ ";

    return (
        <div className="running-text-container">
            <div className="marquee-content">
                {/* Kita tulis dua kali agar sambungannya tidak putus/terlihat kosong */}
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default RunningText;