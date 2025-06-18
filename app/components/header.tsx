"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  Home, 
  Phone, 
  ShoppingBag,
  Dog,
  Cat,
  Bird,
  Fish,
  Rabbit,
  Bug,
  BookOpen
} from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { name: 'Perros', href: '/categoria/perros', icon: Dog },
    { name: 'Gatos', href: '/categoria/gatos', icon: Cat },
    { name: 'Aves', href: '/categoria/aves', icon: Bird },
    { name: 'Peces', href: '/categoria/peces', icon: Fish },
    { name: 'Roedores', href: '/categoria/roedores', icon: Rabbit },
    { name: 'Reptiles', href: '/categoria/reptiles', icon: Bug },
    { name: 'Correas', href: '/categoria/correas', icon: ShoppingBag },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.webp" 
              alt="MIA PETS Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-bold gradient-text">MIA PETS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Inicio</span>
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
                <ShoppingBag className="h-4 w-4" />
                <span>Productos</span>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/catalogo" 
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Catálogo</span>
            </Link>

            <Link 
              href="/contacto" 
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contacto</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white rounded-lg mt-2 shadow-lg"
          >
            <div className="px-4 py-2 space-y-2">
              <Link 
                href="/" 
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Inicio</span>
              </Link>
              
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Link>
              ))}
              
              <Link 
                href="/catalogo" 
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Catálogo</span>
              </Link>
              
              <Link 
                href="/contacto" 
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Contacto</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header