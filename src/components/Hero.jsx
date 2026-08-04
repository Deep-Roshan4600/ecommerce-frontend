import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shop Smarter, Live Better
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Discover thousands of products at unbeatable prices, delivered to your door.
        </p>
        
        <Link
          to="/products"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}

export default Hero