import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops, we couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound