"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './product-card'
import { Product } from '@/types/product'

interface ProductCarouselProps {
  products: Product[]
  onQuote: (product: Product) => void
}

const ProductCarousel = ({ products, onQuote }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= products.length ? 0 : prev + itemsPerView
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, products.length - itemsPerView) : Math.max(0, prev - itemsPerView)
    )
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold gradient-text">Productos Populares</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProducts.map((product, index) => (
          <motion.div
            key={`${product.id}-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
              onQuote={onQuote}
            />
          </motion.div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={`w-3 h-3 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === index
                ? 'bg-purple-600'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel