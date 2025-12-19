import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <nav className={`nav ${open ? "active" : ""}`}>
            <div className="nav-container">

                {/* Logo */}
                <a href="#Hero" className="logo">
                    WEB<span>KRAF</span>
                </a>

                {/* Mobile Button */}
                <div className={`menu-btn ${open ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${open ? "show" : ""}`}>
                    <li><a href="#Hero">Beranda</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#process">Proses</a></li>
                    <li>
                        <a href="#Contact" className="cta">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
