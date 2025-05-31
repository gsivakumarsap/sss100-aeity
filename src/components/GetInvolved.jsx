import React, { useState } from 'react'
import { 
  UserPlus, 
  GraduationCap, 
  Heart, 
  Share2, 
  ArrowRight,
  Users,
  Globe,
  Star,
  CheckCircle,
} from 'lucide-react'

const GetInvolved = () => {
  const [selectedProgram, setSelectedProgram] = useState(null)

  const programs = [
    {
      id: 'volunteer',
      icon: UserPlus,
      title: 'Become a Volunteer',
      subtitle: 'Serve with love and dedication',
      description: 'Join thousands of volunteers worldwide in various service activities including food distribution, medical camps, educational support, and community development projects.',
      benefits: [
        'Connect with like-minded individuals',
        'Develop leadership skills',
        'Make a meaningful impact',
        'Spiritual growth through service',
      ],
      commitment: 'Flexible - 2+ hours per month',
      locations: '150+ cities worldwide',
    },
    {
      id: 'courses',
      icon: GraduationCap,
      title: 'Enroll in Sai Courses',
      subtitle: 'Transform through spiritual education',
      description: 'Comprehensive courses on spiritual development, value-based living, meditation practices, and the teachings of Sri Sathya Sai Baba.',
      benefits: [
        'Structured spiritual learning',
        'Expert guidance from teachers',
        'Certificate programs available',
        'Online and offline options',
      ],
      commitment: '4-12 weeks per course',
      locations: 'Online & 80+ centers',
    },
    {
      id: 'sponsor',
      icon: Heart,
      title: 'Sponsor a Seva Program',
      subtitle: 'Enable transformation through giving',
      description: 'Support various service programs including education, healthcare, infrastructure development, and emergency relief efforts across the globe.',
      benefits: [
        'Direct impact on communities',
        'Regular progress updates',
        'Tax benefits available',
        'Recognition and appreciation',
      ],
      commitment: 'One-time or recurring',
      locations: 'Global reach',
    },
    {
      id: 'story',
      icon: Share2,
      title: 'Share Your Sai Story',
      subtitle: 'Inspire others through your journey',
      description: 'Share your personal experiences, transformations, and spiritual insights with the global Sai community to inspire and guide others.',
      benefits: [
        'Inspire others globally',
        'Connect with community',
        'Document your journey',
        'Featured story opportunities',
      ],
      commitment: 'Share anytime',
      locations: 'Digital platform',
    },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Volunteer Coordinator',
      location: 'Mumbai, India',
      quote: 'Volunteering has transformed my life. Every act of service brings me closer to understanding true love and compassion.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b137?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      role: 'Course Graduate',
      location: 'California, USA',
      quote: 'The spiritual courses opened my mind to new perspectives and helped me find inner peace.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Seva Sponsor',
      location: 'Madrid, Spain',
      quote: 'Sponsoring education programs gives me immense joy knowing I am helping children build a better future.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-saffron-50 to-orange-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-sacred-800 mb-6">
            Get
            <span className="text-gradient block">Involved</span>
          </h2>
          
          <p className="text-lg text-sacred-600 max-w-3xl mx-auto leading-relaxed">
            Join our global community of service and transformation. Choose your path 
            to make a meaningful difference in the world.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`card p-8 cursor-pointer transition-all duration-300 ${
                selectedProgram === program.id 
                  ? 'ring-2 ring-saffron-500 shadow-2xl scale-105' 
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <program.icon className="w-8 h-8 text-saffron-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-elegant font-semibold text-sacred-800 mb-2">
                    {program.title}
                  </h3>
                  
                  <p className="text-saffron-600 font-medium mb-3">
                    {program.subtitle}
                  </p>
                  
                  <p className="text-sacred-600 leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {selectedProgram === program.id && (
                    <div className="space-y-4 animate-slide-up">
                      <div>
                        <h4 className="font-semibold text-sacred-800 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {program.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm text-sacred-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-sacred-700">Commitment:</span>
                          <p className="text-sacred-600">{program.commitment}</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-sacred-700">Locations:</span>
                          <p className="text-sacred-600">{program.locations}</p>
                        </div>
                      </div>
                      
                      <button className="btn-primary flex items-center space-x-2 w-full sm:w-auto">
                        <span>Join {program.title.split(' ')[1] || 'Now'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-elegant font-semibold text-sacred-800 mb-4">
              Join Our Global Community
            </h3>
            
            <p className="text-sacred-600">
              Be part of a worldwide movement of love, service, and transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-saffron-600" />
              </div>
              <div className="text-2xl font-bold text-sacred-800">50,000+</div>
              <div className="text-sm text-sacred-600">Active Volunteers</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-saffron-600" />
              </div>
              <div className="text-2xl font-bold text-sacred-800">190+</div>
              <div className="text-sm text-sacred-600">Countries</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-saffron-600" />
              </div>
              <div className="text-2xl font-bold text-sacred-800">25,000+</div>
              <div className="text-sm text-sacred-600">Course Graduates</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-saffron-600" />
              </div>
              <div className="text-2xl font-bold text-sacred-800">1M+</div>
              <div className="text-sm text-sacred-600">Lives Touched</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-elegant font-semibold text-sacred-800 text-center mb-8">
            Stories from Our Community
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                
                <blockquote className="text-sacred-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-sacred-800">{testimonial.name}</div>
                  <div className="text-sm text-saffron-600">{testimonial.role}</div>
                  <div className="text-xs text-sacred-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-saffron-500 to-orange-500 rounded-2xl p-8 text-white">
            <Star className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            
            <h3 className="text-2xl font-elegant font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Take the first step towards meaningful service and spiritual growth. 
              Join thousands who have found purpose through love and dedication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('celebration')}
                className="btn-outline bg-white/10 border-white hover:bg-white hover:text-saffron-600"
              >
                Explore Opportunities
              </button>
              
              <button
                onClick={() => scrollToSection('donate')}
                className="btn-outline bg-white/10 border-white hover:bg-white hover:text-saffron-600"
              >
                Start Contributing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved