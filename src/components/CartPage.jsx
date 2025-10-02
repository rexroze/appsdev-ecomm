import { Link } from 'react-router-dom';

function CartPage({ cart, removeFromCart, updateCartQuantity }) {
	const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
	return (
		   <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-6">
			   <h2 className="text-3xl font-bold mb-6 text-blue-700">Your Cart</h2>
			   {cart.length === 0 ? (
				   <div className="text-gray-500 text-lg">Your cart is empty.</div>
			   ) : (
				   <div>
					   <ul className="divide-y">
						   {cart.map(({ product, quantity }) => (
							   <li key={product.id} className="flex items-center gap-6 py-6">
								   <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-cover rounded-xl border" />
								   <div className="flex-1">
									   <div className="font-semibold text-lg mb-1">{product.title}</div>
									   <div className="text-gray-500 mb-1">${product.price} x {quantity}</div>
									   <div className="text-xs text-gray-400">{product.brand} | {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace(/-/g, ' ')}</div>
								   </div>
								   <input
									   type="number"
									   min="1"
									   value={quantity}
									   onChange={e => updateCartQuantity(product.id, Number(e.target.value))}
									   className="w-16 border rounded-lg px-2 py-1 text-center shadow-sm"
								   />
								   <button onClick={() => removeFromCart(product.id)} className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow">Remove</button>
							   </li>
						   ))}
					   </ul>
					   <div className="mt-8 flex justify-between items-center">
						   <div className="text-2xl font-bold text-blue-700">Total: ${total.toFixed(2)}</div>
						   <Link to="/checkout" className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow transition">Proceed to Checkout</Link>
					   </div>
				   </div>
			   )}
		   </div>
	);
}

export default CartPage;
