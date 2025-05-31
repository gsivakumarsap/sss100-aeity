import React, { useState } from 'react'
import {
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Quote,
  ArrowRight,
  Globe,
  Heart,
  Star,
  Play,
  GraduationCap,
  Gift,
  MessageSquare,
  Navigation,
  CheckCircle,
  Award,
  Target,
} from 'lucide-react'

const CelebrationHighlights = () => {
  const [activeTab, setActiveTab] = useState('events')

  const highlights = [
    {
      id: 'events',
      title: 'Global Event Map',
      icon: MapPin,
      description: 'Interactive map of worldwide celebrations',
    },
    {
      id: 'seva',
      title: '108+ Seva Programs',
      icon: Heart,
      description: 'Service initiatives across the globe',
    },
    {
      id: 'darshan',
      title: 'Virtual Darshan Experiences',
      icon: Star,
      description: 'Immersive spiritual experiences online',
    },
    {
      id: 'literature',
      title: 'Sai Literature & Teachings',
      icon: BookOpen,
      description: 'Digital archive of sacred texts',
    },
    {
      id: 'quotes',
      title: 'Daily Quotes of Inspiration',
      icon: Quote,
      description: 'Daily wisdom from the Master',
    },
    {
      id: 'volunteer',
      title: 'Volunteer Onboarding',
      icon: Users,
      description: 'Join our global volunteer community',
    },
    {
      id: 'learning',
      title: 'Sai Learning Programs',
      icon: GraduationCap,
      description: 'Comprehensive spiritual education courses',
    },
    {
      id: 'sponsorship',
      title: 'Seva Sponsorship Options',
      icon: Gift,
      description: 'Support service initiatives worldwide',
    },
    {
      id: 'stories',
      title: 'Community Story Sharing',
      icon: MessageSquare,
      description: 'Share your spiritual journey with others',
    },
    {
      id: 'pilgrimage',
      title: 'Sai Pilgrimage Guide',
      icon: Navigation,
      description: 'Sacred places and spiritual journeys',
    },
  ]

  const globalEvents = [
    {
      location: 'Prasanthi Nilayam, India',
      date: 'November 23, 2025',
      type: 'Main Celebration',
      participants: '50,000+',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      location: 'Los Angeles, USA',
      date: 'November 20, 2025',
      type: 'Regional Celebration',
      participants: '5,000+',
      image:
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      location: 'London, UK',
      date: 'November 21, 2025',
      type: 'European Summit',
      participants: '3,000+',
      image:
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      location: 'Sydney, Australia',
      date: 'November 22, 2025',
      type: 'Asia-Pacific Event',
      participants: '4,000+',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ]

  const sevaPrograms = [
    {
      title: 'Food Distribution',
      description: 'Free meals for underprivileged communities',
      impact: '1M+ meals served',
      countries: 85,
    },
    {
      title: 'Medical Camps',
      description: 'Free healthcare services in rural areas',
      impact: '500K+ patients treated',
      countries: 60,
    },
    {
      title: 'Educational Support',
      description: 'Scholarships and learning materials',
      impact: '100K+ students helped',
      countries: 45,
    },
    {
      title: 'Clean Water Projects',
      description: 'Safe drinking water initiatives',
      impact: '250+ villages benefited',
      countries: 25,
    },
  ]

  const dailyQuotes = [
    {
      quote: 'Love all, serve all; help ever, hurt never.',
      context: 'The essence of human existence',
    },
    {
      quote: 'The end of wisdom is freedom; the end of culture is perfection.',
      context: 'On spiritual growth',
    },
    {
      quote: 'Life is a challenge, meet it! Life is a dream, realize it!',
      context: 'Embracing life\'s journey',
    },
  ]

  const volunteerPrograms = [
    {
      title: 'Community Service Volunteer',
      description: 'Join local service activities in your area',
      commitment: '4-8 hours/month',
      training: 'Online orientation + local training',
      benefits: [
        'Certificate of service',
        'Global network access',
        'Skill development',
      ],
    },
    {
      title: 'Digital Platform Volunteer',
      description: 'Help maintain and improve our digital presence',
      commitment: '2-6 hours/week',
      training: 'Technical training provided',
      benefits: ['Tech skill development', 'Remote work', 'Portfolio building'],
    },
    {
      title: 'Event Coordination Volunteer',
      description: 'Organize and support local celebrations',
      commitment: 'Flexible based on events',
      training: 'Event management workshop',
      benefits: [
        'Leadership experience',
        'Event planning skills',
        'Recognition',
      ],
    },
  ]

  const learningPrograms = [
    {
      title: 'Foundation Course in Sai Philosophy',
      duration: '6 weeks',
      level: 'Beginner',
      format: 'Online + Discussion Groups',
      topics: ['Basic teachings', 'Value system', 'Daily practice'],
    },
    {
      title: 'Advanced Spiritual Studies',
      duration: '12 weeks',
      level: 'Intermediate',
      format: 'Hybrid (Online + In-person)',
      topics: [
        'Deep philosophy',
        'Meditation techniques',
        'Service leadership',
      ],
    },
    {
      title: 'Seva Leadership Program',
      duration: '8 weeks',
      level: 'Advanced',
      format: 'Intensive workshops',
      topics: [
        'Project management',
        'Community building',
        'Global coordination',
      ],
    },
  ]

  const sponsorshipTiers = [
    {
      title: 'Meal Sponsor',
      amount: '₹2,500/month',
      impact: 'Feed 50 children daily',
      duration: 'Minimum 6 months',
      benefits: [
        'Monthly impact reports',
        'Photos from beneficiaries',
        'Tax receipts',
      ],
    },
    {
      title: 'Education Sponsor',
      amount: '₹10,000/month',
      impact: 'Support 10 students\' education',
      duration: 'Minimum 1 year',
      benefits: [
        'Student progress reports',
        'Direct communication',
        'Visit opportunities',
      ],
    },
    {
      title: 'Infrastructure Sponsor',
      amount: '₹50,000+',
      impact: 'Build community facilities',
      duration: 'One-time or installments',
      benefits: [
        'Naming recognition',
        'Inauguration invitation',
        'Legacy documentation',
      ],
    },
  ]

  const communityStories = [
    {
      category: 'Transformation',
      title: 'From Darkness to Light',
      author: 'Anonymous Devotee',
      excerpt:
        'How the teachings changed my perspective on life and relationships...',
      readTime: '3 min',
      likes: 245,
    },
    {
      category: 'Service',
      title: 'Building Wells in Rural India',
      author: 'Sarah Johnson, USA',
      excerpt:
        'Our volunteer team\'s journey to provide clean water to 15 villages...',
      readTime: '5 min',
      likes: 189,
    },
    {
      category: 'Devotion',
      title: 'Miracles in Daily Life',
      author: 'Rajesh Kumar, India',
      excerpt: 'Small but profound experiences that strengthened my faith...',
      readTime: '4 min',
      likes: 312,
    },
  ]

  const pilgrimageGuide = [
    {
      location: 'Prasanthi Nilayam, India',
      significance: 'Main Ashram and Samadhi',
      bestTime: 'October - March',
      duration: '3-7 days',
      highlights: [
        'Darshan Hall',
        'Chaitanya Jyoti Museum',
        'Hill View Stadium',
      ],
    },
    {
      location: 'Brindavan, Whitefield',
      significance: 'Summer residence and early teachings',
      bestTime: 'Year-round',
      duration: '1-2 days',
      highlights: [
        'Sai Ramesh Hall',
        'Trayee Brindavan',
        'Sri Sathya Sai University',
      ],
    },
    {
      location: 'Kodaikanal',
      significance: 'Summer retreat and discourse venue',
      bestTime: 'April - June',
      duration: '2-3 days',
      highlights: ['Sai Shruti', 'Meditation spots', 'Nature walks'],
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
    case 'events':
      return (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalEvents.map((event, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.location}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">{event.location}</h4>
                    <p className="text-sm text-white/90">{event.type}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-saffron-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sacred-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">
                      {event.participants} expected
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary flex items-center space-x-2 mx-auto">
              <Globe className="w-5 h-5" />
              <span>View Full Global Map</span>
            </button>
          </div>
        </div>
      )

    case 'seva':
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {sevaPrograms.map((program, index) => (
            <div key={index} className="card p-8 group hover:shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-saffron-600" />
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-sacred-800 mb-2">
                    {program.title}
                  </h4>

                  <p className="text-sacred-600 mb-4">
                    {program.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-sacred-500">Global Impact:</span>
                      <span className="font-semibold text-saffron-600">
                        {program.impact}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-sacred-500">Countries:</span>
                      <span className="font-semibold text-saffron-600">
                        {program.countries}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'darshan':
      return (
        <div className="text-center space-y-8">
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Virtual Darshan"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />

            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
                <Play className="w-8 h-8 text-saffron-600 ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
                Experience Divine Presence
            </h4>

            <p className="text-sacred-600 mb-6">
                Join thousands in virtual darshan sessions, meditation
                practices, and spiritual discourses from the comfort of your
                home.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-saffron-50 rounded-lg">
                <h5 className="font-semibold text-saffron-800">
                    Live Sessions
                </h5>
                <p className="text-sm text-saffron-600">
                    Daily at 6 AM & 6 PM IST
                </p>
              </div>

              <div className="p-4 bg-saffron-50 rounded-lg">
                <h5 className="font-semibold text-saffron-800">Languages</h5>
                <p className="text-sm text-saffron-600">
                    Available in 12 languages
                </p>
              </div>

              <div className="p-4 bg-saffron-50 rounded-lg">
                <h5 className="font-semibold text-saffron-800">
                    Participants
                </h5>
                <p className="text-sm text-saffron-600">
                    10,000+ daily joiners
                </p>
              </div>
            </div>
          </div>
        </div>
      )

    case 'literature':
      return (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-sacred-800 mb-4">
                  Sacred Texts Collection
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Sai Satcharitra</span>
                  <span className="text-sm text-saffron-600">
                      Telugu, Hindi, English
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">
                      Bhagavad Gita Commentary
                  </span>
                  <span className="text-sm text-saffron-600">
                      12 Languages
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Divine Discourses</span>
                  <span className="text-sm text-saffron-600">
                      2000+ Speeches
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Letters & Writings</span>
                  <span className="text-sm text-saffron-600">
                      500+ Documents
                  </span>
                </div>
              </div>
            </div>

            <button className="btn-primary w-full mt-6">
                Access Digital Library
            </button>
          </div>

          <div className="card p-6">
            <h4 className="text-xl font-semibold text-sacred-800 mb-4">
                Featured Collection
            </h4>

            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Sacred texts"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h5 className="font-semibold text-sacred-800 mb-2">
                Divine Teachings Archive
            </h5>

            <p className="text-sacred-600 text-sm mb-4">
                Complete collection of spiritual discourses, letters, and
                teachings spanning decades of divine wisdom.
            </p>

            <div className="text-xs text-sacred-500">
                📚 1000+ Documents • 🌍 15 Languages • 🎧 Audio Available
            </div>
          </div>
        </div>
      )

    case 'quotes':
      return (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
                Daily Inspiration
            </h4>

            <p className="text-sacred-600">
                Receive daily wisdom and guidance from the eternal teachings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dailyQuotes.map((quote, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:shadow-2xl"
              >
                <Quote className="w-12 h-12 text-saffron-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />

                <blockquote className="text-lg font-medium text-sacred-800 mb-4">
                    &quot;{quote.quote}&quot;
                </blockquote>

                <p className="text-sm text-sacred-500 italic">
                  {quote.context}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-saffron-50 rounded-2xl p-8">
            <h5 className="text-xl font-semibold text-sacred-800 mb-4">
                Subscribe to Daily Wisdom
            </h5>

            <p className="text-sacred-600 mb-6">
                Get inspiring quotes and teachings delivered to your inbox every
                morning
            </p>

            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
              />
              <button className="btn-primary rounded-l-none">
                  Subscribe
              </button>
            </div>
          </div>
        </div>
      )

    case 'volunteer':
      return (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
                Join Our Volunteer Community
            </h4>
            <p className="text-sacred-600">
                Make a difference through service. Choose your path to
                contribute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {volunteerPrograms.map((program, index) => (
              <div key={index} className="card p-6 group">
                <div className="w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-saffron-600" />
                </div>

                <h5 className="text-lg font-semibold text-sacred-800 mb-2">
                  {program.title}
                </h5>

                <p className="text-sacred-600 mb-4 text-sm">
                  {program.description}
                </p>

                <div className="space-y-2 text-xs text-sacred-500 mb-4">
                  <div>
                    <strong>Commitment:</strong> {program.commitment}
                  </div>
                  <div>
                    <strong>Training:</strong> {program.training}
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-sm font-semibold text-sacred-700 mb-2">
                      Benefits:
                  </h6>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-sacred-600"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full text-sm py-2">
                    Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )

    case 'learning':
      return (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
                Sai Learning Programs
            </h4>
            <p className="text-sacred-600">
                Structured spiritual education for seekers at every level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {learningPrograms.map((program, index) => (
              <div key={index} className="card p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-saffron-600" />
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      program.level === 'Beginner'
                        ? 'bg-green-100 text-green-700'
                        : program.level === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {program.level}
                  </span>
                </div>

                <h5 className="text-lg font-semibold text-sacred-800 mb-2">
                  {program.title}
                </h5>

                <div className="space-y-2 text-sm text-sacred-600 mb-4">
                  <div>
                    <strong>Duration:</strong> {program.duration}
                  </div>
                  <div>
                    <strong>Format:</strong> {program.format}
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-sm font-semibold text-sacred-700 mb-2">
                      Topics Covered:
                  </h6>
                  <ul className="space-y-1">
                    {program.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-sacred-600"
                      >
                        <Award className="w-3 h-3 text-saffron-500" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full text-sm py-2">
                    Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )

    case 'sponsorship':
      return (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
                Seva Sponsorship Options
            </h4>
            <p className="text-sacred-600">
                Enable transformation through your generous contributions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="card p-6 group">
                <div className="w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gift className="w-6 h-6 text-saffron-600" />
                </div>

                <h5 className="text-lg font-semibold text-sacred-800 mb-2">
                  {tier.title}
                </h5>

                <div className="text-2xl font-bold text-saffron-600 mb-2">
                  {tier.amount}
                </div>

                <div className="space-y-2 text-sm text-sacred-600 mb-4">
                  <div>
                    <strong>Impact:</strong> {tier.impact}
                  </div>
                  <div>
                    <strong>Duration:</strong> {tier.duration}
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-sm font-semibold text-sacred-700 mb-2">
                      Benefits:
                  </h6>
                  <ul className="space-y-1">
                    {tier.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-sacred-600"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full text-sm py-2">
                    Sponsor Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )

    case 'stories':
      return (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
                Community Story Sharing
            </h4>
            <p className="text-sacred-600">
                Inspire others with your spiritual journey and experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {communityStories.map((story, index) => (
                <div key={index} className="card p-6 group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-saffron-100 text-saffron-700 rounded-full text-xs font-semibold">
                      {story.category}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-sacred-500">
                      <Heart className="w-3 h-3" />
                      <span>{story.likes}</span>
                    </div>
                  </div>

                  <h5 className="text-lg font-semibold text-sacred-800 mb-2">
                    {story.title}
                  </h5>

                  <p className="text-sm text-sacred-600 mb-3">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-sacred-500">
                    <span>By {story.author}</span>
                    <span>{story.readTime} read</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-6">
              <h5 className="text-xl font-semibold text-sacred-800 mb-4">
                  Share Your Story
              </h5>

              <p className="text-sacred-600 mb-6 text-sm">
                  Your spiritual journey can inspire and guide others. Share
                  your experiences, transformations, and insights with our
                  global community.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-sacred-700 mb-2">
                      Story Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 text-sm">
                    <option>Transformation</option>
                    <option>Service Experience</option>
                    <option>Devotional Experience</option>
                    <option>Miracle/Divine Intervention</option>
                    <option>Learning Journey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-sacred-700 mb-2">
                      Your Name (or Anonymous)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-sacred-700 mb-2">
                      Story Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 text-sm"
                    placeholder="Give your story a meaningful title"
                  />
                </div>

                <button className="btn-primary w-full text-sm py-2">
                    Start Writing
                </button>
              </div>
            </div>
          </div>
        </div>
      )

    case 'pilgrimage':
      return (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
                Sai Pilgrimage Guide
            </h4>
            <p className="text-sacred-600">
                Sacred places and spiritual journeys for deepening your
                connection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pilgrimageGuide.map((place, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-saffron-100 to-orange-100 flex items-center justify-center">
                  <Navigation className="w-16 h-16 text-saffron-600 group-hover:scale-110 transition-transform" />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold text-sacred-800 mb-2">
                    {place.location}
                  </h5>

                  <p className="text-sm text-sacred-600 mb-4">
                    {place.significance}
                  </p>

                  <div className="space-y-2 text-xs text-sacred-500 mb-4">
                    <div>
                      <strong>Best Time:</strong> {place.bestTime}
                    </div>
                    <div>
                      <strong>Duration:</strong> {place.duration}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-sm font-semibold text-sacred-700 mb-2">
                        Must Visit:
                    </h6>
                    <ul className="space-y-1">
                      {place.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-xs text-sacred-600"
                        >
                          <Target className="w-3 h-3 text-saffron-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="btn-secondary w-full text-sm py-2">
                      Plan Visit
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-saffron-50 rounded-2xl p-8">
            <h5 className="text-xl font-semibold text-sacred-800 mb-4">
                Plan Your Spiritual Journey
            </h5>

            <p className="text-sacred-600 mb-6">
                Get personalized pilgrimage recommendations based on your
                spiritual interests and travel preferences
            </p>

            <button className="btn-primary">
                Get Pilgrimage Consultation
            </button>
          </div>
        </div>
      )

    default:
      return null
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-sacred-800 mb-6">
            Celebration
            <span className="text-gradient block py-2">Highlights</span>
          </h2>

          <p className="text-lg text-sacred-600 max-w-3xl mx-auto leading-relaxed">
            Experience the global celebration through multiple dimensions of
            spiritual engagement, service, and community connection.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {highlights.map(highlight => (
            <button
              key={highlight.id}
              onClick={() => setActiveTab(highlight.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === highlight.id
                  ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-sacred-700 hover:bg-saffron-50 hover:text-saffron-600'
              }`}
            >
              <highlight.icon className="w-5 h-5" />
              <span className="hidden sm:block">{highlight.title}</span>
              <span className="sm:hidden">{highlight.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">{renderContent()}</div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
              Join the Global Celebration
            </h3>

            <p className="text-sacred-600 mb-8">
              Be part of this historic centennial celebration. Connect with
              millions of devotees worldwide and experience the transformative
              power of unity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>View All Events</span>
              </button>

              <button className="btn-secondary flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CelebrationHighlights
