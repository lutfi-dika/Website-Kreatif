import React from "react";
import LogoAbout from "../assets/logo_new.png";
import "./AboutSection.css";

const AboutSection = () => {
    return (
        <section id="About" className="about-section">
            {/* Floating shapes */}
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
            <div className="shape shape4"></div>

            <div className="container">
                <div className="about-image">
                    <img src={LogoAbout} alt="Our Services" />
                </div>
                <div className="about-text">
                    <h2>About <span>Our Services</span></h2>
                    <p>
                        Kami menyediakan layanan profesional untuk membangun solusi digital
                        berkualitas tinggi. Setiap proyek fokus pada pengalaman pengguna,
                        teknologi modern, dan hasil yang memuaskan.
                    </p>
                    <p>
                        Dengan tim ahli dan pendekatan kreatif, kami siap membantu bisnis Anda
                        berkembang melalui website interaktif, aplikasi responsif, dan strategi
                        digital inovatif.
                    </p>

                    <div className="services-cards">
                        <div className="card">
                            <h3>Front end Development</h3>
                            <p>Membangun website responsif, modern, dan user-friendly.</p>
                        </div>
                        <div className="card">
                            <h3>UI/UX Design</h3>
                            <p>Mendesain interface yang menarik dan pengalaman pengguna optimal.</p>
                        </div>
                        <div className="card">
                            <h3>Poster Digital</h3>
                            <p>lusi poster digital strategis untuk meningkatkan pertumbuhan bisnis.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
