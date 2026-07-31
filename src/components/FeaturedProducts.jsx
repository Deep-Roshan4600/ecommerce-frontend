import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/productService'
import ProductCard from './ProductCard'

function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getAllProducts(8)
        setProducts(data)
      } catch (err) {
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Loading products...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts