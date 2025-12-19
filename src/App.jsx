import { useState } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import RunningText from './component/RunningText';
import AboutSection from './component/AboutSection';
import ServicesSection from './component/Services';
import OrderPage from './component/OrderPage';
import Projects from './component/Projects';
import ProcessCard from './component/ProcessCard';
import AdBanner from "./component/AdBanner";
import BenefitsCard from './component/BenefitsCard';
import Contact from './component/Contact';
import Footer from "./component/Footer";
import './App.css';

function App() {
  const [page, setPage] = useState('home'); // Halaman aktif
  const [selectedServiceOrder, setSelectedServiceOrder] = useState(null); // Service yg dipilih

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <Hero />
            <RunningText />
            <AboutSection />
            <Projects />
            <ProcessCard />
            <AdBanner />
            <BenefitsCard />
            <Contact />
          </>
        )
      case 'services':
        return <ServicesSection setPage={setPage} setSelectedServiceOrder={setSelectedServiceOrder} />
      case 'order':
        return <OrderPage serviceName={selectedServiceOrder ? selectedServiceOrder.title : ''} />
      default:
        return <Hero />
    }
  }

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
