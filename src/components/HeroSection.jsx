import React, { useState, useEffect } from 'react'
import { Play, ArrowRight, Heart, Users, Globe, X } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const slides = [
    {
      image: 'https://raw.githubusercontent.com/gsivakumarsap/sss100-aeity/refs/heads/main/assets/satyasai1.png',
      title: 'Celebrating 100 Years of Divine Love',
      subtitle:
        'Join millions worldwide in honoring Bhagawan Sri Sathya Sai Baba',
    },
    {
      image:
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Service to Humanity',
      subtitle: 'Experience the transformative power of selfless service',
    },
    {
      image:
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Truth and Enlightenment',
      subtitle: 'Discover the eternal teachings of love, peace, and unity',
    },
  ]

  const stats = [
    { icon: Heart, number: '100+', label: 'Years of Love' },
    { icon: Users, number: '10M+', label: 'Global Devotees' },
    { icon: Globe, number: '190+', label: 'Countries' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-saffron-300/20 rounded-full blur-xl animate-float" />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-width">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-elegant font-bold mb-6 animate-slide-up">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join millions across the globe in honoring the divine legacy of
              <span className="font-semibold text-white">
                {' '}
                Bhagawan Sri Sathya Sai Baba
              </span>
              , a beacon of universal love and selfless service.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('celebration')}
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Join the Celebration</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('donate')}
                className="btn-outline flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </button>

              <button
                onClick={() => scrollToSection('involved')}
                className="btn-outline flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Globe className="w-5 h-5" />
                <span>Explore Global Events</span>
              </button>
            </div>

            {/* Video Play Button */}
            <div className="mb-16">
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="group relative inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
              </button>
              <p className="text-white/80 mt-4">Watch the Centennial Message</p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <stat.icon className="w-8 h-8 text-saffron-300 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-saffron-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/SK9vctMWviE?autoplay=1"
                title="Sathya Sai Baba Centennial Message"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
