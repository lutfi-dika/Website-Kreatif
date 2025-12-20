import { useState, useEffect } from 'react' // Tambahkan useEffect
import LoadingScreen from './component/LoadingScreen'
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
  // 1. State untuk Loading Screen
  const [isLoading, setIsLoading] = useState(true);

  // State navigasi yang sudah ada
  const [view, setView] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  // 2. Logika untuk menghilangkan loading screen
  useEffect(() => {
    // Kamu bisa menyesuaikan durasi ini (misal 3000ms = 3 detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Fungsi navigasi
  const navigateToOrder = (page, serviceData) => {
    setView(page);
    setSelectedService(serviceData);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* 3. Tampilkan LoadingScreen jika isLoading true */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />

          {/* Jika view adalah 'home', tampilkan semua komponen utama */}
          {view === 'home' ? (
            <>
              <Hero />
              <RunningText />
              <AboutSection />
              <Services onOrderClick={navigateToOrder} />
              <Projects />
              <ProcessCard />
              <AdBanner />
              <BenefitsCard />
              <Contact />
            </>
          ) : (
            <OrderPage
              serviceData={selectedService}
              onBack={() => setView('home')}
            />
          )}

          <Footer />
        </>
      )}
    </>
  )
}

export default App