import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* Logo */}
                <div className="logo">
                    WEB<span>KRAF</span>
                </div>

                {/* Menu Button Mobile */}
                <div className="menu-btn" onClick={() => setOpen(!open)}>
                    <span className={open ? "open" : ""}></span>
                    <span className={open ? "open" : ""}></span>
                    <span className={open ? "open" : ""}></span>
                </div>

                {/* Nav Links */}
                <ul className={`nav-links ${open ? "show" : ""}`}>
                    <li><a href="#Hero">Beranda</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#proces">Proses</a></li>
                    <li><a href="#" className="cta">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
