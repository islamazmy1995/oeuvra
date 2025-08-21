'use client'

import Link from 'next/link'

import { useState } from 'react'
import { Instagram, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
   
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-orange-600 to-red-500 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Info Section */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold mb-4 text-white">Info</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/contact" 
              className="text-orange-100 hover:text-white transition-colors duration-200 text-sm hover:underline"
            >
              Contact us
            </Link>
            <Link 
              href="/faq" 
              className="text-orange-100 hover:text-white transition-colors duration-200 text-sm hover:underline"
            >
              FAQ
            </Link>
            <Link 
              href="/policies/exchange-refund" 
              className="text-orange-100 hover:text-white transition-colors duration-200 text-sm hover:underline"
            >
              Exchange and Refund Policy
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold mb-4 text-white">Subscribe to our emails</h3>
          
          {isSubscribed ? (
            <div className="max-w-sm mx-auto">
              <div className="bg-green-500 bg-opacity-20 border border-green-400 rounded-lg p-2">
                <p className="text-green-100 font-medium text-sm">✅ Thank you for subscribing!</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="max-w-sm mx-auto">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-transparent border border-orange-300 rounded-l-lg focus:outline-none focus:border-white text-white placeholder-orange-200 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-700 hover:bg-orange-800 border border-orange-700 hover:border-orange-800 rounded-r-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com/Oeuvra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <a
              href="https://facebook.com/Oeuvra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://twitter.com/Oeuvra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="Follow us on Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-orange-400 border-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <p className="text-orange-200 text-xs">
              © {currentYear}, <span className="font-semibold">Oeuvra</span> .
            </p>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="hidden">
        {/* يمكن إضافة ميزات إضافية هنا مثل live chat أو back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}