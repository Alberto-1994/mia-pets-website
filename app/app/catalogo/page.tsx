"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search,
  Filter,
  Grid,
  List,
  MessageCircle,
  BookOpen,
  Dog,
  Cat,
  Bird,
  Fish,
  Rabbit,
  Bug,
  ShoppingBag
} from 'lucide-react'
import ProductCard from '@/components/product-card'
import { generateProducts, handleWhatsAppQuote } from '../../lib/products'
import { Product } from '@/types/product'

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [productsRef, productsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Generate 100 products from all categories
  const allProducts = [
    ...generateProducts('perros', 15),
    ...generateProducts('gatos', 15),
    ...generateProducts('aves', 15),
    ...generateProducts('peces', 15),
    ...generateProducts('roedores', 15),
    ...generateProducts('reptiles', 15),
    ...generateProducts('correas', 10)
  ].map((product, index) => ({ ...product, id: index + 1 }))

  const categories = [
    { value: 'all', label: 'Todas las categorías', icon: BookOpen },
    { value: 'perros', label: 'Perros', icon: Dog },
    { value: 'gatos', label: 'Gatos', icon: Cat },
    { value: 'aves', label: 'Aves', icon: Bird },
    { value: 'peces', label: 'Peces', icon: Fish },
    { value: 'roedores', label: 'Roedores', icon: Rabbit },
    { value: 'reptiles', label: 'Reptiles', icon: Bug },
    { value: 'correas', label: 'Correas', icon: ShoppingBag },
  ]

  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'category':
          return a.category.localeCompare(b.category)
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const handleSingleQuote = (product: Product) => {
    handleWhatsAppQuote(product)
  }

  const handleMultipleQuote = () => {
    if (selectedProducts.length > 0) {
      handleWhatsAppQuote(selectedProducts)
      setSelectedProducts([])
    }
  }

  const toggleProductSelection = (product: Product) => {
    setSelectedProducts(prev => {
      const isSelected = prev.find(p => p.id === product.id)
      if (isSelected) {
        return prev.filter(p => p.id !== product.id)
      } else {
        return [...prev, product]
      }
    })
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gradient-to-r from-purple-600 to-cyan-600"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Catálogo General</h1>
            <p className="text-xl opacity-90">
              Explora todos nuestros productos en un solo lugar
            </p>
            <div className="mt-6 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {allProducts.length} productos disponibles
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500"
            >
              <option value="name">Ordenar por Nombre</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="category">Categoría</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 text-center text-gray-600">
            Mostrando {filteredProducts.length} de {allProducts.length} productos
          </div>

          {/* Multiple Quote Button */}
          {selectedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <button
                onClick={handleMultipleQuote}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Cotizar {selectedProducts.length} productos seleccionados
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products */}
      <section ref={productsRef} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'grid grid-cols-1 md:grid-cols-2 gap-6'
          }>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index % 20) * 0.05 }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  onQuote={handleSingleQuote}
                  onSelect={toggleProductSelection}
                  isSelected={!!selectedProducts.find(p => p.id === product.id)}
                  showSelection={true}
                />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
              <p className="text-gray-600">
                Intenta con otros términos de búsqueda o cambia los filtros
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CatalogPage