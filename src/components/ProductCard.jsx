import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
	return (
		   <div className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-200 flex flex-col p-4 group border border-gray-100 hover:border-blue-400">
			   <Link to={`/product/${product.id}`} className="block">
				   <div className="relative overflow-hidden rounded-xl mb-3 h-44 flex items-center justify-center bg-gray-50">
					   <img src={product.thumbnail} alt={product.title} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
					   {product.discountPercentage > 0 && (
						   <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">-{product.discountPercentage}%</span>
					   )}
				   </div>
				   <h2 className="font-semibold text-lg mb-1 truncate">{product.title}</h2>
				   <div className="text-gray-500 text-sm mb-1">{product.brand}</div>
				   <div className="text-xs text-gray-400 mb-2">{product.category.charAt(0).toUpperCase() + product.category.slice(1).replace(/-/g, ' ')}</div>
				   <div className="flex items-center gap-2 mb-2">
					   <span className="text-yellow-400">★</span>
					   <span className="font-medium">{product.rating}</span>
					   <span className="text-gray-400 text-xs">({product.stock} in stock)</span>
				   </div>
				   <div className="font-bold text-xl mb-2">${product.price}</div>
			   </Link>
			   <button onClick={() => addToCart(product)} className="mt-auto bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow transition">Add to Cart</button>
		   </div>
	);
}

export default ProductCard;
