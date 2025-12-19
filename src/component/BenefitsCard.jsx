import React from "react";
import "../styles/BenefitsCard.css";
import { FaCheckCircle, FaClock, FaThumbsUp, FaDollarSign } from "react-icons/fa";

const benefits = [
    {
        icon: <FaCheckCircle />,
        title: "Kualitas Terjamin",
        description: "Setiap proyek dibuat dengan standar tinggi dan hasil yang konsisten."
    },
    {
        icon: <FaClock />,
        title: "Waktu Cepat",
        description: "Pengerjaan cepat, efisien, dan tetap mengutamakan kualitas."
    },
    {
        icon: <FaThumbsUp />,
        title: "Pelayanan Profesional",
        description: "Tim kami berpengalaman, responsif, dan fokus pada kepuasan klien."
    },
    {
        icon: <FaDollarSign />,
        title: "Harga Terjangkau",
        description: "Biaya transparan, kompetitif, dan fleksibel sesuai kebutuhan."
    }
];

const BenefitsCard = () => {
    return (
        <section className="benefits-section">
            <div className="container">
                <h2 className="benefits-title">
                    Kenapa Harus <span>WEBKRAF?</span>
                </h2>
                <p className="benefits-subtitle">
                    Kami hadir dengan layanan profesional yang dirancang untuk mendukung bisnis dan brand Anda berkembang.
                </p>
            </div>

            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div className="benefit-card" key={index}>
                        <div className="benefit-icon-wrapper">
                            <span className="benefit-icon">{benefit.icon}</span>
                        </div>
                        <h3 className="benefit-name">{benefit.title}</h3>
                        <p className="benefit-desc">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsCard;
    