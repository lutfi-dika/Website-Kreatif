import React from "react";
import "./BenefitsCard.css";
import { FaCheckCircle, FaClock, FaThumbsUp, FaDollarSign } from "react-icons/fa";

const benefits = [
    {
        icon: <FaCheckCircle />,
        title: "Kualitas Terjamin",
        description: "Kami memberikan layanan dengan kualitas terbaik untuk setiap proyek Anda."
    },
    {
        icon: <FaClock />,
        title: "Waktu Cepat",
        description: "Proses pengerjaan cepat tanpa mengorbankan kualitas layanan."
    },
    {
        icon: <FaThumbsUp />,
        title: "Pelayanan Profesional",
        description: "Tim ahli siap membantu dengan penuh dedikasi dan profesionalisme."
    },
    {
        icon: <FaDollarSign />,
        title: "Harga Terjangkau",
        description: "Layanan premium dengan harga yang kompetitif dan transparan."
    }
];

const BenefitsCard = () => {
    return (
        <section className="benefits-section">
            <h2 className="benefits-title">Keuntungan Memilih Layanan Kami</h2>
            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div className="benefit-card" key={index}>
                        <div className="benefit-icon">{benefit.icon}</div>
                        <h3 className="benefit-name">{benefit.title}</h3>
                        <p className="benefit-desc">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsCard;
