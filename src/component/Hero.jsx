import React from "react";
import "../styles/Hero.css";

export default function Home() {
    return (
        <>
                <section className="home" id="Hero">
                <div className="blob1"></div>
                <div className="blob2"></div>
                <div className="blob3"></div>

                {/* <div className="hero"></div> */}

                <h1>Selamat Datang Di WEB<span>KRAF</span> </h1>
                

                <button className="btn"><a href="#Services">Mulai Sekarang</a></button>
            </section>
        </>
    );
}
