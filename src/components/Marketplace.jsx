import { useState } from 'react'

const SathyaSai100Marketplace = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ]

  const features = [
    {
      icon: '🏪',
      title: 'Dedicated Online Storefront',
      description: 'Get your personalized shop with logo, vendor story & auto-generated URL for global visibility.',
    },
    {
      icon: '🛡️',
      title: 'Secure Payment Gateway',
      description: 'Accept UPI, Debit/Credit Cards, Bank Transfers, and Crypto wallets with complete security.',
    },
    {
      icon: '🌍',
      title: 'Multi-Model Commerce',
      description: 'Support for B2B, B2C, B2G, and C2C transactions on a single platform.',
    },
    {
      icon: '📊',
      title: 'Order Management Dashboard',
      description: 'Complete seller dashboard with analytics, order tracking, and customer management.',
    },
    {
      icon: '♾️',
      title: 'Lifetime Business Listing',
      description: 'Your business stays listed beyond the centenary celebration - a permanent digital presence.',
    },
    {
      icon: '🏆',
      title: 'Dharma Trust Badge',
      description: 'Get verified with our exclusive ethical business certification for enhanced credibility.',
    },
  ]

  const categories = [
    { icon: '🛍️', title: 'Retail & Wholesale', subtitle: 'Traders & Distributors', filter: 'retail' },
    { icon: '🍽️', title: 'Food & Beverages', subtitle: 'Restaurants, Street Food & Tiffin', filter: 'food' },
    { icon: '🎨', title: 'Artisans & Crafts', subtitle: 'Handicraft Creators & Local Makers', filter: 'crafts' },
    { icon: '📚', title: 'Spiritual Products', subtitle: 'Books, Photos & Devotional Items', filter: 'spiritual' },
    { icon: '🏨', title: 'Hospitality', subtitle: 'Hotels, Travel & Guesthouses', filter: 'hospitality' },
    { icon: '🧘', title: 'Wellness & Yoga', subtitle: 'Studios & Ayurvedic Centers', filter: 'wellness' },
    { icon: '🌱', title: 'Agriculture', subtitle: 'Farmers, Florists & Agri Products', filter: 'agriculture' },
    { icon: '📸', title: 'Services', subtitle: 'Photography & Event Planning', filter: 'services' },
  ]

  const vendors = [
    {
      id: 1,
      name: 'Sai Bhakthi Bookstore',
      category: 'Spiritual & Devotional Products',
      rating: 4.9,
      distance: '2 KM away',
      icon: '📚',
      verified: true,
    },
    {
      id: 2,
      name: 'Ananda Ayurvedic Center',
      category: 'Wellness & Ayurveda',
      rating: 4.8,
      distance: '1.5 KM away',
      icon: '🌿',
      verified: true,
    },
    {
      id: 3,
      name: 'Prasadam Kitchen',
      category: 'Food & Beverages',
      rating: 4.7,
      distance: '0.8 KM away',
      icon: '🍽️',
      verified: true,
    },
  ]

  const filterButtons = [
    { key: 'all', label: 'All Categories' },
    { key: 'retail', label: 'Retail' },
    { key: 'food', label: 'Food & Beverages' },
    { key: 'crafts', label: 'Handicrafts' },
    { key: 'spiritual', label: 'Spiritual' },
    { key: 'hospitality', label: 'Hospitality' },
    { key: 'wellness', label: 'Wellness' },
    { key: 'agriculture', label: 'Agriculture' },
    { key: 'services', label: 'Services' },
  ]

  const handleSearch = () => {
    console.log('Searching for:', searchQuery)
    // Add search logic here
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    // Add filter logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center flex-wrap">
            <div className="text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">🕉️</span>
              SathyaSai100
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1">Home</a>
              <a href="#marketplace" className="hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1">Marketplace</a>
              <a href="#vendors" className="hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1">Vendors</a>
              <a href="#about" className="hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1">About</a>
              <a href="#contact" className="hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1">Contact</a>
              <select 
                className="bg-white/20 border-none text-white px-4 py-2 rounded-full cursor-pointer"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className="text-black">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-200 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-yellow-100/20 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 drop-shadow-lg">
            Empowering Local Business, Elevating Global Impact
          </h1>
          <p className="text-xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed">
            Buy with Love, Sell with Purpose — Supporting dharma-driven, inclusive commerce in Puttaparthi & beyond. 
            Rooted in values of love, service, and self-reliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <span>🏪</span>
              Register Your Business
            </button>
            <button className="bg-white text-orange-500 border-2 border-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <span>🔍</span>
              Browse Sellers Near You
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4 relative">
            Why Join the Sathya Sai 100 Marketplace?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </h2>
          <p className="text-center text-xl text-amber-700 max-w-4xl mx-auto mb-12">
            Powered by AEITY Systems, we blend cutting-edge technology with dharma to help you grow while serving the community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-orange-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-orange-400">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">{feature.title}</h3>
                <p className="text-amber-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4 relative">
            Who Can Register?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </h2>
          <p className="text-center text-xl text-amber-700 mb-12">
            Open to ethical businesses & entrepreneurs in diverse sectors:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-400">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">{category.title}</h3>
                <p className="text-amber-700 text-sm">{category.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8 relative">
            Find What You Need
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </h2>
          <div className="max-w-3xl mx-auto relative mb-8">
            <input
              type="text"
              className="w-full p-4 pr-16 border-2 border-orange-400 rounded-full text-lg bg-orange-50 focus:bg-white focus:shadow-lg focus:outline-none transition-all duration-300"
              placeholder="Search for products, vendors, or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-amber-800 hover:scale-105 transition-all duration-300"
            >
              🔍
            </button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {filterButtons.map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 ${
                  activeFilter === filter.key
                    ? 'bg-orange-400 text-white'
                    : 'bg-orange-50 text-orange-500 border-2 border-orange-400 hover:bg-orange-400 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Vendors */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 relative">
            Trusted Vendors Near You
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="bg-gradient-to-r from-orange-300 to-yellow-300 h-48 flex items-center justify-center text-6xl text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
                  <span className="relative z-10">{vendor.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-amber-900">{vendor.name}</h3>
                    {vendor.verified && (
                      <span className="text-yellow-400 text-lg" title="Dharma Trust Verified">🏆</span>
                    )}
                  </div>
                  <p className="text-amber-700 italic mb-4">{vendor.category}</p>
                  <div className="flex justify-between items-center text-sm text-amber-600">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      {vendor.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📍</span>
                      {vendor.distance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <blockquote className="text-2xl md:text-3xl italic leading-relaxed mb-4">
            "Love All, Serve All. Help Ever, Hurt Never."
          </blockquote>
          <p className="text-xl font-bold">— Bhagawan Sri Sathya Sai Baba</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-yellow-400 transition-colors">About Us</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">How It Works</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Vendor Registration</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Customer Support</a>
              </div>
            </div>
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-yellow-400 transition-colors">Spiritual Products</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Food & Beverages</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Handicrafts</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Wellness</a>
              </div>
            </div>
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-yellow-400 transition-colors">Help Center</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Contact Us</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-yellow-400 transition-colors">Privacy Policy</a>
              </div>
            </div>
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-4">Connect</h3>
              <div className="space-y-2">
                <p>📧 info@sathyasai100.com</p>
                <p>📞 +91 8555 123 456</p>
                <p>📍 Puttaparthi, Andhra Pradesh</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <a href="#" className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300">
                💼
              </a>
            </div>
            <p className="text-white/80">© 2024 SathyaSai100 Marketplace. All rights reserved. Built with ❤️ by AEITY Systems</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse">
          💬
        </button>
      </div>
    </div>
  )
}

export default SathyaSai100Marketplace