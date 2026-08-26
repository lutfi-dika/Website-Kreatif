import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Mengirim...');

    try {
      const response = await fetch('https://formspree.io/f/mzzknglv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Pesan berhasil dikirim!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Terjadi kesalahan, silakan coba lagi.');
      }
    } catch {
      setStatus('Terjadi kesalahan, silakan coba lagi.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-label">Hubungi Kami</span>
          <h2 className="contact-title">
            Mari Diskusikan <span>Proyek Anda</span>
          </h2>
          <p className="contact-desc">
            Siap membangun website impian? Hubungi kami untuk konsultasi
            gratis dan dapatkan penawaran terbaik.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 5l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">lutfiandika33@gmail.com</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 3h6l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v6a2 2 0 01-2 2C8 19 1 10 1 4a2 2 0 012-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-detail-label">WhatsApp</span>
                <span className="contact-detail-value">0851-3597-7841</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan email Anda"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="subject">Subjek</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Perihal pesan Anda"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Ceritakan tentang proyek Anda..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            <FaPaperPlane />
            Kirim Pesan
          </button>

          {status && (
            <p className={`contact-status ${status.includes('berhasil') ? 'success' : 'error'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
