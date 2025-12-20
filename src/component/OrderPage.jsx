import React, { useState } from 'react';
import '../styles/OrderPage.css';

const OrderPage = ({ serviceData, onBack }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        details: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mengambil Tanggal dan Jam secara Real-time
        const sekarang = new Date();
        const tanggal = sekarang.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const jam = sekarang.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const phoneNumber = "628513597"; // GANTI DENGAN NOMOR WA ANDA

        // Format pesan WhatsApp yang lebih profesional
        const message =
            `*DETAIL PESANAN BARU* 🚀
-------------------------------------------
📅 *Tanggal:* ${tanggal}
⏰ *Waktu:* Pukul ${jam} WIB
👤 *Nama:* ${formData.name}
📧 *Email:* ${formData.email}
-------------------------------------------
🛠️ *Layanan:* ${serviceData?.title || 'Custom Service'}
📝 *Detail Proyek:* ${formData.details || 'Tidak ada detail tambahan.'}
-------------------------------------------
_Pesan ini dikirim otomatis dari formulir website._`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className="order-page-container">
            <div className="order-card">
                <button className="back-link" onClick={onBack}>
                    ← Kembali ke Beranda
                </button>

                <div className="order-header">
                    <h1>Konfirmasi <span>Pesanan</span></h1>
                    <p>Anda memesan layanan: <strong>{serviceData?.title || 'Layanan'}</strong></p>
                </div>

                <form className="order-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Masukkan nama Anda"
                            required
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="input-group">
                        <label>Alamat Email</label>
                        <input
                            type="email"
                            placeholder="email@contoh.com"
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="input-group">
                        <label>Detail Tambahan</label>
                        <textarea
                            rows="5"
                            placeholder="Ceritakan detail proyek atau kebutuhan Anda..."
                            required
                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-order-btn">
                        Kirim Pesanan via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderPage;