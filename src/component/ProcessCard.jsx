// ProcessCard.jsx
import React from "react";
import "./ProcessCard.css";

const processData = [
    {
        mainTitle: "Pembuatan Produk",
        steps: [
            "Melakukan Riset Mendalam dan Analisis Kebutuhan Klien",
            "Menyusun Perencanaan Produk Secara Terstruktur dengan Membuat Site Map",
            "Merancang Tampilan Website yang Menarik dan User-Friendly dengan Fokus pada Desain UI/UX",
            "Mengubah Desain Website Menjadi Produk Digital yang Fungsional dengan Menggunakan Teknologi Terkini",
            "Melakukan Revisi Berdasarkan Masukan dan Umpan Balik Klien untuk Menyempurnakan Desain, Fitur, dan Kinerja Website",
        ],
        icon: "🛠️",
    },
    {
        mainTitle: "Pembelian Produk",
        steps: [
            "Melakukan Sesi Konsultasi atau Diskusi dengan Calon Klien untuk Memahami Kebutuhan, Tujuan, dan Preferensi Mereka",
            "Melaksanakan Proses Pembayaran Layanan Jasa Web Secara Aman, Transparan, dan Terstruktur Menggunakan Berbagai Metode Pembayaran yang Disepakati, Mulai dari Transfer Bank, E-Wallet, hingga Platform Pembayaran Digital",
            "Melaksanakan Proses Pengepakan dan Pengiriman Produk atau Materi Digital Secara Terstruktur, Aman, dan Rapi",
            "Melakukan Konfirmasi Penerimaan Produk atau Layanan Oleh Klien Secara Resmi dan Terverifikasi, Termasuk Memastikan Klien Mendapatkan Semua Materi, Akses, dan Dokumen Dengan Lengkap",
        ],
        icon: "📦",
    },
];

const ProcessCard = () => {
    return (
        <div id="proces" className="process-container">
            <div className="container">
                <h2 className="process-title">Proses Pembuatan & Pembelian</h2>
            </div>
            <div className="cards-wrapper">
                {processData.map((item, index) => (
                    <div key={index} className="card">
                        <div className="card-icon">{item.icon}</div>
                        <h3 className="card-title">{item.mainTitle}</h3>
                        <ul className="card-steps">
                            {item.steps.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessCard;
