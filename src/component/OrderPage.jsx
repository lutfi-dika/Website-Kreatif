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

        // 1. Ambil Waktu Real-time
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

        // 2. Setting Nomor WA Business (Pastikan hanya angka)
        // Contoh: 628512345678
        const phoneNumber = "6285135977841";

        // 3. Format Pesan (Lebih Rapi untuk Admin Business)
        const message =
            `*KONFIRMASI PESANAN BARU* 💼
-------------------------------------------
🗓️ *Tanggal:* ${tanggal}
🕒 *Waktu:* ${jam} WIB

👤 *Data Pelanggan:*
- *Nama:* ${formData.name}
- *Email:* ${formData.email}

🛠️ *Layanan yg Dipesan:* > *${serviceData?.title || 'Layanan Kustom'}*

📝 *Detail Proyek:* ${formData.details || 'Tidak ada detail tambahan.'}

-------------------------------------------
_Pesan ini dikirim otomatis melalui Website._`;

        // 4. Integrasi URL WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Membuka di tab baru
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
                    <p>Anda akan memesan: <strong>{serviceData?.title || 'Layanan'}</strong></p>
                </div>

                <form className="order-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Contoh: Budi Santoso"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="input-group">
                        <label>Alamat Email</label>
                        <input
                            type="email"
                            placeholder="budi@example.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="input-group">
                        <label>Detail Tambahan / Request</label>
                        <textarea
                            rows="5"
                            placeholder="Tuliskan spesifikasi atau kebutuhan khusus Anda..."
                            required
                            value={formData.details}
                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-order-btn">
                        Konfirmasi & Kirim ke WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderPage;