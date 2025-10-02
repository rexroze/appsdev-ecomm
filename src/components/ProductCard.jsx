import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
	return (
		<div className="border rounded-lg p-4 flex flex-col bg-white shadow hover:shadow-lg transition">
			<Link to={`/product/${product.id}`}>
				<img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded mb-2" />
				<h2 className="font-semibold text-lg mb-1">{product.title}</h2>
				<div className="text-gray-500 text-sm mb-1">{product.brand}</div>
				<div className="text-xs text-gray-400 mb-2">{product.category}</div>
				<div className="mb-2">Rating: {product.rating} ⭐</div>
				<div className="mb-2">Stock: {product.stock}</div>
				<div className="font-bold text-xl mb-2">${product.price} <span className="text-green-600 text-sm">-{product.discountPercentage}%</span></div>
			</Link>
			<button onClick={() => addToCart(product)} className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
		</div>
	);
}

export default ProductCard;
