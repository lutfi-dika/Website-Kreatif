import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import RunningText from './component/RunningText'
import AboutSection from './component/AboutSection'
import Services from './component/Services'
import OrderPage from './component/OrderPage'
import Projects from './component/Projects'
import ProcessCard from './component/ProcessCard'
import AdBanner from "./component/AdBanner"
import BenefitsCard from './component/BenefitsCard'
import Footer from "./component/Footer"
import Contact from "./component/Contact"
import './App.css'

function App() {
  // 1. State untuk menentukan halaman ('home' atau 'order')
  const [view, setView] = useState('home');
  // 2. State untuk menyimpan data service yang dipilih
  const [selectedService, setSelectedService] = useState(null);

  // Fungsi navigasi
  const navigateToOrder = (page, serviceData) => {
    setView(page);
    setSelectedService(serviceData);
    window.scrollTo(0, 0); // Scroll ke atas saat pindah halaman
  };

  return (
    <>
      <Navbar />

      {/* Jika view adalah 'home', tampilkan semua komponen utama */}
      {view === 'home' ? (
        <>
          <Hero />
          <RunningText />
          <AboutSection />
          {/* Kirim fungsi navigasi ke komponen Services */}
          <Services onOrderClick={navigateToOrder} />
          <Projects />
          <ProcessCard />
          <AdBanner />
          <BenefitsCard />
          <Contact />
        </>
      ) : (
        /* Jika view adalah 'order-page', hanya tampilkan OrderPage */
        <OrderPage
          serviceData={selectedService}
          onBack={() => setView('home')}
        />
      )}

      <Footer />
    </>
  )
}

export default App