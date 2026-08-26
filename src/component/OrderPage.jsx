import { useState } from 'react';
import '../styles/OrderPage.css';

const OrderPage = ({ serviceData, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const date = now.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const time = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const phoneNumber = '6285135977841';

    const message =
      `*KONFIRMASI PESANAN WEBKRAF*
-------------------------------------------
Tanggal: ${date}
Waktu: ${time} WIB

Data Pelanggan:
- Nama: ${formData.name}
- Email: ${formData.email}

Layanan: ${serviceData?.title || 'Layanan Kustom'}

Detail Proyek: ${formData.details || 'Tidak ada detail tambahan.'}

-------------------------------------------
Pesan ini dikirim melalui Website.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="order-page">
      <div className="order-card">
        <button className="order-back" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kembali ke Beranda
        </button>

        <div className="order-header">
          <h1 className="order-title">
            Konfirmasi <span>Pesanan</span>
          </h1>
          <p className="order-service-badge">
            {serviceData?.title || 'Layanan'}
          </p>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="order-field">
            <label>Nama Lengkap</label>
            <input
              type="text"
              placeholder="Contoh: Budi Santoso"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="order-field">
            <label>Alamat Email</label>
            <input
              type="email"
              placeholder="budi@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="order-field">
            <label>Detail / Request Proyek</label>
            <textarea
              rows="5"
              placeholder="Ceritakan spesifikasi atau kebutuhan khusus Anda..."
              required
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            />
          </div>

          <button type="submit" className="order-submit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
