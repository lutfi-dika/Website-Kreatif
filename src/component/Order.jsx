import React, { useState } from "react";
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import RunningText from './component/RunningText';
import AboutSection from './component/AboutSection';
import Services from './component/Services';
import Projects from './component/Projects';
import ProcessCard from './component/ProcessCard';
import AdBanner from "./component/AdBanner";
import BenefitsCard from './component/BenefitsCard';
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import OrderPage from "./component/Order";
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState("home"); // state untuk halaman

    const handleNavigateToOrder = () => {
        setCurrentPage("order"); // pindah ke order
        window.scrollTo(0, 0);   // scroll ke atas
    };

    return (
        <>
            {currentPage === "home" && (
                <>
                    <Navbar />
                    <Hero />
                    <RunningText />
                    <AboutSection />
                    {/* Services di sini, kita kirim props untuk pindah ke order */}
                    <Services goToOrder={handleNavigateToOrder} />
                    <Projects />
                    <ProcessCard />
                    <AdBanner />
                    <BenefitsCard />
                    <Contact />
                    <Footer />
                </>
            )}

            {currentPage === "order" && (
                <OrderPage goBack={() => setCurrentPage("home")} />
            )}
        </>
    );
}

export default App;
