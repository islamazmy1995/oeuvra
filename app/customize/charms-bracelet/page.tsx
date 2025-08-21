'use client'

import { useState } from 'react'
import { Plus, Minus, ChevronDown, Share } from 'lucide-react'

const letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function TerraProductPage() {
  const [selectedLetter, setSelectedLetter] = useState<string>('D')
  const [quantity, setQuantity] = useState<number>(1)
  const [shippingOpen, setShippingOpen] = useState<boolean>(false)
  const [careOpen, setCareOpen] = useState<boolean>(false)
  const [imageError, setImageError] = useState<boolean>(false)

  const getImagePath = (letter: string): string => {
    return `/images/shop/letters/${letter.toLowerCase()}.webp`
  }

  const hasRealImage = (letter: string): boolean => {
    const availableImages: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return availableImages.includes(letter)
  }

  const incrementQuantity = (): void => setQuantity(prev => prev + 1)
  const decrementQuantity = (): void => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  const handleLetterChange = (letter: string): void => {
    setSelectedLetter(letter)
    setImageError(false)
  }

  const ProductImage = () => {
    if (!imageError && hasRealImage(selectedLetter)) {
      return (
        <img
          src={getImagePath(selectedLetter)}
          alt={`Bubbly Initial ${selectedLetter}`}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
        />
      )
    }

    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative w-64 h-80">
          {/* سلسلة علوية */}
          <div className="absolute inset-x-0 top-0 h-32 flex justify-center">
            <div className="w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-sm"></div>
          </div>
          
          {/* القلادة مع الحرف */}
          <div className="absolute inset-x-0 top-24 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-xl flex items-center justify-center border-2 border-yellow-300 transform rotate-12">
              <span className="text-2xl font-bold text-white drop-shadow-lg">
                {selectedLetter}
              </span>
            </div>
          </div>
          
          {/* سلسلة سفلية */}
          <div className="absolute inset-x-0 bottom-0 h-32 flex justify-center">
            <div className="w-1 h-full bg-gradient-to-b from-yellow-600 to-yellow-400 rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <ProductImage />
            </div>
            
            {/* صورة مصغرة إضافية أو معلومات */}
            <div className="text-center">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                hasRealImage(selectedLetter) 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {hasRealImage(selectedLetter) ? '📸 صورة حقيقية' : '🎨 تصميم تفاعلي'}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Brand and Title */}
            <div className="text-center lg:text-left">
              <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">TERRA</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Bubbly initials</h1>
              <div className="flex items-baseline justify-center lg:justify-start space-x-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">LE 350.00 EGP</span>
              </div>
              <p className="text-sm text-gray-600">Tax included.</p>
            </div>

            {/* Letter Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center lg:text-left">letter</label>
              <div className="grid grid-cols-6 gap-3 max-w-md mx-auto lg:mx-0">
                {letters.map((letter: string) => (
                  <button
                    key={letter}
                    onClick={() => handleLetterChange(letter)}
                    className={`aspect-square rounded-full border-2 text-sm font-semibold transition-all duration-200 hover:scale-110 relative ${
                      selectedLetter === letter
                        ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md'
                    }`}
                  >
                    {letter}
                    {/* مؤشر وجود صورة حقيقية */}
                    {hasRealImage(letter) && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* معلومة مساعدة */}
              <div className="text-center lg:text-left mt-3">
                <p className="text-xs text-gray-500">
                  النقطة الخضراء تشير لوجود صورة حقيقية • الحروف الأخرى تظهر تصميماً تفاعلياً
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-lg w-32">
                <button
                  onClick={decrementQuantity}
                  className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  disabled={quantity === 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center py-3 font-medium">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white border border-gray-300 text-gray-900 py-4 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm">
                Add to cart
              </button>
              
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-medium transition-colors shadow-lg">
                Buy it now
              </button>
            </div>

            {/* Product Features */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Stainless steel - don&apos;t rust or change color</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Water resistant & hypoallergenic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Available in all 26 letters</span>
                </div>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-4">
              {/* Shipping & Returns */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setShippingOpen(!shippingOpen)}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-orange-600 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span className="font-medium">Shipping & Returns</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${shippingOpen ? 'rotate-180' : ''}`} />
                </button>
                {shippingOpen && (
                  <div className="pb-4 text-sm text-gray-600 space-y-2 bg-gray-50 rounded-lg p-4 -mt-2">
                    <p>🚚 Free shipping on orders over LE 500</p>
                    <p>⏱️ 3-5 business days delivery</p>
                    <p>🔄 30-day return policy</p>
                    <p>✅ Satisfaction guarantee</p>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setCareOpen(!careOpen)}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-orange-600 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="font-medium">Care Instructions</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${careOpen ? 'rotate-180' : ''}`} />
                </button>
                {careOpen && (
                  <div className="pb-4 text-sm text-gray-600 space-y-2 bg-gray-50 rounded-lg p-4 -mt-2">
                    <p>🧽 Clean with soft cloth</p>
                    <p>🚫 Avoid harsh chemicals</p>
                    <p>📦 Store in a dry place</p>
                    <p>🏊‍♀️ Remove before swimming</p>
                  </div>
                )}
              </div>
            </div>

            {/* Share Button */}
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors">
              <Share className="w-4 h-4" />
              <span className="text-sm font-medium">Share this product</span>
            </button>
          </div>
        </div>

        {/* Image Status Info */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="ml-2 text-blue-600">{selectedLetter}</span>
            </div>
            <div>
              <span className="ml-2 text-blue-600">
              </span>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}