import React, { useState } from 'react'
import { 
  Camera, 
  Video, 
  BookOpen, 
  Newspaper,
  Play,
  Download,
  Share2,
  Eye,
  Calendar,
  Filter,
  X,
} from 'lucide-react'

const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState('photos')
  const [selectedMedia, setSelectedMedia] = useState(null)

  const categories = [
    { id: 'photos', title: 'Global Seva Photo Gallery', icon: Camera },
    { id: 'videos', title: 'Bhajans, Talks & Live Events', icon: Video },
    { id: 'books', title: 'Teachings & Digital Books', icon: BookOpen },
    { id: 'press', title: 'International Press Coverage', icon: Newspaper },
  ]

  const photoGallery = [
    {
      id: 1,
      title: 'Prasanthi Nilayam Celebration',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      location: 'Puttaparthi, India',
      date: '2025-11-23',
      views: '125K',
    },
    {
      id: 2,
      title: 'Global Service Activities',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      location: 'Multiple Countries',
      date: '2025-11-20',
      views: '89K',
    },
    {
      id: 3,
      title: 'Educational Initiatives',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      location: 'Worldwide',
      date: '2025-11-18',
      views: '67K',
    },
    {
      id: 4,
      title: 'Medical Service Camps',
      image: '',
      location: 'Rural Areas',
      date: '2025-11-15',
      views: '94K',
    },
    {
      id: 5,
      title: 'Youth Engagement Programs',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      location: 'Global',
      date: '2025-11-12',
      views: '78K',
    },
    {
      id: 6,
      title: 'Cultural Celebrations',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      location: 'International',
      date: '2025-11-10',
      views: '102K',
    },
  ]

  const videoContent = [
    {
      id: 1,
      title: 'Centennial Message from Prasanthi Nilayam',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '45:30',
      views: '2.3M',
      date: '2025-11-23',
      category: 'Live Event',
    },
    {
      id: 2,
      title: 'Divine Bhajans Collection',
      thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '1:20:45',
      views: '1.8M',
      date: '2025-11-20',
      category: 'Bhajans',
    },
    {
      id: 3,
      title: 'Spiritual Discourse Series',
      thumbnail: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '35:20',
      views: '956K',
      date: '2025-11-18',
      category: 'Talks',
    },
    {
      id: 4,
      title: 'Global Unity Meditation',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '25:15',
      views: '743K',
      date: '2025-11-15',
      category: 'Meditation',
    },
  ]

  const digitalBooks = [
    {
      id: 1,
      title: 'Sai Satcharitra',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      author: 'Hemadpant',
      pages: 312,
      language: 'Multiple Languages',
      downloads: '500K+',
      format: 'PDF, EPUB',
    },
    {
      id: 2,
      title: 'Bhagavad Gita Commentary',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      author: 'Sri Sathya Sai Baba',
      pages: 480,
      language: '12 Languages',
      downloads: '350K+',
      format: 'PDF, Audio',
    },
    {
      id: 3,
      title: 'Divine Discourses Collection',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      author: 'Sri Sathya Sai Baba',
      pages: 856,
      language: '15 Languages',
      downloads: '750K+',
      format: 'PDF, Audio, Video',
    },
    {
      id: 4,
      title: 'Letters from the Master',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      author: 'Compiled Works',
      pages: 224,
      language: '8 Languages',
      downloads: '280K+',
      format: 'PDF, EPUB',
    },
  ]

  const pressArticles = [
    {
      id: 1,
      title: 'Global Celebration Marks Centennial of Spiritual Legacy',
      publication: 'International Herald',
      date: '2025-11-23',
      excerpt: 'Millions gather worldwide to commemorate 100 years of love, service, and transformation...',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Digital Platform Unites Global Spiritual Community',
      publication: 'Tech & Spirit Magazine',
      date: '2025-11-20',
      excerpt: 'AEITY Systems innovative platform connects devotees across 190 countries...',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '3 min',
    },
    {
      id: 3,
      title: 'Educational Revolution Through Spiritual Values',
      publication: 'Global Education Today',
      date: '2025-11-18',
      excerpt: 'Value-based education initiatives reach over 100,000 students worldwide...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      readTime: '4 min',
    },
  ]

  const renderContent = () => {
    switch (activeCategory) {
    case 'photos':
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoGallery.map((photo) => (
            <div
              key={photo.id}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedMedia({ ...photo, type: 'photo' })}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                  
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{photo.views}</span>
                </div>
                  
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 p-3 rounded-full">
                    <Camera className="w-6 h-6 text-saffron-600" />
                  </div>
                </div>
              </div>
                
              <div className="p-4">
                <h4 className="font-semibold text-sacred-800 mb-2 line-clamp-2">
                  {photo.title}
                </h4>
                  
                <div className="flex items-center justify-between text-sm text-sacred-500">
                  <span>{photo.location}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(photo.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'videos':
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {videoContent.map((video) => (
            <div
              key={video.id}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedMedia({ ...video, type: 'video' })}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                  
                <div className="absolute inset-0 bg-black/30" />
                  
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                  
                <div className="absolute top-4 right-4 bg-saffron-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.category}
                </div>
                  
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-saffron-600 ml-1" />
                  </div>
                </div>
              </div>
                
              <div className="p-4">
                <h4 className="font-semibold text-sacred-800 mb-2 line-clamp-2">
                  {video.title}
                </h4>
                  
                <div className="flex items-center justify-between text-sm text-sacred-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(video.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'books':
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalBooks.map((book) => (
            <div key={book.id} className="card p-6 text-center group">
              <div className="relative mb-4">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-32 h-40 object-cover rounded-lg mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                />
                  
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg" />
              </div>
                
              <h4 className="font-semibold text-sacred-800 mb-2 line-clamp-2">
                {book.title}
              </h4>
                
              <p className="text-sm text-saffron-600 mb-2">{book.author}</p>
                
              <div className="space-y-1 text-xs text-sacred-500 mb-4">
                <div>{book.pages} pages</div>
                <div>{book.language}</div>
                <div>{book.downloads} downloads</div>
                <div>{book.format}</div>
              </div>
                
              <button className="btn-primary text-sm py-2 px-4 w-full flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      )

    case 'press':
      return (
        <div className="space-y-6">
          {pressArticles.map((article) => (
            <div key={article.id} className="card p-6 group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-32 object-cover rounded-lg"
                  />
                </div>
                  
                <div className="md:w-2/3">
                  <div className="flex items-center space-x-2 text-sm text-saffron-600 mb-2">
                    <span className="font-medium">{article.publication}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{article.readTime} read</span>
                  </div>
                    
                  <h3 className="text-xl font-semibold text-sacred-800 mb-3 group-hover:text-saffron-600 transition-colors">
                    {article.title}
                  </h3>
                    
                  <p className="text-sacred-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                    
                  <div className="flex items-center space-x-4">
                    <button className="btn-secondary text-sm py-2 px-4">
                        Read Article
                    </button>
                      
                    <button className="p-2 text-sacred-500 hover:text-saffron-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    default:
      return null
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-sacred-800 mb-6">
            Media
            <span className="text-gradient block">Gallery</span>
          </h2>
          
          <p className="text-lg text-sacred-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of photos, videos, teachings, and press coverage 
            documenting the global celebration and spiritual journey.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg scale-105'
                  : 'bg-white text-sacred-700 hover:bg-saffron-50 hover:text-saffron-600 shadow-md'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="hidden sm:block">{category.title}</span>
              <span className="sm:hidden">{category.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {renderContent()}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary flex items-center space-x-2 mx-auto">
            <Filter className="w-5 h-5" />
            <span>Load More Content</span>
          </button>
        </div>

        {/* Media Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 text-white hover:text-saffron-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              {selectedMedia.type === 'photo' ? (
                <img
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'}
                    title={selectedMedia.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{selectedMedia.title}</h3>
                <p className="text-white/80">{selectedMedia.location || selectedMedia.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MediaGallery