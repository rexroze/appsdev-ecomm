import { Link } from 'react-router-dom';

function CartPage({ cart, removeFromCart, updateCartQuantity }) {
	const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Your Cart</h2>
			{cart.length === 0 ? (
				<div>Your cart is empty.</div>
			) : (
				<div>
					<ul className="divide-y">
						{cart.map(({ product, quantity }) => (
							<li key={product.id} className="flex items-center gap-4 py-4">
								<img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover rounded" />
								<div className="flex-1">
									<div className="font-semibold">{product.title}</div>
									<div className="text-gray-500">${product.price} x {quantity}</div>
									<div className="text-xs text-gray-400">{product.brand} | {product.category}</div>
								</div>
								<input
									type="number"
									min="1"
									value={quantity}
									onChange={e => updateCartQuantity(product.id, Number(e.target.value))}
									className="w-16 border rounded px-2 py-1"
								/>
								<button onClick={() => removeFromCart(product.id)} className="text-red-500 ml-2">Remove</button>
							</li>
						))}
					</ul>
					<div className="mt-6 flex justify-between items-center">
						<div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
						<Link to="/checkout" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Proceed to Checkout</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default CartPage;
