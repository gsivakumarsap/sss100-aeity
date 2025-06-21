import { useState } from 'react'

const MarketProducts = () => {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (productName, price) => {
    setCartCount(cartCount + 1)
    setCartItems([...cartItems, { name: productName, price }])
  }

  return (
    <div className="font-sans bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#97d700] bg-400% h-screen">
      <header className="fixed w-full top-0 bg-white bg-opacity-90 backdrop-blur-lg shadow-lg py-4">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
          <a href="#" className="text-2xl font-bold text-[#ff6b35]">Sathya Sai 100</a>
          <ul className="flex space-x-8">
            <li><a href="#" className="text-gray-800 font-medium hover:bg-gradient-to-r from-[#ff6b35] to-[#f7931e] py-2 px-4 rounded-lg transition">Home</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:bg-gradient-to-r from-[#ff6b35] to-[#f7931e] py-2 px-4 rounded-lg transition">Sai Store</a></li>
            <li><a href="#" className="text-gray-800 font-medium hover:bg-gradient-to-r from-[#ff6b35] to-[#f7931e] py-2 px-4 rounded-lg transition">Aeity Bazaar</a></li>
            <li><a href="#events" className="text-gray-800 font-medium hover:bg-gradient-to-r from-[#ff6b35] to-[#f7931e] py-2 px-4 rounded-lg transition">Events</a></li>
            <li><a href="#cart" className="text-gray-800 font-medium hover:bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white py-2 px-4 rounded-lg transition">Cart <span className="bg-[#ff6b35] text-white rounded-full py-1 px-2 text-sm">{cartCount}</span></a></li>
          </ul>
        </nav>
      </header>

      <main className="mt-28 px-8 py-12">
        <section className="text-center bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-lg mb-8">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#f7931e] mb-4">Sathya Sai 100 Marketplace</h1>
          <p>Authentic spiritual products, books, and commemorative items celebrating 100 years of divine teachings</p>
        </section>

        <section className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg mb-8 flex flex-wrap justify-center gap-4">
          <input type="text" className="p-3 border-2 border-gray-300 rounded-full w-72 focus:border-[#ff6b35] transition" placeholder="Search for spiritual books, artifacts, devotional items..." />
          <button className="p-3 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white rounded-full">Search</button>
          <button className="p-3 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white rounded-full">Filter</button>
        </section>

        <section className="flex justify-center gap-4 mb-8 flex-wrap">
          {['All Products', 'Books & Literature', 'Devotional Items', 'Commemoratives', 'Audio & Video', 'Clothing & Accessories'].map((category, index) => (
            <a key={index} href="#" className="py-3 px-6 border-2 border-[#f6f4f4] text-[#f1f1f1] rounded-full hover:bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white transition">{category}</a>
          ))}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Sathya Sai Speaks - Complete Collection', description: 'Complete collection of divine discourses spanning decades of spiritual wisdom and guidance.', price: 2500, image: '📚' },
            { title: 'Centenary Commemorative Medallion', description: 'Limited edition gold-plated medallion celebrating 100 years of divine presence.', price: 1800, image: '🕉️' },
            { title: 'Bhajan Collection - 100 Divine Songs', description: 'Comprehensive collection of devotional songs and bhajans in multiple languages.', price: 800, image: '🎵' },
            { title: 'Sacred Portrait - Framed', description: 'High-quality framed portrait perfect for home altars and meditation spaces.', price: 1200, image: '🖼️' },
            { title: 'Rudraksha Mala - 108 Beads', description: 'Authentic Rudraksha prayer beads for meditation and spiritual practice.', price: 600, image: '📿' },
            { title: 'Devotional Lamp Set', description: 'Traditional brass lamps for daily prayers and special occasions.', price: 950, image: '🕯️' },
            { title: 'Centenary T-Shirt Collection', description: 'Comfortable cotton t-shirts with special centenary designs and quotes.', price: 400, image: '👕' },
            { title: 'My Baba and I - Personal Experiences', description: 'Collection of personal experiences and miracles shared by devotees worldwide.', price: 350, image: '📖' },
            { title: 'Meditation Cushion Set', description: 'Comfortable meditation cushions for extended prayer and meditation sessions.', price: 1100, image: '🎯' },
          ].map((product, index) => (
            <div key={index} className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 hover:transform hover:scale-105 transition">
              <div className="w-full h-48 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] flex items-center justify-center text-white text-4xl">{product.image}</div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 text-sm my-2">{product.description}</p>
                <div className="text-xl font-semibold text-[#ff6b35] mb-2">₹{product.price}</div>
                <button 
                  className="w-full py-2 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white rounded-md" 
                  onClick={() => addToCart(product.title, product.price)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="flex justify-center gap-8 mb-4 flex-wrap">
          <a href="#" className="hover:text-[#ff6b35]">Home</a>
          <a href="#" className="hover:text-[#ff6b35]">Aeity E-Bazaar</a>
          <a href="#shipping" className="hover:text-[#ff6b35]">Shipping Info</a>
          <a href="#returns" className="hover:text-[#ff6b35]">Returns</a>
          <a href="#contact" className="hover:text-[#ff6b35]">Contact</a>
        </div>
        <p>&copy; 2025 Sathya Sai 100 Marketplace. Spreading Love, Service, and Truth through authentic spiritual products.</p>
      </footer>
    </div>
  )
}

export default MarketProducts
