
import { useState } from 'react';

function CheckoutPage({ cart, setCart }) {
       const [ordered, setOrdered] = useState(false);
       const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
       const handleOrder = () => {
	       setOrdered(true);
	       setCart([]);
       };
       if (ordered) {
	       return <div className="text-center py-20"><h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2><p>Your order has been placed.</p></div>;
       }
       return (
		  <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10">
			  <h2 className="text-3xl font-bold mb-6 text-blue-700">Checkout</h2>
			  <ul className="divide-y mb-8">
				  {cart.map(({ product, quantity }) => (
					  <li key={product.id} className="py-3 flex justify-between items-center">
						  <span className="font-medium">{product.title} <span className="text-gray-400">x {quantity}</span></span>
						  <span className="font-semibold">${(product.price * quantity).toFixed(2)}</span>
					  </li>
				  ))}
			  </ul>
			  <div className="text-2xl font-bold mb-6 text-blue-700">Total: ${total.toFixed(2)}</div>
			  <button onClick={handleOrder} className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow w-full transition">Place Order</button>
		  </div>
       );
}

export default CheckoutPage;
