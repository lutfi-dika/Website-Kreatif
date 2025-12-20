import React from "react";
import LogoAbout from "../assets/logo_Webkraf-removebg-preview.png";
import "../styles/AboutSection.css";

const AboutSection = () => {
    return (
        <section id="About" className="about-section">

            {/* Floating shapes */}
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
            <div className="shape shape4"></div>

            <div className="container">

                <div className="about-text">
                    <h2>
                        About <span>Our Services</span>
                    </h2>

                    <p>
                        Kami menyediakan layanan digital profesional dengan fokus pada
                        kualitas, teknologi modern, dan pengalaman pengguna terbaik.
                    </p>

                    <p>
                        Dengan tim berpengalaman, kami membantu bisnis Anda berkembang melalui
                        website interaktif, desain UI/UX elegan, serta strategi digital yang inovatif.
                    </p>

                    <div className="services-cards">

                        <div className="card glow-card">
                            <div className="icon-circle">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3>Frontend Development</h3>
                            <p>Membangun website responsif & modern dengan performa terbaik.</p>
                        </div>

                        <div className="card glow-card">
                            <div className="icon-circle">
                                <i className="fas fa-pencil-ruler"></i>
                            </div>
                            <h3>UI/UX Design</h3>
                            <p>Desain estetis & fungsional dengan pendekatan user-centered.</p>
                        </div>

                        <div className="card glow-card">
                            <div className="icon-circle">
                                <i className="fas fa-images"></i>
                            </div>
                            <h3>Poster Digital</h3>
                            <p>Visual promosi digital kreatif untuk branding & marketing.</p>
                        </div>

                    </div>
                </div>

                <div className="about-image">
                    <div className="img-shadow-wrapper">
                        <img src={LogoAbout} alt="Our Services" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
