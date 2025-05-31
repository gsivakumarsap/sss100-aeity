import React from 'react'
import { User, Building2, Heart, BookOpen, ArrowRight, Quote } from 'lucide-react'

const AboutVision = () => {
  const features = [
    {
      icon: Heart,
      title: 'Love & Compassion',
      description: 'Spreading unconditional love and compassion to all beings across the globe',
    },
    {
      icon: BookOpen,
      title: 'Education & Wisdom',
      description: 'Transforming lives through value-based education and spiritual wisdom',
    },
    {
      icon: Building2,
      title: 'Service & Community',
      description: 'Building stronger communities through selfless service and humanitarian work',
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-sacred-800 mb-6">
                A Digital Tribute to 
                <span className="text-gradient block">Spiritual Legacy</span>
              </h2>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-saffron-300" />
                <p className="text-lg text-sacred-600 leading-relaxed mb-6 pl-8">
                  This platform, envisioned by <span className="font-semibold text-saffron-600">Sivakumar G</span> and 
                  built by <span className="font-semibold text-saffron-600">AEITY Systems</span>, aims to unite 
                  devotees, alumni, and seekers under one global roof — celebrating Sri Sathya Sai Baba's 
                  divine mission of love, education, and transformation.
                </p>
              </div>

              <p className="text-sacred-600 leading-relaxed mb-8">
                Our goal is to create a global digital community of peace and transformation, 
                where the timeless teachings continue to inspire and guide millions worldwide 
                in their spiritual journey.
              </p>

              <button
                onClick={() => scrollToSection('celebration')}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Read the Visionary Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Spiritual gathering"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/50 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-saffron-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sacred-800">Sivakumar G</h4>
                    <p className="text-sm text-sacred-600">Visionary & Founder</p>
                  </div>
                </div>
                <p className="text-sm text-sacred-600">
                  "Creating digital bridges for spiritual transformation and global unity."
                </p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-saffron-100 rounded-full blur-2xl opacity-60" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-100 rounded-full blur-xl opacity-60" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-elegant font-bold text-sacred-800 mb-4">
              Core Values & Mission
            </h3>
            <p className="text-lg text-sacred-600 max-w-2xl mx-auto">
              Our platform embodies the eternal teachings and values that continue to inspire 
              millions in their journey of self-realization and service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-saffron-600" />
                </div>
                
                <h4 className="text-xl font-elegant font-semibold text-sacred-800 mb-4">
                  {feature.title}
                </h4>
                
                <p className="text-sacred-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Branding */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-saffron-50 to-orange-50 rounded-2xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Building2 className="w-8 h-8 text-saffron-600" />
            <h4 className="text-2xl font-elegant font-bold text-sacred-800">AEITY Systems</h4>
          </div>
          
          <p className="text-sacred-600 mb-6 max-w-2xl mx-auto">
            Innovating spiritually for the future. We combine cutting-edge technology with 
            timeless wisdom to create meaningful digital experiences that inspire and transform.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-sacred-500">
            <span>🌟 Spiritual Technology</span>
            <span>🌍 Global Impact</span>
            <span>💡 Innovation with Purpose</span>
            <span>❤️ Built with Love</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutVision