import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 bg-opacity-35 backdrop-blur-md transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Skate or Die</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/products" className="hover:text-red-500 transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4">
          <Link to="/products" className="block hover:text-red-500 transition-colors">Shop</Link>
          <Link to="/about" className="block hover:text-red-500 transition-colors">About</Link>
          <Link to="/contact" className="block hover:text-red-500 transition-colors">Contact</Link>
        </nav>
      )}
    </header>
  )
}

