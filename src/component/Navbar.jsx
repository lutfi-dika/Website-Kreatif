import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* Logo */}
                <a href="#Hero" className="logo">
                    WEB<span>KRAF</span>
                </a>

                {/* Mobile Menu Button */}
                <div className={`menu-btn ${open ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Nav Links */}
                <ul className={`nav-links ${open ? "show" : ""}`}>
                    <li><a href="#Hero">Beranda</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Projects">Project</a></li>
                    <li><a href="#Process">Proses</a></li>
                    <li><a href="#Contact" className="cta">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
