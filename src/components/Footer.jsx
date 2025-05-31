import React from 'react'
import {
  Flower2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Heart,
  Globe,
  ArrowUp,
  ExternalLink,
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'About the Vision', href: '#about' },
    { label: '100-Year Celebration', href: '#celebration' },
    { label: 'Global Events', href: '#events' },
    { label: 'Join Us', href: '#involved' },
    { label: 'Media Gallery', href: '#media' },
    { label: 'Contact Support', href: '#contact' },
  ]

  const resources = [
    { label: 'Digital Library', href: '#library' },
    { label: 'Daily Quotes', href: '#quotes' },
    { label: 'Virtual Darshan', href: '#darshan' },
    { label: 'Seva Programs', href: '#seva' },
    { label: 'Educational Courses', href: '#courses' },
    { label: 'Prayer Requests', href: '#prayers' },
  ]

  const support = [
    { label: 'Donation Center', href: '#donate' },
    { label: 'Volunteer Portal', href: '#volunteer' },
    { label: 'Technical Support', href: '#support' },
    { label: 'Accessibility', href: '#accessibility' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const globalCenters = [
    { city: 'Prasanthi Nilayam', country: 'India', timezone: 'IST' },
    { city: 'Los Angeles', country: 'USA', timezone: 'PST' },
    { city: 'London', country: 'UK', timezone: 'GMT' },
    { city: 'Sydney', country: 'Australia', timezone: 'AEDT' },
    { city: 'Toronto', country: 'Canada', timezone: 'EST' },
    { city: 'São Paulo', country: 'Brazil', timezone: 'BRT' },
  ]

  return (
    <footer className="bg-gradient-to-br from-sacred-900 to-sacred-800 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand & Mission */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="spiritual-glow">
                  <Flower2 className="w-10 h-10 text-saffron-400" />
                </div>
                <div>
                  <h3 className="text-xl font-elegant font-bold">
                    SATHYA SAI 100
                  </h3>
                  <p className="text-sm text-white/70">AEITY Systems</p>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed mb-6">
                Celebrating 100 years of love, service, and truth. Join millions
                worldwide in honoring the divine legacy of Bhagawan Sri Sathya
                Sai Baba.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <Globe className="w-4 h-4 text-saffron-400" />
                  <span>190+ Countries Connected</span>
                </div>

                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <Heart className="w-4 h-4 text-saffron-400" />
                  <span>10M+ Global Community</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-saffron-300">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-saffron-300 transition-colors duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-saffron-300">
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-white/70 hover:text-saffron-300 transition-colors duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {resource.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-saffron-300">
                Support & Legal
              </h4>
              <ul className="space-y-3 mb-6">
                {support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-saffron-300 transition-colors duration-300 text-sm flex items-center space-x-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <Mail className="w-4 h-4 text-saffron-400" />
                  <span>support@sathyasai100.org</span>
                </div>

                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 text-saffron-400" />
                  <span>+91-8555-276-729</span>
                </div>

                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-saffron-400" />
                  <span>Prasanthi Nilayam, AP, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Global Centers */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <h4 className="text-lg font-semibold mb-6 text-saffron-300 text-center">
              Global Celebration Centers
            </h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {globalCenters.map((center, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="font-medium text-white">{center.city}</div>
                  <div className="text-sm text-white/60">{center.country}</div>
                  <div className="text-xs text-saffron-400 mt-1">
                    {center.timezone}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-saffron-600 to-orange-600 rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-elegant font-bold text-white mb-2">
                Stay Connected with Divine Wisdom
              </h4>
              <p className="text-white/90">
                Receive daily inspiration, event updates, and spiritual
                teachings
              </p>
            </div>

            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-saffron-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>

            <p className="text-center text-white/80 text-xs mt-4">
              Join 500,000+ subscribers • Unsubscribe anytime • Privacy
              protected
            </p>
          </div>

          {/* Social Media & Bottom Info */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-white/70 text-sm font-medium">
                  Follow Us:
                </span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Language & Accessibility */}
              <div className="flex items-center space-x-6 text-sm text-white/70">
                <a
                  href="#"
                  className="hover:text-saffron-300 transition-colors flex items-center space-x-1"
                >
                  <Globe className="w-4 h-4" />
                  <span>Language: English</span>
                </a>

                <a
                  href="#accessibility"
                  className="hover:text-saffron-300 transition-colors"
                >
                  Accessibility
                </a>

                <a
                  href="#sitemap"
                  className="hover:text-saffron-300 transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-sacred-900 border-t border-white/10">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                © 2025 Sathya Sai 100. All rights reserved.
                <span className="mx-2">•</span>
                Powered with love & technology by
                <span className="text-saffron-400 font-semibold mx-1">
                  AEITY Systems
                </span>
              </p>
              <p className="text-white/50 text-xs mt-1">
                Innovating Spiritually for the Future
              </p>
            </div>

            {/* Back to Top */}
            <div className="flex items-center space-x-4">
              <div className="text-white/50 text-xs">
                Made with <Heart className="w-3 h-3 inline text-red-400 mx-1" />{' '}
                for humanity
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-saffron-600 rounded-full flex items-center justify-center hover:bg-saffron-700 transition-all duration-300 hover:scale-110 group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Donate Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <a
          href="#donate"
          className="bg-gradient-to-r from-saffron-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 animate-pulse"
        >
          <Heart className="w-5 h-5" />
          <span className="font-semibold">Donate</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
