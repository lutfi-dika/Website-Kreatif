import React, { useState } from 'react';
import './Services.css';

const services = [
    {
        title: 'Front End Development',
        description: 'Membuat website profesional dan responsif.',
        icon: '🌐',
        popup: 'Anda ingin memesan layanan Front End Development dari WEBKRAF? Silakan hubungi email kami di: lutfiandika33@gmail.com. Tim kami siap membantu proses pemesanan dan memberikan detail lengkap layanan.'
    },
    {
        title: 'UI/UX Design',
        description: 'Desain antarmuka yang menarik dan mudah digunakan.',
        icon: '🎨',
        popup: 'Tertarik memesan layanan UI/UX Design dari WEBKRAF? Hubungi kami melalui email: ilutfiandika33@gmail.com. Kami akan membantu Anda mendapatkan desain terbaik dan pengalaman pengguna yang optimal.'
    },
    {
        title: 'Poster Digital',
        description: 'Meningkatkan efektivitas poster digital dalam menarik perhatian audiens.',
        icon: '🚀',
        popup: 'Ingin memesan layanan Poster Digital dari WEBKRAF? Silakan kontak kami di: lutfiandika33@gmail.com. Tim kreatif kami siap membantu membuat poster digital yang menarik dan profesional.'
    },
];

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id='Services' className="services-section">
            <div className="container">
                <h2 className="section-title">
                    Services WEB<span>KRAF</span>
                </h2>
            </div>

            <div className="services-container">
                {services.map((service, index) => (
                    <div
                        className="service-card"
                        key={index}
                        onClick={() => setSelectedService(service)}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>

            {/* POPUP */}
            {selectedService && (
                <div className="popup-overlay" onClick={() => setSelectedService(null)}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedService.title}</h2>
                        <p>{selectedService.popup}</p>

                        <button className="close-btn" onClick={() => setSelectedService(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesSection;
