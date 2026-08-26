import { useState } from 'react';
import { FaGlobe, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  {
    id: 'frontend',
    icon: <FaGlobe />,
    title: 'Frontend Development',
    description: 'Membangun website modern, responsif, dan cepat dengan teknologi terkini.',
    features: ['React / Vite', 'Responsive Design', 'SEO Optimized', 'Performa Tinggi'],
  },
  {
    id: 'uiux',
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang menarik, intuitif, dan mudah dipahami pengguna.',
    features: ['Wireframe & Prototyping', 'User Research', 'Design System', 'Figma Design'],
  },
  {
    id: 'poster',
    icon: <FaBullhorn />,
    title: 'Poster Digital',
    description: 'Poster digital kreatif dan profesional untuk kebutuhan marketing Anda.',
    features: ['Social Media Post', 'Banner Ads', 'Brand Collateral', 'Print Ready'],
  },
];

const Services = ({ onOrderClick }) => {
  const [selected, setSelected] = useState(null);

  const handleOrder = () => {
    onOrderClick('order-page', selected);
    setSelected(null);
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <span className="section-label">Layanan Kami</span>
        <h2 className="services-title">
          Solusi Digital <span>Terlengkap</span>
        </h2>
        <p className="services-subtitle">
          Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda
          tampil profesional dan bersaing di pasar modern.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => setSelected(service)}
            >
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <ul className="service-card-features">
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="service-card-action">
                Pelajari Lebih Lanjut
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="service-modal-overlay" onClick={() => setSelected(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={() => setSelected(null)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="service-modal-icon">{selected.icon}</div>
            <h3 className="service-modal-title">{selected.title}</h3>
            <p className="service-modal-desc">{selected.description}</p>
            <div className="service-modal-features">
              {selected.features.map((f, i) => (
                <span key={i} className="service-modal-tag">{f}</span>
              ))}
            </div>
            <div className="service-modal-actions">
              <button className="service-modal-btn primary" onClick={handleOrder}>
                Pesan Sekarang
              </button>
              <button className="service-modal-btn secondary" onClick={() => setSelected(null)}>
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
