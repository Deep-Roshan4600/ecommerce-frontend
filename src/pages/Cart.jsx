import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPriceINR } from '../utils/formatCurrency'

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <button onClick={clearCart} className="text-sm text-red-500 hover:underline">
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white shadow rounded-lg p-4">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-contain" />

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm capitalize">{item.category}</p>
              <p className="text-blue-600 font-bold mt-1">{formatPriceINR(item.price)}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <p className="w-24 text-right font-semibold">
              {formatPriceINR(item.price * item.quantity)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <div className="bg-gray-50 rounded-lg p-6 w-full md:w-80">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total</span>
            <span className="font-bold text-xl">{formatPriceINR(cartTotal)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition mt-4">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart