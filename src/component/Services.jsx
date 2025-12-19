import React, { useState } from 'react';
import '../styles/Services.css';

const services = [
    {
        title: 'Front End Development',
        description: 'Membangun website modern, responsif, dan cepat.',
        icon: '🌐',
        popup: 'Ingin memesan layanan Front End Development? Hubungi kami melalui email: lutfiandika33@gmail.com'
    },
    {
        title: 'UI/UX Design',
        description: 'Desain antarmuka yang menarik & mudah dipahami.',
        icon: '🎨',
        popup: 'Tertarik desain UI/UX? Kontak kami: lutfiandika33@gmail.com'
    },
    {
        title: 'Poster Digital',
        description: 'Poster digital kreatif dan profesional.',
        icon: '🚀',
        popup: 'Pesan layanan Poster Digital via email: lutfiandika33@gmail.com'
    },
];

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="Services" className="services-section">
            <div className="container">
                <h2 className="section-title">
                    Our<span> Services</span>
                </h2>
            </div>

            <div className="services-container">
                {services.map((service, index) => (
                    <div
                        className="service-card"
                        key={index}
                        onClick={() => setSelectedService(service)}
                    >
                        <div className="icon-wrapper">
                            <span className="service-icon">{service.icon}</span>
                        </div>
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
