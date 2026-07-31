function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">ShopEasy</h3>
          <p className="text-sm">Your one-stop shop for everything you need, at prices you'll love.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Cart</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">support@shopeasy.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © 2026 ShopEasy. Built for learning purpose.
      </div>
    </footer>
  )
}

export default Footer