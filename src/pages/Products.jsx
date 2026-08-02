import { useState, useEffect, useMemo } from 'react'
import { getAllProducts, getCategories } from '../services/productService'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'

const PAGE_SIZE = 12

function Products() {
  const [allProducts, setAllProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOption, setSortOption] = useState('default')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(0, 0),
          getCategories(),
        ])
        setAllProducts(productsData.products)
        setCategories(categoriesData)
      } catch (err) {
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [searchTerm, selectedCategory, sortOption])

  const filteredProducts = useMemo(() => {
    let result = allProducts

    if (selectedCategory !== 'all') {
      result = result.filter((product) => product.category === selectedCategory)
    }

    if (searchTerm.trim() !== '') {
      const lowerSearch = searchTerm.toLowerCase()
      result = result.filter((product) =>
        product.title.toLowerCase().includes(lowerSearch)
      )
    }

    if (sortOption === 'price-low-high') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortOption === 'price-high-low') {
      result = [...result].sort((a, b) => b.price - a.price)
    } else if (sortOption === 'alphabetical') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [allProducts, selectedCategory, searchTerm, sortOption])

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + PAGE_SIZE)
  }

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

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 capitalize"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="default">Sort: Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          No products found matching your criteria.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Products