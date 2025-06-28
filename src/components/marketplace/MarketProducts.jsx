import { useState, useEffect, useRef } from 'react'
import { ShoppingCart, Search, Users, Lightbulb, Menu, X } from 'lucide-react'

const MarketProducts = () => {
  const [activeTab, setActiveTab] = useState('ebazaar')
  const [cartCount, setCartCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [stats, setStats] = useState({ vendors: 0, products: 0, countries: 0, orders: 0 })
  const statsRef = useRef(null)
  const [statsAnimated, setStatsAnimated] = useState(false)

  // Animate counter function
  const animateCounter = (target, setter, key) => {
    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setter(prev => ({ ...prev, [key]: target }))
        clearInterval(timer)
      } else {
        setter(prev => ({ ...prev, [key]: Math.floor(current) }))
      }
    }, 20)
  }

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true)
            animateCounter(1250, setStats, 'vendors')
            animateCounter(15000, setStats, 'products')
            animateCounter(45, setStats, 'countries')
            animateCounter(50000, setStats, 'orders')
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [statsAnimated])

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  const ebazaarCategories = [
    { icon: '📱', name: 'Electronics & Smart Devices', desc: 'Powering Everyday Innovation', cta: 'Shop Electronics' },
    { icon: '👗', name: 'Fashion & Lifestyle', desc: 'Tradition Meets Trend', cta: 'Explore Fashion' },
    { icon: '🏠', name: 'Home, Decor & Spiritual Living', desc: 'Comfort and Culture in Every Corner', cta: 'Shop Home Decor' },
    { icon: '💊', name: 'Health, Wellness & Ayurveda', desc: 'Well-being Rooted in Wisdom', cta: 'Explore Wellness' },
    { icon: '📚', name: 'Books, Media & Learning', desc: 'Fuel for the Curious Soul', cta: 'Browse Books' },
    { icon: '⚽', name: 'Sports & Fitness', desc: 'Live Active. Stay Balanced.', cta: 'Shop Sports' },
    { icon: '🛕', name: 'Temple & Devotional Essentials', desc: 'Daily Rituals, Divine Delivery', cta: 'Shop Devotional' },
    { icon: '🎁', name: 'Gifting & Festival Specials', desc: 'Celebrate with Soul', cta: 'Find Gifts' },
    { icon: '🌐', name: 'Creator Tools & Digital Assets', desc: 'Empowering Global Creators & Startups', cta: 'Explore Tools' },
    { icon: '🌿', name: 'Eco & Sustainable Living', desc: 'Green is the New Sacred', cta: 'Go Green' },
    { icon: '💫', name: 'AEITY Originals & Brand Exclusives', desc: 'Born from Innovation. Built for Impact', cta: 'Shop Exclusives' },
    { icon: '🏨', name: 'Hotel & Accommodation', desc: 'Stay Divine. Rest in Devotion', cta: 'Book Stay' },
  ]

  const marketplaceCategories = [
    { icon: '📘', name: 'Books & Teachings', desc: 'Ancient wisdom for modern souls', cta: 'Explore Sacred Teachings' },
    { icon: '🪔', name: 'Puja Essentials', desc: 'Everything for your daily worship', cta: 'Shop Puja Samagri' },
    { icon: '🏵️', name: 'Commemoratives', desc: 'Sacred memories to cherish', cta: 'Discover Temple Keepsakes' },
    { icon: '🎧', name: 'Audio & Visual Media', desc: 'Divine melodies and teachings', cta: 'Listen to Divine Melodies' },
    { icon: '🧣', name: 'Apparel & Accessories', desc: 'Spiritual fashion with purpose', cta: 'Wear Devotion with Pride' },
    { icon: '📦', name: 'Festival Kits & Bhakti Boxes', desc: 'Curated spiritual experiences', cta: 'Celebrate with Devotion' },
    { icon: '🛕', name: 'Temple-Specific Products', desc: 'Authentic temple offerings', cta: 'Shop by Temple' },
    { icon: '🌿', name: 'Wellness & Ayurveda', desc: 'Holistic health solutions', cta: 'Embrace Sacred Healing' },
    { icon: '🕉️', name: 'Virtual Sevas & Offerings', desc: 'Connect spiritually from anywhere', cta: 'Book Seva Online' },
    { icon: '💫', name: 'Global Picks & AEITY Select', desc: 'Curated favorites worldwide', cta: 'AEITY Select – Global Favorites' },
    { icon: '🏨', name: 'Hotel & Accommodation', desc: 'Sacred stays for every journey', cta: 'Sacred Stays for Every Pilgrimage' },
  ]

  const products = [
    { icon: '🪔', name: 'Brass Diya Set (Set of 5)', currentPrice: '₹599', originalPrice: '₹799', rating: 5, reviews: 248 },
    { icon: '📿', name: 'Sandalwood Mala (108 Beads)', currentPrice: '₹1,299', originalPrice: '₹1,599', rating: 5, reviews: 156 },
    { icon: '📚', name: 'Bhagavad Gita (Hindi & English)', currentPrice: '₹399', originalPrice: '₹499', rating: 5, reviews: 324 },
    { icon: '🌿', name: 'Organic Herbal Tea Blend', currentPrice: '₹299', originalPrice: '₹399', rating: 4, reviews: 89 },
    { icon: '🕉️', name: 'Om Wall Hanging (Copper)', currentPrice: '₹899', originalPrice: '₹1,199', rating: 5, reviews: 201 },
    { icon: '🎧', name: 'Meditation Music Collection', currentPrice: '₹199', originalPrice: '₹299', rating: 5, reviews: 412 },
  ]

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white text-center py-2 text-sm">
        🎉 Festival Special: Free Delivery on Orders Above ₹999 | Sacred Collections Now Available Worldwide
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4 flex-wrap">
          <a href="#" className="text-2xl font-bold text-orange-500">AEITY Marketplace</a>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 relative order-3 md:order-2 w-full md:w-auto mt-3 md:mt-0">
            <input 
              type="text" 
              placeholder="Search for sacred items, books, wellness products..."
              className="w-full py-3 px-4 pr-12 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
              <Search size={16} />
            </button>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-5 order-2 md:order-3">
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="relative cursor-pointer">
              <ShoppingCart size={20} className="text-gray-800" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            </div>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
              Login / Register
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="w-full md:hidden order-4">
              <ul className="flex flex-col space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="w-full text-left py-2 text-gray-800 hover:text-orange-500 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('categories')} className="w-full text-left py-2 text-gray-800 hover:text-orange-500 transition-colors">Categories</button></li>
                <li><button onClick={() => scrollToSection('vendors')} className="w-full text-left py-2 text-gray-800 hover:text-orange-500 transition-colors">Vendors</button></li>
                <li><button onClick={() => scrollToSection('about')} className="w-full text-left py-2 text-gray-800 hover:text-orange-500 transition-colors">About Us</button></li>
                <li><button className="w-full text-left py-2 text-gray-800 hover:text-orange-500 transition-colors">Support</button></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-orange-100 to-purple-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-5">Sacred Digital Marketplace</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Empowering temple vendors, artisans, and spiritual communities while delivering an immersive experience to global consumers
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <button 
              onClick={() => scrollToSection('categories')}
              className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transform hover:-translate-y-1 transition-all"
            >
              Explore Sacred Collections
            </button>
            <button 
              onClick={() => scrollToSection('vendors')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
            >
              Join as Vendor
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-5">Discover Our Collections</h2>
          <p className="text-center text-gray-600 mb-15 text-lg">Choose from our curated categories designed for modern spiritual living</p>
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-10 gap-5 flex-wrap">
            <button 
              className={`px-6 py-3 rounded-full border-2 font-medium transition-all ${
                activeTab === 'marketplace' 
                  ? 'bg-orange-500 text-white border-orange-500' 
                  : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
              }`}
              onClick={() => setActiveTab('ebazaar')}
            >
              AEITY eBazaar
            </button>
            <button 
              className={`px-6 py-3 rounded-full border-2 font-medium transition-all ${
                activeTab === 'marketplace' 
                  ? 'bg-orange-50 border-orange-500' 
                  : 'border-orange-500 text-white bg-orange-500'
              }`}
              onClick={() => setActiveTab('marketplace')}
            >
              AEITY Marketplace
            </button>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-15">
            {(activeTab === 'ebazaar' ? ebazaarCategories : marketplaceCategories).map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.desc}</p>
                <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-all group-hover:bg-orange-500 group-hover:text-white">
                  {category.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-5">Featured Products</h2>
          <p className="text-center text-gray-600 mb-15 text-lg">Handpicked items from our sacred collections</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all"
              >
                <div className="h-48 bg-gradient-to-r from-orange-100 to-purple-100 flex items-center justify-center text-5xl">
                  {product.icon}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-bold text-orange-500">{product.currentPrice}</span>
                    <span className="text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400">{renderStars(product.rating)}</span>
                    <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
                  </div>
                  <button 
                    onClick={addToCart}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-5">About AEITY eBazaar</h2>
          <p className="text-center text-gray-600 mb-15 text-lg">Empowering spiritual communities through technology and tradition</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="text-center p-8">
              <div className="text-5xl text-orange-500 mb-5">
                <Users className="mx-auto" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connecting temple vendors, artisans, and spiritual seekers from around the world in a unified marketplace that celebrates our shared heritage.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl text-orange-500 mb-5">
                <Lightbulb className="mx-auto" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Blending ancient wisdom with modern technology to create seamless digital experiences that honor tradition while embracing the future.
              </p>
            </div>
            
            <div className="text-center p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Spiritual Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting your spiritual journey with authentic products, teachings, and experiences that nurture the soul and elevate consciousness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-15 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stats.vendors.toLocaleString()}</div>
              <div className="text-lg opacity-90">Active Vendors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stats.products.toLocaleString()}</div>
              <div className="text-lg opacity-90">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stats.countries.toLocaleString()}</div>
              <div className="text-lg opacity-90">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stats.orders.toLocaleString()}</div>
              <div className="text-lg opacity-90">Orders Fulfilled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-15">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="text-orange-500 text-lg font-semibold mb-5">AEITY eBazaar – Sacred Digital Marketplace</h3>
              <p className="text-gray-300 mb-8">Empowering temple vendors and spiritual communities worldwide.</p>
              
              <h3 className="text-orange-500 text-lg font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-orange-500 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('categories')} className="text-gray-300 hover:text-orange-500 transition-colors">Categories</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-500 transition-colors">About Us</button></li>
                <li><a href="#vendors" className="text-gray-300 hover:text-orange-500 transition-colors">Become a Vendor</a></li>
                <li><a href="#track" className="text-gray-300 hover:text-orange-500 transition-colors">Track Your Order</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-orange-500 text-lg font-semibold mb-5">Shop Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Books & Teachings</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Puja Essentials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Wellness & Ayurveda</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Festival Specials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Apparel & Accessories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Hotel & Accommodation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-orange-500 text-lg font-semibold mb-5">Customer Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
              
              <h3 className="text-orange-500 text-lg font-semibold mb-5 mt-8">For Vendors</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Join as Vendor</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Vendor Dashboard</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Vendor Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-orange-500 text-lg font-semibold mb-5">Legal & Policies</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Vendor Agreement</a></li>
              </ul>
              
              <h3 className="text-orange-500 text-lg font-semibold mb-5 mt-8">Stay Connected</h3>
              <p className="text-gray-300 mb-4">Subscribe for updates, festivals & offers.</p>
              <div className="flex gap-2 mb-8">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded bg-white text-gray-800"
                />
                <button className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <h3 className="text-orange-500 text-lg font-semibold mb-5">Download Our App</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-orange-500 px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors">📱 iOS</a>
                <a href="#" className="bg-orange-500 px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors">🤖 Android</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-5 text-center text-gray-300">
            <p className="mb-2">© 2025 AEITY eBazaar. All rights reserved. | Made with ❤️ for spiritual communities worldwide</p>
            <p>🌍 Global Headquarters: Bengaluru, India | 📧 hello@aeity-ebazaar.com | 📞 +91-80-AEITY-00</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MarketProducts