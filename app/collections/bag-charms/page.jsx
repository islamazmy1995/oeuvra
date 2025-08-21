"use client"

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const BagCharmsCollection = () => {
  const [availabilityFilter, setAvailabilityFilter] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')
  const [sortBy, setSortBy] = useState('Date, old to new')

  const products = [
    {
      id: 1,
      name: 'Farida',
      price: 400.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#D2691E'
    },
    {
      id: 2,
      name: 'cotton candy',
      price: 655.00,
      image:"/images/categories/foot.webp",
      soldOut: true,
      color: '#CD5C5C'
    },
    {
      id: 3,
      name: 'nature',
      price: 550.00,
      image:"/images/categories/foot.webp",
      soldOut: true,
      color: '#D2691E'
    },
    {
      id: 4,
      name: 'Sunshine',
      price: 415.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#CD5C5C'
    },
    {
      id: 5,
      name: 'Ocean Breeze',
      price: 380.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#4682B4'
    },
    {
      id: 6,
      name: 'Cherry Blossom',
      price: 520.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#FFB6C1'
    },
    {
      id: 7,
      name: 'Forest Green',
      price: 445.00,
      image:"/images/categories/foot.webp",
      soldOut: true,
      color: '#228B22'
    },
    {
      id: 8,
      name: 'Sunset',
      price: 590.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#FF6347'
    },
    {
      id: 9,
      name: 'Lavender Dream',
      price: 475.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#9370DB'
    },
    {
      id: 10,
      name: 'Golden Hour',
      price: 620.00,
      image:"/images/categories/foot.webp",
      soldOut: true,
      color: '#DAA520'
    },
    {
      id: 11,
      name: 'Midnight Blue',
      price: 505.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#191970'
    },
    {
      id: 12,
      name: 'Rose Garden',
      price: 435.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#FF69B4'
    },
    {
      id: 13,
      name: 'Mint Fresh',
      price: 365.00,
      image:"/images/categories/foot.webp",
      soldOut: false,
      color: '#98FB98'
    }
  ]

  const filteredProducts = products.filter(product => {
    if (availabilityFilter === 'In stock' && product.soldOut) return false
    if (availabilityFilter === 'Out of stock' && !product.soldOut) return false
    return true
  })

  const ProductCard = ({ product }) => (
    <div className="group cursor-pointer">
      <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.soldOut && (
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs rounded-full">
            Sold out
          </div>
        )}
      </div>
      <div 
        className="text-white p-4 rounded-b-lg"
        style={{ backgroundColor: product.color }}
      >
        <h3 className="font-medium text-lg mb-2">{product.name}</h3>
        <p className="text-sm font-light">LE {product.price.toFixed(2)} EGP</p>
      </div>
    </div>
  )

  const DropdownFilter = ({ label, value, onChange, options }) => (
    <div className="relative">
      <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
        <span className="text-sm">{label}:</span>
        <span className="text-sm underline">{value}</span>
        <ChevronDown size={16} />
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-4xl font-light text-gray-900 mb-12">Bag charms</h1>
        
        {/* Filters and Sort */}
        <div className="flex justify-between items-center mb-8 pb-4">
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-700">Filter:</span>
            <DropdownFilter 
              label="Availability" 
              value={availabilityFilter}
              onChange={setAvailabilityFilter}
              options={['All', 'In stock', 'Out of stock']}
            />
            <DropdownFilter 
              label="Price" 
              value={priceFilter}
              onChange={setPriceFilter}
              options={['All', 'Low to high', 'High to low']}
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Sort by:</span>
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                <span className="underline">{sortBy}</span>
                <ChevronDown size={16} />
              </button>
            </div>
            <span className="text-sm text-gray-500">{filteredProducts.length} products</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button (if needed) */}
        {filteredProducts.length === 13 && (
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BagCharmsCollection