import React from 'react'
import { Flower2 } from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-saffron-50 to-orange-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <Flower2 className="w-16 h-16 text-saffron-500 mx-auto animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto border-4 border-saffron-200 border-t-saffron-500 rounded-full animate-spin"></div>
        </div>

        <h2 className="text-2xl font-elegant text-saffron-800 mb-2">
          Sathya Sai 100
        </h2>

        <p className="text-saffron-600 mb-4">
          Loading divine blessings<span className="loading-dots"></span>
        </p>

        <div className="w-48 h-1 bg-saffron-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-saffron-400 to-saffron-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
