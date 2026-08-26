import { useState, useEffect } from 'react'
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
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [view, setView] = useState('home')
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  const navigateToOrder = (page, serviceData) => {
    setView(page)
    setSelectedService(serviceData)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-wrapper">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          {view === 'home' ? (
            <main>
              <Hero />
              <RunningText />
              <AboutSection />
              <Services onOrderClick={navigateToOrder} />
              <Projects />
              <ProcessCard />
              <BenefitsCard />
              <AdBanner />
              <Contact />
            </main>
          ) : (
            <OrderPage
              serviceData={selectedService}
              onBack={() => setView('home')}
            />
          )}
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
