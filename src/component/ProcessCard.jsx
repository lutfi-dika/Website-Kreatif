import React from "react";
import "../styles/ProcessCard.css";

const processData = [
    {
        mainTitle: "Pembuatan Produk",
        steps: [
            "Melakukan riset mendalam dan analisis kebutuhan klien.",
            "Menyusun perencanaan produk terstruktur dengan site map.",
            "Merancang tampilan website modern & user-friendly (UI/UX).",
            "Mengubah desain menjadi produk digital yang fungsional.",
            "Revisi sesuai feedback klien untuk menyempurnakan website.",
        ],
        icon: "🛠️",
    },
    {
        mainTitle: "Pembelian Produk",
        steps: [
            "Konsultasi dengan klien untuk memahami kebutuhan & tujuan.",
            "Proses pembayaran aman & transparan (Bank / E-Wallet).",
            "Pengemasan & pengiriman produk digital secara rapi.",
            "Konfirmasi penerimaan & memastikan semua akses diberikan.",
        ],
        icon: "📦",
    },
];

const ProcessCard = () => {
    return (
        <section id="process" className="process-section">
            <div className="container">
                <h2 className="process-title">
                    Proses <span>Pembuatan</span> & <span>Pembelian</span>
                </h2>

                <p className="process-subtitle">
                    Alur kerja profesional & terstruktur untuk memastikan layanan berkualitas tinggi.
                </p>
            </div>

            <div className="process-cards">
                {processData.map((item, index) => (
                    <div key={index} className="process-card">
                        <div className="process-icon-wrapper">
                            <span className="process-icon">{item.icon}</span>
                        </div>

                        <h3 className="process-card-title">{item.mainTitle}</h3>

                        <ul className="process-steps">
                            {item.steps.map((step, i) => (
                                <li key={i} className="step-item">
                                    • {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessCard;
