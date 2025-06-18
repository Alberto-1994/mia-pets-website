"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, Star, ShoppingCart } from 'lucide-react'
import { Product } from '@/types/product'

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  onQuote: (product: Product) => void
  onSelect?: (product: Product) => void
  isSelected?: boolean
  showSelection?: boolean
}

const ProductCard = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  category,
  onQuote, 
  onSelect, 
  isSelected = false,
  showSelection = false 
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false)

  const product: Product = { id, name, description, price, image, category }

  const handleQuote = () => {
    onQuote(product)
  }

  const handleSelect = () => {
    if (onSelect) {
      onSelect(product)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`product-card bg-white rounded-lg shadow-lg overflow-hidden relative ${
        isSelected ? 'ring-2 ring-purple-500' : ''
      }`}
    >
      {showSelection && (
        <button
          onClick={handleSelect}
          className={`absolute top-2 right-2 z-10 w-6 h-6 rounded-full border-2 ${
            isSelected 
              ? 'bg-purple-600 border-purple-600' 
              : 'bg-white border-gray-300'
          } flex items-center justify-center`}
        >
          {isSelected && <div className="w-3 h-3 bg-white rounded-full"></div>}
        </button>
      )}

      <div className="aspect-square bg-gray-200 relative">
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <ShoppingCart className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{name}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-purple-600">
            ${price.toFixed(2)}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">4.8</span>
          </div>
        </div>

        <button
          onClick={handleQuote}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          Cotizar
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard