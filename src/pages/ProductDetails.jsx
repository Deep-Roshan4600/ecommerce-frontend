import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { formatPriceINR } from '../utils/formatCurrency'
import LoadingSpinner from '../components/LoadingSpinner'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        setError('Failed to load this product. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <LoadingSpinner />

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-red-500">
        {error}
      </div>
    )
  }

  if (!product) return null

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-lg shadow"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500 capitalize mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-yellow-500 font-semibold">★ {product.rating}</span>
            <span className="text-gray-400 text-sm">
              ({product.stock} in stock)
            </span>
          </div>

          <p className="text-3xl font-bold text-blue-600 mb-6">
            {formatPriceINR(product.price)}
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails