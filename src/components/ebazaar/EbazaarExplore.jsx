import { useState, useRef } from 'react'

const EbazaarExplore = () => {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [notification, setNotification] = useState({ show: false, message: '' })
  const [isNavScrolled] = useState(false)
  const heroCanvasRef = useRef(null)

  const products = [
    {
      id: 1,
      name: 'Premium Rudraksha Mala',
      description: '108 beads authentic Rudraksha mala for meditation and spiritual practices',
      price: 2499,
      image: '🔮',
      category: 'jewelry',
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 2,
      name: 'Organic Ghee Diya Set',
      description: 'Handcrafted brass diyas with pure organic cow ghee for daily pooja',
      price: 899,
      image: '🪔',
      category: 'pooja',
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 3,
      name: 'Tirupati Laddu (1kg)',
      description: 'Authentic blessed laddu prasadam from Sri Venkateswara Temple',
      price: 1200,
      image: '🍯',
      category: 'prasadam',
      rating: 5.0,
      reviews: 89,
    },
    {
      id: 4,
      name: 'Bhagavad Gita (Sanskrit-English)',
      description: 'Beautiful hardcover edition with original Sanskrit and English translation',
      price: 1599,
      image: '📚',
      category: 'books',
      rating: 4.7,
      reviews: 342,
    },
    {
      id: 5,
      name: 'Silk Dhoti Set',
      description: 'Premium pure silk dhoti with matching angavastram for ceremonies',
      price: 3299,
      image: '👘',
      category: 'clothing',
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 6,
      name: 'Virtual Darshan Premium',
      description: '1-year subscription to VR temple experiences and live darshan',
      price: 4999,
      image: '🎵',
      category: 'digital',
      rating: 4.8,
      reviews: 124,
    },
  ]

  const categories = [
    { id: 'pooja', icon: '🪔', name: 'Pooja Essentials', description: 'Complete range of sacred items for daily worship and special ceremonies' },
    { id: 'prasadam', icon: '🍯', name: 'Temple Prasadam', description: 'Blessed offerings from renowned temples delivered to your doorstep' },
    { id: 'books', icon: '📚', name: 'Sacred Literature', description: 'Ancient wisdom and modern interpretations of spiritual texts' },
    { id: 'clothing', icon: '👘', name: 'Spiritual Attire', description: 'Traditional and contemporary clothing for spiritual practices' },
    { id: 'jewelry', icon: '📿', name: 'Sacred Jewelry', description: 'Rudraksha, gemstones, and blessed ornaments for spiritual enhancement' },
    { id: 'digital', icon: '🎵', name: 'Digital Offerings', description: 'Virtual darshan, meditation music, and online spiritual experiences' },
  ]

  const temples = [
    { 
      id: 'tirupati', 
      name: 'Sri Venkateswara Temple', 
      location: 'Tirupati, Andhra Pradesh', 
      icon: '🏛️',
      donations: '₹2.5L',
      devotees: '1,234',
      status: 'Live',
    },
    { 
      id: 'shirdi', 
      name: 'Shirdi Sai Baba Temple', 
      location: 'Shirdi, Maharashtra', 
      icon: '🙏',
      donations: '₹1.8L',
      devotees: '956',
      status: 'Live',
    },
    { 
      id: 'vaishno', 
      name: 'Vaishno Devi Temple', 
      location: 'Katra, Jammu & Kashmir', 
      icon: '⛰️',
      donations: '₹3.2L',
      devotees: '2,145',
      status: 'Live',
    },
  ]

  const services = [
    { id: 'pooja', icon: '🔥', name: 'Online Pooja Booking', description: 'Book personalized poojas and ceremonies with certified priests' },
    { id: 'consultation', icon: '🧘', name: 'Spiritual Consultation', description: 'Connect with experienced spiritual guides and astrologers' },
    { id: 'yatra', icon: '🚌', name: 'Pilgrimage Tours', description: 'Organized spiritual journeys to sacred destinations worldwide' },
    { id: 'meditation', icon: '🧠', name: 'Meditation Classes', description: 'Learn ancient meditation techniques from certified instructors' },
    { id: 'vr', icon: '🥽', name: 'VR Temple Experience', description: 'Immersive virtual reality darshan of famous temples' },
    { id: 'blessing', icon: '🙌', name: 'Remote Blessings', description: 'Receive personalized blessings and mantras from holy places' },
  ]

  // useEffect(() => {
  //   setFilteredProducts(products)
  //   showNotification('🙏 Welcome to AEITY eBazaar - Where Sacred Meets Digital!')
  //   initializeHeroAnimation()

  //   const handleScroll = () => {
  //     setIsNavScrolled(window.scrollY > 100)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // })

  // useEffect(() => {
  //   if (searchQuery.length > 2) {
  //     const filtered = products.filter(product =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  //     )
  //     setFilteredProducts(filtered)
  //   } else if (searchQuery.length === 0) {
  //     setFilteredProducts(products)
  //   }
  // })

  const showNotification = (message) => {
    setNotification({ show: true, message })
    setTimeout(() => {
      setNotification({ show: false, message: '' })
    }, 3000)
  }

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId)
    if (product) {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === productId)
        if (existingItem) {
          return prevCart.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
          )
        } else {
          return [...prevCart, { ...product, quantity: 1 }]
        }
      })
      showNotification(`${product.name} added to cart!`)
    }
  }

  const addToWishlist = (productId) => {
    const product = products.find(p => p.id === productId)
    if (product && !wishlist.find(item => item.id === productId)) {
      setWishlist(prev => [...prev, product])
      showNotification(`${product.name} added to wishlist!`)
    }
  }

  const selectCategory = (category) => {
    const filtered = products.filter(product => product.category === category)
    setFilteredProducts(filtered)
    showNotification(`Showing ${filtered.length} products in ${category} category`)
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const visitTemple = (templeName) => {
    const temple = temples.find(t => t.id === templeName)
    showNotification(`Opening virtual darshan for ${temple.name}...`)
  }

  const bookService = (serviceName) => {
    const service = services.find(s => s.id === serviceName)
    showNotification(`Booking ${service.name}...`)
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isNavScrolled ? 'bg-white/98 backdrop-blur-xl shadow-lg' : 'bg-white/95 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              🕉 AEITY eBazaar
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'categories', 'temples', 'services'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-orange-500 font-medium capitalize transition-colors duration-300 relative group"
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search spiritual products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-10 py-2 border-2 border-gray-200 rounded-full w-64 focus:outline-none focus:border-orange-400 transition-all duration-300"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400">🔍</span>
              </div>
              
              <div className="relative cursor-pointer bg-gradient-to-r from-orange-400 to-yellow-500 p-3 rounded-full text-white hover:scale-110 transition-transform duration-300">
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center text-white overflow-hidden">
        <canvas ref={heroCanvasRef} className="absolute inset-0 opacity-30" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Sacred Commerce Reimagined
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Connect with divine energy through authentic spiritual products, temple experiences, and sacred services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('categories')}
              className="px-8 py-4 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollToSection('temples')}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Visit Temples
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Sacred Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => selectCategory(category.id)}
                className="bg-white rounded-2xl p-8 text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-900">{category.name}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full inline-block font-medium">
                  Explore Collection
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center text-6xl text-white">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="text-2xl font-bold text-orange-600 mb-4">
                    ₹{product.price.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400">{'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product.id)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => addToWishlist(product.id)}
                      className="px-4 py-2 bg-gray-100 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Donations */}
      <section id="temples" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Sacred Temples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temples.map((temple) => (
              <div
                key={temple.id}
                onClick={() => visitTemple(temple.id)}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center cursor-pointer hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/20"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  {temple.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{temple.name}</h3>
                <p className="opacity-80 mb-6">{temple.location}</p>
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <div className="flex justify-between text-center">
                    <div>
                      <div className="text-lg font-bold text-yellow-400">{temple.donations}</div>
                      <div className="text-sm opacity-80">Today&apos;s Donations</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-yellow-400">{temple.devotees}</div>
                      <div className="text-sm opacity-80">Devotees</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-yellow-400">{temple.status}</div>
                      <div className="text-sm opacity-80">Darshan</div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full inline-block font-medium">
                  Visit Temple
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Spiritual Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => bookService(service.id)}
                className="bg-white rounded-2xl p-8 text-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-900">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full inline-block font-medium">
                  Book Now
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">🕉 AEITY eBazaar</h3>
              <p className="mb-4 opacity-90">
                Bridging the sacred and digital worlds to bring authentic spiritual experiences to devotees globally.
              </p>
              <div className="text-yellow-400 font-semibold">
                Trusted by 1M+ devotees worldwide
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Categories</h4>
              <ul className="space-y-2 text-sm">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button 
                      onClick={() => selectCategory(category.id)}
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
              <ul className="space-y-2 text-sm">
                {services.map((service) => (
                  <li key={service.id}>
                    <button 
                      onClick={() => bookService(service.id)}
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Connect</h4>
              <p className="mb-4 text-sm">Join our spiritual community</p>
              <div className="flex gap-3 mb-4">
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300">📱</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300">📘</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300">📷</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300">🐦</span>
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Subscribe for blessings"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 AEITY Systems Pvt. Ltd. All rights reserved. | Privacy Policy | Terms of Service | Spiritual Commerce Redefined</p>
          </div>
        </div>
      </footer>

      {/* Notification */}
      <div className={`fixed top-24 right-6 bg-gradient-to-r from-orange-400 to-yellow-500 text-white p-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 ${
        notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        {notification.message}
      </div>

      {/* Floating Action Button */}
      <div 
        onClick={() => showNotification('🧘‍♂️ Spiritual Guide: Namaste! How can I assist you on your spiritual journey today?')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer shadow-2xl hover:scale-110 transition-all duration-300 z-40"
        title="Chat with Spiritual Guide"
      >
        💬
      </div>
    </div>
  )
}

export default EbazaarExplore