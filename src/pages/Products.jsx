import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/productService'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'

const PAGE_SIZE = 12

function Products() {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInitialProducts = async () => {
      try {
        setLoading(true)
        const data = await getAllProducts(PAGE_SIZE, 0)
        setProducts(data.products)
        setTotal(data.total)
      } catch (err) {
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchInitialProducts()
  }, [])

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true)
      const data = await getAllProducts(PAGE_SIZE, products.length)
      setProducts((prevProducts) => [...prevProducts, ...data.products])
    } catch (err) {
      setError('Failed to load more products.')
    } finally {
      setLoadingMore(false)
    }
  }

  const hasMore = products.length < total

  if (loading) return <LoadingSpinner />

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-red-500">
        {error}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Products