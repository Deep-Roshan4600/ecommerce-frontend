import { Link } from 'react-router-dom'
import { formatPriceINR } from '../utils/formatCurrency'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    showToast(`${product.title} added to cart`)
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 object-contain mb-3"
      />
      <h3 className="font-semibold text-sm line-clamp-2 mb-1">{product.title}</h3>
      <p className="text-gray-500 text-xs capitalize mb-2">{product.category}</p>
      <p className="text-blue-600 font-bold mb-3">{formatPriceINR(product.price)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </Link>
  )
}

export default ProductCard