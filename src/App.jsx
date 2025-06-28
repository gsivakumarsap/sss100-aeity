// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutVision from './components/AboutVision.jsx'
import CelebrationHighlights from './components/CelebrationHighlights.jsx'
import GetInvolved from './components/GetInvolved.jsx'
import DonationSection from './components/DonationSection.jsx'
import MediaGallery from './components/MediaGallery.jsx'
import Footer from './components/Footer.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import DigitalPlatform from './components/DigitalPlatforms.jsx'
import Marketplace from './components/marketplace/Marketplace.jsx'
import Ebazaar from './components/ebazaar/Ebazaar.jsx'
import MarketProducts from './components/marketplace/MarketProducts.jsx'
import EbazaarProducts from './components/ebazaar/EbazaarProducts.jsx'
import EbazaarExplore from './components/ebazaar/EbazaarExplore.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Scroll spy for active section
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'celebration',
        'digital-platforms',
        'involved',
        'donate',
        'media',
      ]
      const currentPos = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            currentPos >= offsetTop &&
            currentPos < offsetTop + offsetHeight
          ) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <Header currentSection={currentSection} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <main>
                <section id="home">
                  <HeroSection />
                </section>
                <section id="about">
                  <div className="py-6" />
                  <AboutVision />
                </section>
                <section id="celebration">
                  <div className="py-6" />
                  <CelebrationHighlights />
                </section>
                <section id="digital-platforms">
                  <DigitalPlatform />
                </section>
                <section id="involved">
                  <div className="py-6" />
                  <GetInvolved />
                </section>
                <section id="donate">
                  <div className="py-6" />
                  <DonationSection />
                </section>
                <section id="media">
                  <div className="py-6" />
                  <MediaGallery />
                </section>
              </main>
              <Footer />
            </div>
          }
        />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/products" element={<MarketProducts />} />
        <Route exact path="/ebazaar" element={<Ebazaar />} />
        <Route path="/ebazaar/products" element={<EbazaarProducts />} />
        <Route path="/ebazaar/explore" element={<EbazaarExplore />} />
      </Routes>
    </Router>
  )
}

export default App
