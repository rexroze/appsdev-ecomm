import { useState } from 'react';

function CheckoutPage({ cart }) {
	const [ordered, setOrdered] = useState(false);
	const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
	if (ordered) {
		return <div className="text-center py-20"><h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2><p>Your order has been placed.</p></div>;
	}
	return (
		<div className="max-w-xl mx-auto bg-white rounded shadow p-6">
			<h2 className="text-2xl font-bold mb-4">Checkout</h2>
			<ul className="divide-y mb-6">
				{cart.map(({ product, quantity }) => (
					<li key={product.id} className="py-2 flex justify-between">
						<span>{product.title} x {quantity}</span>
						<span>${(product.price * quantity).toFixed(2)}</span>
					</li>
				))}
			</ul>
			<div className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</div>
			<button onClick={() => setOrdered(true)} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full">Place Order</button>
		</div>
	);
}

export default CheckoutPage;
