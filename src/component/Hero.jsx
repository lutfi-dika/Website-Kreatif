import React from "react";
import "../styles/Hero.css";

const Hero = () => {
    return (
        <section className="hero">

            <div className="hero-content">
                <h1>
                    Selamat Datang <br /> di WEB<span>KRAF</span>
                </h1>
                <p>
                    Kami menyediakan layanan branding, website, UI/UX, dan poster digital untuk memperkuat identitas bisnis Anda.
                </p>

                <button className="cta-btn">Mulai Sekarang</button>
            </div>

            <svg
                className="wave"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#fff"
                    d="M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,138.7C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96V320H0Z"
                ></path>
            </svg>
        </section>
    );
};

export default Hero;
