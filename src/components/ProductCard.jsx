import { Link } from 'react-router-dom'
import { formatPriceINR } from '../utils/formatCurrency'

function ProductCard({ product }) {
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
      <p className="text-blue-600 font-bold">{formatPriceINR(product.price)}</p>
    </Link>
  )
}

export default ProductCard