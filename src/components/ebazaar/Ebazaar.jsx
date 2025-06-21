import { useEffect } from 'react'

const Ebazaar = () => {
  useEffect(() => {
    const handleAnchorScroll = e => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    document.addEventListener('click', handleAnchorScroll)
    return () => document.removeEventListener('click', handleAnchorScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0f172a]/95 backdrop-blur z-50 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">AEITY eBazaar</div>
          <ul className="hidden md:flex gap-8 text-slate-200">
            <li><a href="/ebazaar/products" className="nav-link">Products</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#app" className="nav-link">Mobile App</a></li>
            <li><a href="#roadmap" className="nav-link">Roadmap</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-indigo-400 to-purple-600 px-4">
        <div className="max-w-3xl space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold">AEITY eBazaar</h1>
          <p className="text-xl">Revolutionizing Spiritual Commerce through Digital Innovation</p>
          <p className="text-lg opacity-90">Connecting souls, empowering businesses, transforming the spiritual marketplace</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/ebazaar/products" className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-full hover:-translate-y-1 transition shadow-lg">Shop Products</a>
            <a href="#features" className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-full hover:-translate-y-1 transition shadow-lg">Explore Platform</a>
            <a href="#app" className="border border-white text-white py-3 px-6 rounded-full hover:-translate-y-1 transition shadow-lg">View Mobile App</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Spiritual Marketplace</h3>
              <p className="text-slate-500 leading-relaxed">Comprehensive platform connecting spiritual practitioners, healers, and seekers with authentic products and services.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Mobile-First Design</h3>
              <p className="text-slate-500 leading-relaxed">Seamless mobile experience with native app functionality, ensuring accessibility across all devices globally.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Secure Transactions</h3>
              <p className="text-slate-500 leading-relaxed">End-to-end encrypted payment processing with multiple international payment gateways and fraud protection.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Global Reach</h3>
              <p className="text-slate-500 leading-relaxed">Multi-language support, currency conversion, and localized content for spiritual communities worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Real-time Services</h3>
              <p className="text-slate-500 leading-relaxed">Live consultations, virtual healing sessions, and instant spiritual guidance through integrated video/audio calls.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Analytics Dashboard</h3>
              <p className="text-slate-500 leading-relaxed">Comprehensive insights for vendors and stakeholders with detailed performance metrics and growth analytics.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="app" className="py-20 bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Mobile App Experience</h2>
            <p className="text-lg mb-4">Our native mobile application brings the entire AEITY eBazaar experience to your fingertips. Designed for both iOS and Android platforms with offline capabilities and push notifications.</p>
            <p className="mb-6 opacity-90">Key mobile features include biometric authentication, AR product visualization, location-based spiritual services, and seamless integration with device calendars for appointment scheduling.</p>
            <div className="flex gap-4">
              <a href="#" className="bg-yellow-400 text-white py-3 px-6 rounded-full font-semibold shadow hover:-translate-y-1 transition">Download iOS</a>
              <a href="#" className="border border-white py-3 px-6 rounded-full font-semibold shadow hover:-translate-y-1 transition">Download Android</a>
            </div>
          </div>
          <div className="text-center">
            <div className="w-[250px] h-[500px] bg-gradient-to-br from-slate-700 to-slate-600 rounded-[30px] mx-auto p-5 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-bold">AEITY eBazaar</h3>
                <p>Mobile App Preview</p>
                <div className="mt-5 text-3xl">📱✨🙏</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-400 to-red-400 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold mb-2">10K+</h3>
            <p className="text-lg opacity-90">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-lg opacity-90">Spiritual Vendors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">25+</h3>
            <p className="text-lg opacity-90">Countries</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">99.9%</h3>
            <p className="text-lg opacity-90">Uptime</p>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-12">Development Roadmap</h2>
          <div className="space-y-10 relative">
            <div className="absolute left-1/2 transform -translate-x-1 w-1 bg-gradient-to-b from-indigo-400 to-purple-600 h-full"></div>
            {[
              { title: 'Phase 1: POC Development', desc: 'Core platform development, basic marketplace functionality, user authentication, and initial vendor onboarding system.', time: 'Q2 2025' },
              { title: 'Phase 2: Mobile App Launch', desc: 'Native iOS and Android applications, advanced search features, real-time messaging, and integrated payment systems.', time: 'Q3 2025' },
              { title: 'Phase 3: Global Expansion', desc: 'Multi-language support, international payment gateways, localized content, and regional partnership programs.', time: 'Q4 2025' },
              { title: 'Phase 4: AI Integration', desc: 'Personalized recommendations, AI-powered spiritual guidance, automated customer support, and predictive analytics.', time: 'Q1 2026' },
            ].map((item, i) => (
              <div key={i} className={`bg-white shadow-md rounded-xl p-6 w-full md:w-[45%] ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} relative`}>
                <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-indigo-500 rounded-full -left-7 md:left-auto md:-right-7"></div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 mb-1">{item.desc}</p>
                <small className="text-slate-400">{item.time}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900 text-slate-100">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-lg mb-6 opacity-90">Join the spiritual commerce revolution. Connect with our team to explore partnership opportunities and investment possibilities.</p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="form-input p-3 rounded-lg bg-white/10 text-white backdrop-blur" />
              <input type="email" placeholder="Email Address" className="form-input p-3 rounded-lg bg-white/10 text-white backdrop-blur" />
              <input type="text" placeholder="Organization" className="form-input p-3 rounded-lg bg-white/10 text-white backdrop-blur" />
              <input type="text" placeholder="Role/Title" className="form-input p-3 rounded-lg bg-white/10 text-white backdrop-blur" />
            </div>
            <textarea placeholder="Your Message" rows="4" className="form-input p-3 rounded-lg bg-white/10 text-white w-full backdrop-blur"></textarea>
            <button className="bg-yellow-400 text-white py-3 px-6 rounded-full mt-4 hover:-translate-y-1 transition">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-200 py-6 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2025 AEITY eBazaar. Transforming Spiritual Commerce Globally.</p>
        </div>
      </footer>
    </>
  )
}

export default Ebazaar