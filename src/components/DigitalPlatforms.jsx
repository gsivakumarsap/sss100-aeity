/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
  Globe,
  MapPin,
  ExternalLink,
  Flower2,
  Building2,
  Heart,
} from 'lucide-react'

const DigitalPlatform = () => {
  const [activeTab, setActiveTab] = useState('features')

  const tabs = [
    {
      id: 'features',
      title: 'Key Features of the Digital Platform',
      icon: Globe,
    },
    {
      id: 'spiritual-tour',
      title: 'Spiritual Tour: Key Sites in Puttaparthi',
      icon: Flower2,
    },
    {
      id: 'nearby-attractions',
      title: 'Nearby Attractions (Within 50 KM Radius)',
      icon: MapPin,
    },
  ]

  const digitalFeatures = [
    {
      title: 'Global Event Map',
      description:
        'Discover, register, and participate in centennial celebrations across the world.',
      link: '#events',
    },
    {
      title: '108+ Seva Programs',
      description: 'Join divine service initiatives locally and globally.',
      link: '#seva',
    },
    {
      title: 'Virtual Darshan Experiences',
      description:
        'Experience the presence of Swamy through immersive darshan streams and archives.',
      link: '#darshan',
    },
    {
      title: 'Sai Literature & Teachings',
      description:
        'A digital library of discourses, books, bhajans, and audio-visual resources.',
      link: '#literature',
    },
    {
      title: 'Daily Inspirational Quotes',
      description:
        'Stay connected to Swamy\'s words of love and wisdom every day.',
      link: '#quotes',
    },
    {
      title: 'Volunteer Onboarding',
      description:
        'Easy steps to enroll and contribute to service initiatives.',
      link: '#volunteer',
    },
    {
      title: 'Sai Learning Programs',
      description:
        'Courses, e-modules, and spiritual knowledge for children, youth, and adults.',
      link: '#learning',
    },
    {
      title: 'Seva Sponsorship Options',
      description:
        'Enable others to serve by sponsoring events, seva kits, or technology efforts.',
      link: '#sponsorship',
    },
    {
      title: 'Community Story Sharing',
      description:
        'Submit your leelas, miracles, seva experiences, and testimonials.',
      link: '#stories',
    },
    {
      title: 'Sai Pilgrimage Guide',
      description:
        'Explore key spiritual locations tied to Swamy\'s life and divine mission.',
      link: '#pilgrimage',
    },
  ]

  const spiritualSites = [
    {
      title: 'Prasanthi Nilayam',
      description: 'Abode of Supreme Peace',
      link: '#prasanthi',
    },
    {
      title: 'Sai Kulwant Hall',
      description: 'Central Darshan & Bhajan venue',
      link: '#kulwant',
    },
    {
      title: 'Chaitanya Jyoti Museum',
      description: 'The story of Swamy\'s life',
      link: '#museum',
    },
    {
      title: 'Sanathana Samskruti Museum',
      description: 'Spiritual heritage exhibit',
      link: '#samskruti',
    },
    {
      title: 'Sai Space Theatre',
      description: 'Where science meets spirituality',
      link: '#theatre',
    },
    {
      title: 'Hill View Stadium',
      description: 'Grand events & processions',
      link: '#stadium',
    },
    {
      title: 'Kalpa Vriksha',
      description: 'The divine wish-fulfilling tree',
      link: '#kalpa',
    },
    {
      title: 'Chitravati River',
      description: 'Witness of divine leelas',
      link: '#river',
    },
    {
      title: 'Samadhi Mandir',
      description: 'Final resting place of Bhagawan',
      link: '#samadhi',
    },
    {
      title: 'Sri Sathya Sai Gokulam',
      description: 'Animal care and service',
      link: '#gokulam',
    },
    {
      title: 'Super Specialty Hospital',
      description: 'Free world-class healthcare',
      link: '#hospital',
    },
    {
      title: 'Sri Sathya Sai Airport',
      description: 'Infrastructure built on divine vision',
      link: '#airport',
    },
    {
      title: 'Mandir (Birthplace)',
      description: 'The holy origin of Swamy\'s avatar',
      link: '#birthplace',
    },
    {
      title: 'Educational Institutions',
      description: 'Values-based global education',
      link: '#education',
    },
  ]

  const nearbyAttractions = [
    {
      title: 'Lepakshi Temple',
      description: 'Renowned for its hanging pillar',
      link: '#lepakshi',
    },
    {
      title: 'Penukonda Fort & Temples',
      description: 'Vijayanagara heritage',
      link: '#penukonda',
    },
    {
      title: 'Gorantla Temple',
      description: 'Stone carvings of divine art',
      link: '#gorantla',
    },
    {
      title: 'Dharmavaram',
      description: 'Handloom sarees & temples',
      link: '#dharmavaram',
    },
    {
      title: 'Hindupur',
      description: 'Jain & ancient temples',
      link: '#hindupur',
    },
    {
      title: 'Kothacheruvu Temple',
      description: 'Serene lakeside Sai Mandir',
      link: '#kothacheruvu',
    },
    {
      title: 'Kadiri Lakshmi Narasimha Temple',
      description: 'Powerful cave temple',
      link: '#kadiri',
    },
    {
      title: 'Thimmamma Marrimanu',
      description: 'Sacred 600-year-old banyan tree',
      link: '#thimmamma',
    },
    {
      title: 'Chandrayana Konda',
      description: 'Trekking and temple site',
      link: '#chandrayana',
    },
    {
      title: 'Bukkapatnam Lake',
      description: 'Nature retreat and meditation',
      link: '#bukkapatnam',
    },
    {
      title: 'Chennakesavapuram Temple',
      description: 'Rare spiritual gem',
      link: '#chennakesava',
    },
    {
      title: 'Adi Yogi Shiva Statue',
      description: 'Majestic monument on the highway',
      link: '#adiyogi',
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
    case 'features':
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {digitalFeatures.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="card p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-saffron-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-sacred-800 mb-2 group-hover:text-saffron-600 transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-sacred-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <ExternalLink className="w-4 h-4 text-sacred-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      )

    case 'spiritual-tour':
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spiritualSites.map((site, index) => (
            <a
              key={index}
              href={site.link}
              className="card p-4 group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />

                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-semibold text-sacred-800 mb-1 group-hover:text-saffron-600 transition-colors truncate">
                    {site.title}
                  </h5>

                  <p className="text-xs text-sacred-600 leading-relaxed">
                    {site.description}
                  </p>
                </div>

                <ExternalLink className="w-3 h-3 text-sacred-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      )

    case 'nearby-attractions':
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyAttractions.map((attraction, index) => (
            <a
              key={index}
              href={attraction.link}
              className="card p-4 group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />

                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-semibold text-sacred-800 mb-1 group-hover:text-saffron-600 transition-colors truncate">
                    {attraction.title}
                  </h5>

                  <p className="text-xs text-sacred-600 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>

                <ExternalLink className="w-3 h-3 text-sacred-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      )

    default:
      return null
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white to-saffron-50">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="spiritual-glow">
              <Flower2 className="w-12 h-12 text-saffron-600" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-sacred-800 mb-6">
            🕉️ Sri Sathya Sai Baba
            <span className="text-gradient block">
              100-Year Digital Celebration Platform
              <div className="py-1"></div>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-elegant font-semibold text-saffron-700 mb-4">
              &quot;Celebrating 100 Years of Love, Service, and Truth&quot;
            </h3>

            <p className="text-lg text-sacred-600 leading-relaxed mb-8">
              Join millions across the globe in honoring the divine legacy of
              Bhagawan Sri Sathya Sai Baba through a timeless, immersive digital
              platform. Built to inspire, serve, and unite devotees worldwide,
              this platform will be a beacon of Swamy&apos;s eternal teachings—Love
              All, Serve All.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg scale-105'
                  : 'bg-white text-sacred-700 hover:bg-saffron-50 hover:text-saffron-600 shadow-md'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="hidden lg:block">{tab.title}</span>
              <span className="lg:hidden">
                {tab.id === 'features'
                  ? 'Features'
                  : tab.id === 'spiritual-tour'
                    ? 'Spiritual Tour'
                    : 'Nearby Attractions'}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in mb-16">{renderContent()}</div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-saffron-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-elegant font-bold">
                The 100-Year Vision by AEITY Systems
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white/95">
                Conceived by <span className="font-semibold">Sivakumar G</span>{' '}
                and crafted by
                <span className="font-semibold"> AEITY Systems Pvt. Ltd.</span>,
                this platform aims to unite devotees, students, and spiritual
                seekers into a global digital community celebrating Bhagawan's
                eternal values of Love, Service, and Education.
              </p>

              <div className="relative">
                <div className="absolute left-0 top-0 text-6xl text-white/20 font-serif">
                  "
                </div>
                <p className="text-xl font-medium italic text-white/90 px-8">
                  We envision a divine digital sanctuary accessible to every
                  corner of the world, reflecting Swamy's life, seva, and
                  message for the next 100 years.
                </p>
                <div className="absolute right-0 bottom-0 text-6xl text-white/20 font-serif transform rotate-180">
                  "
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 pt-4">
                <Heart className="w-5 h-5 text-red-300" />
                <span className="text-white/80 text-sm">
                  Built with divine inspiration for humanity
                </span>
                <Heart className="w-5 h-5 text-red-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalPlatform
