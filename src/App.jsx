import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import RunningText from './component/RunningText'
import AboutSection from './component/AboutSection'
import Services from './component/Services'
import Projects from './component/Projects'
import ProcessCard from './component/ProcessCard'
import AdBanner from "./component/AdBanner"
import BenefitsCard from './component/BenefitsCard'
import Footer from "./component/Footer"
import Contact from "./component/Contact"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RunningText />
      <AboutSection />
      {/* di service */}
      <Services />
      <Projects />
      <ProcessCard />
      <AdBanner />
      <BenefitsCard />
      <Contact />
      <Footer />

    </>
  )
}

export default App
