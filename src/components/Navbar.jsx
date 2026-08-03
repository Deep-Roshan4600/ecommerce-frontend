import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        <Link to="/" className="text-xl font-bold text-blue-600">
          ShopEasy
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
          <Link to="/categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
            🛒
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Products</Link>
          <Link to="/categories" onClick={() => setIsMenuOpen(false)} className="text-gray-700">Categories</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar