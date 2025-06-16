import { useState, useEffect } from 'react'
import { Menu, X, Flower2, Globe, ChevronDown } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

const Header = ({ currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('EN')

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HI', name: 'हिंदी' },
    { code: 'TE', name: 'తెలుగు' },
    { code: 'TA', name: 'தமிழ்' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
  ]

  const navItems = [
    { id: 'about', label: 'About the Vision' },
    { id: 'celebration', label: '100-Year Celebration' },
    { id: 'involved', label: 'Join Us' },
    { id: 'donate', label: 'Donate' },
    { id: 'media', label: 'Media' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'ebazaar', label: 'eBazaar' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Inside component:
  const navigate = useNavigate()

  const handleNavClick = (id) => {
    if (id === 'marketplace' || id === 'ebazaar') {
      navigate(`/${id}`)
    } else {
      scrollToSection(id)
    }
  }

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleLanguageChange = language => {
    setCurrentLanguage(language.code)
    setIsLanguageOpen(false)
    console.log(`Language changed to: ${language.name}`)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 focus:outline-none"
          >
            <div className="spiritual-glow">
              <Flower2
                className={`w-10 h-10 transition-colors duration-300 ${
                  isScrolled ? 'text-saffron-600' : 'text-white'
                }`}
              />
            </div>
            <div className="flex flex-col text-left">
              <h1
                className={`text-xl font-elegant font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-sacred-800' : 'text-white'
                }`}
              >
                SATHYA SAI 100
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-saffron-600' : 'text-white/90'
                }`}
              >
                AEITY Systems
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-medium transition-colors duration-300 hover:scale-105 ${
                  currentSection === item.id
                    ? isScrolled
                      ? 'text-saffron-600'
                      : 'text-white font-semibold'
                    : isScrolled
                      ? 'text-sacred-700 hover:text-saffron-600'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? 'text-sacred-700 hover:bg-saffron-50'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-10">
                  {languages.map(language => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className="w-full text-left px-4 py-2 text-sm text-sacred-700 hover:bg-saffron-50 hover:text-saffron-600 transition-colors"
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-sacred-700 hover:bg-saffron-50'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200">
            <div className="py-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-3 font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-saffron-600 bg-saffron-50'
                      : 'text-sacred-700 hover:text-saffron-600 hover:bg-saffron-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Click outside to close language dropdown */}
        {isLanguageOpen && (
          <div
            className="fixed inset-0 z-0"
            onClick={() => setIsLanguageOpen(false)}
          />
        )}
      </div>
    </header>
  )
}

export default Header
