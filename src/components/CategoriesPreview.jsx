import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../services/productService'

function CategoriesPreview() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories()
      console.log('categories data:', data)
      setCategories(data.slice(0, 6))
    }
    fetchCategories()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/products?category=${category.slug}`}
            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center capitalize transition"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoriesPreview