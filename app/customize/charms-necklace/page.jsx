"use client"

import React, { useState } from 'react'
import { Minus, Plus, ChevronDown, Share } from 'lucide-react'

const CharmNecklaceProduct = () => {
  const [selectedChains, setSelectedChains] = useState('SELECT THE CHAINS')
  const [selectedCharms, setSelectedCharms] = useState([])
  const [selectedBase, setSelectedBase] = useState(1) 
  const [quantity, setQuantity] = useState(1)
  const [shippingOpen, setShippingOpen] = useState(false)
  const [careOpen, setCareOpen] = useState(false)

  const chainOptions = [
    'SELECT THE CHAINS',
    'CENTER CHARM', 
    'CHARM 2'
  ]

  const charmOptions = [
    'CHARM 3',
    'CHARM 4', 
    'CHARM 5',
    'CHARM 6',
    'CHARM 7',
    'CHARM 8',
    'CHARM 9'
  ]

  const baseColors = [
    { id: 0, color: '#C0C0C0', name: 'Silver', image: '/images/materials/Hand.webp' },
    { id: 1, color: '#D4AF37', name: 'Gold', image: '/images/materials/foot.webp' },
    { id: 2, color: '#CD7F32', name: 'Bronze', image: '/images/materials/bronze.webp' },
    { id: 3, color: '#E5E4E2', name: 'Platinum', image: '/images/materials/platinum.webp' },
    { id: 4, color: '#B87333', name: 'Copper', image: '/images/materials/copper.webp' },
    { id: 5, color: '#FFB6C1', name: 'Rose Gold', image: '/images/materials/rose-gold.webp' }
  ]

  const price = 300.00
  
  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const handleCharmToggle = (charm) => {
    setSelectedCharms(prev => 
      prev.includes(charm) 
        ? prev.filter(c => c !== charm)
        : [...prev, charm]
    )
  }

  const addToCart = () => {
    const product = {
      id: 'charms-necklace-4',
      name: 'charms Necklace',
      price: price,
      quantity: quantity,
      image: "/images/categories/foot.webp",
      customization: {
        chains: selectedChains,
        charms: selectedCharms,
        base: baseColors[selectedBase].name
      }
    }
    console.log('Adding to cart:', product)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/images/categories/foot.webp" 
                alt="Charms Necklace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light text-gray-800 mb-6">
                charms Necklace
              </h1>
              <p className="text-2xl font-light text-gray-800 mb-6">
                EGP {(price * quantity).toFixed(2)}
              </p>
            </div>

            {/* Chain Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800 tracking-wider">
                CHAIN OPTIONS
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {chainOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedChains(option)}
                    className={`p-3 text-sm border rounded-lg transition-colors ${
                      selectedChains === option
                        ? 'border-gray-800 bg-gray-800 text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Charm Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800 tracking-wider">
                SELECT CHARMS
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {charmOptions.map((charm) => (
                  <button
                    key={charm}
                    onClick={() => handleCharmToggle(charm)}
                    className={`p-3 text-sm border rounded-lg transition-colors ${
                      selectedCharms.includes(charm)
                        ? 'border-gray-800 bg-gray-800 text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {charm}
                  </button>
                ))}
              </div>
            </div>

            {/* Chain Base Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800 tracking-wider">
                SELECT CHAINS BASE
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {baseColors.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setSelectedBase(material.id)}
                    className={`relative border-2 rounded-lg overflow-hidden transition-all hover:scale-105 ${
                      selectedBase === material.id
                        ? 'border-gray-800 ring-2 ring-gray-800'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={material.image}
                        alt={material.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to color if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div 
                        className="w-full h-full hidden"
                        style={{ backgroundColor: material.color }}
                      />
                    </div>
                    <div className="p-2 bg-white">
                      <span className="text-xs font-medium text-gray-700">
                        {material.name}
                      </span>
                    </div>
                    {selectedBase === material.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
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
              <button 
                onClick={addToCart}
                className="w-full bg-white border border-gray-300 text-gray-900 py-4 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
              >
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
                  <span>Stainless steel - don't rust or change color</span>
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

            {/* Selected Configuration Summary */}
            {(selectedCharms.length > 0 || selectedChains !== 'SELECT THE CHAINS') && (
              <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Your Configuration:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {selectedChains !== 'SELECT THE CHAINS' && (
                    <p>Chain: {selectedChains}</p>
                  )}
                  {selectedCharms.length > 0 && (
                    <p>Charms: {selectedCharms.join(', ')}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <span>Base:</span>
                    <img 
                      src={baseColors[selectedBase].image} 
                      alt={baseColors[selectedBase].name}
                      className="w-6 h-6 rounded object-cover border"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'inline';
                      }}
                    />
                    <span 
                      className="w-6 h-6 rounded border hidden"
                      style={{ backgroundColor: baseColors[selectedBase].color }}
                    />
                    <span>{baseColors[selectedBase].name}</span>
                  </div>
                  <p>Quantity: {quantity}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharmNecklaceProduct