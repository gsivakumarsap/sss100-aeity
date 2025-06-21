import { useState } from 'react'

const EbazaarProducts = () => {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (productName, price) => {
    setCartCount(cartCount + 1)
    setCartItems([...cartItems, { name: productName, price }])

    // Animation feedback
    setTimeout(() => {
      // Reset button animation after 1.5 seconds
    }, 1500)
  }

  const filterByCategory = (category) => {
    const products = document.querySelectorAll('.product-card')
    products.forEach((product) => {
      if (product.dataset.category === category) {
        product.style.display = 'block'
        product.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else {
        product.style.opacity = '0.3'
      }
    })

    // Reset after 3 seconds
    setTimeout(() => {
      products.forEach((product) => {
        product.style.display = 'block'
        product.style.opacity = '1'
      })
    }, 3000)
  }

  const searchProducts = () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase()
    const products = document.querySelectorAll('.product-card')

    products.forEach((product) => {
      const title = product.querySelector('.product-title').textContent.toLowerCase()
      const description = product.querySelector('.product-description').textContent.toLowerCase()

      if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
        product.style.display = 'block'
      } else {
        product.style.display = 'none'
      }
    })
  }

  return (
    <div className="font-sans bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradientShift">
      <header className="bg-white bg-opacity-95 backdrop-blur-lg shadow-md fixed top-0 w-full z-10 py-4">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
          <a href="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Aeity E-Bazaar
          </a>
          <ul className="flex space-x-8 text-lg">
            <li><a href="/" className="hover:bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full transition-all">Home</a></li>
            <li><a href="/sathyasai100-marketplace" className="hover:bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full transition-all">Sai Store</a></li>
            <li><a href="#ebazaar" className="active hover:bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full transition-all">E-Bazaar</a></li>
            <li><a href="#services" className="hover:bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full transition-all">Services</a></li>
            <li><a href="#contact" className="hover:bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full transition-all">Contact</a></li>
            <li><a href="#cart" className="hover:bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full transition-all">Cart <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">{cartCount}</span></a></li>
          </ul>
        </nav>
      </header>

      <main className="mt-24 p-8">
        <section className="bg-white bg-opacity-95 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center mb-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">Welcome to Aeity E-Bazaar</h1>
          <p className="text-lg text-gray-700 mb-6">Your one-stop digital marketplace for everything you need - from daily essentials to premium products</p>
          <div className="relative max-w-lg mx-auto mb-8">
            <input
              type="text"
              id="searchInput"
              className="w-full p-4 pl-12 border-3 border-blue-400 rounded-full text-lg focus:ring-4 focus:ring-blue-300 transition-all"
              placeholder="Search for products, brands, categories..."
              onInput={searchProducts}
            />
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-2 rounded-full"
              onClick={searchProducts}
            >
              🔍
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {['electronics', 'fashion', 'home', 'health', 'books', 'sports'].map((category) => (
            <div
              key={category}
              className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-xl p-6 text-center cursor-pointer transform hover:scale-105 transition-all"
              onClick={() => filterByCategory(category)}
            >
              <div className="text-4xl mb-4">{/* Icon for each category */}</div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <p className="text-gray-700">Discover the latest {category} products</p>
            </div>
          ))}
        </section>

        {/* Product Showcase Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['electronics', 'fashion', 'home', 'health', 'books', 'sports'].map((category) => (
            <div className="product-card" data-category={category} key={category}>
              <div className="product-image bg-gradient-to-r from-blue-400 to-purple-500 text-white p-12 flex justify-center items-center text-5xl">
                {/* Icon for each product category */}
              </div>
              <div className="product-info p-4">
                <div className="product-title text-lg font-semibold text-gray-800">Product Name</div>
                <div className="product-description text-sm text-gray-600 mb-2">Short description of the product.</div>
                <div className="price-section flex items-center gap-4 mb-2">
                  <span className="current-price text-lg font-bold text-blue-500">₹3,500</span>
                  <span className="original-price text-sm text-gray-400 line-through">₹5,800</span>
                </div>
                <div className="rating mb-4">
                  <span className="stars text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text text-sm text-gray-600">(4.8/5) 1,245 reviews</span>
                </div>
                <div className="action-buttons flex gap-4">
                  <button className="btn btn-primary bg-gradient-to-r from-blue-400 to-purple-500 text-white p-3 rounded-full" onClick={() => addToCart('Product Name', 3500)}>Add to Cart</button>
                  <button className="btn btn-secondary bg-white border-2 border-blue-400 text-blue-400 p-3 rounded-full">♥️</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="footer-content max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="footer-section">
            <h3 className="text-blue-500 mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="/sathyasai100-marketplace" className="text-gray-400 hover:text-blue-500">Sai Store</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#deals" className="text-gray-400 hover:text-blue-500">Deals</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-blue-500 mb-4">Categories</h3>
            <ul>
              <li><a href="#electronics" className="text-gray-400 hover:text-blue-500">Electronics</a></li>
              <li><a href="#fashion" className="text-gray-400 hover:text-blue-500">Fashion</a></li>
              <li><a href="#home" className="text-gray-400 hover:text-blue-500">Home & Living</a></li>
              <li><a href="#health" className="text-gray-400 hover:text-blue-500">Health & Beauty</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-blue-500 mb-4">Customer Care</h3>
            <ul>
              <li><a href="#help" className="text-gray-400 hover:text-blue-500">Help Center</a></li>
              <li><a href="#shipping" className="text-gray-400 hover:text-blue-500">Shipping Info</a></li>
              <li><a href="#returns" className="text-gray-400 hover:text-blue-500">Returns</a></li>
              <li><a href="#track" className="text-gray-400 hover:text-blue-500">Track Order</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-blue-500 mb-4">Connect With Us</h3>
            <ul>
              <li><a href="#facebook" className="text-gray-400 hover:text-blue-500">Facebook</a></li>
              <li><a href="#twitter" className="text-gray-400 hover:text-blue-500">Twitter</a></li>
              <li><a href="#instagram" className="text-gray-400 hover:text-blue-500">Instagram</a></li>
              <li><a href="#newsletter" className="text-gray-400 hover:text-blue-500">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6">© 2025 Aeity E-Bazaar. Your trusted digital marketplace for quality products and services.</p>
      </footer>
    </div>
  )
}

export default EbazaarProducts
