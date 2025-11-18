import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-overlay">
                <div className="footer-container">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2>Webkraf</h2>
                        <p>Menghadirkan solusi digital premium untuk bisnis modern.</p>
                    </div>

                    {/* Navigation */}
                    <div className="footer-links">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="#Home">Beranda</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#projects">Projek</a></li>
                            <li><a href="#proces">Proses</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: lutfiandika33@gmail.com</p>
                    </div>

                    {/* Social Media */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://github.com/lutfi-dika" target="blank"><FaGithub /></a>
                            <a href="https://www.instagram.com/303.andika" target="blank"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>© 2025 Webkraf. All Rights Reserved. Crafted with ❤️ for professionals.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
