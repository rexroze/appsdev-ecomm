import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage({ addToCart }) {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch(`https://dummyjson.com/products/${id}`)
			.then(res => res.json())
			.then(data => { setProduct(data); setLoading(false); })
			.catch(e => { setError('Failed to load product'); setLoading(false); });
	}, [id]);

	if (loading) return <div>Loading product...</div>;
	if (error) return <div className="text-red-500">{error}</div>;
	if (!product) return null;

	return (
		<div className="max-w-3xl mx-auto bg-white rounded shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1">
				<img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded mb-4" />
				<div className="flex gap-2 overflow-x-auto">
					{product.images && product.images.map((img, i) => (
						<img key={i} src={img} alt="" className="w-20 h-20 object-cover rounded border" />
					))}
				</div>
			</div>
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-2">{product.title}</h1>
				<div className="text-gray-500 mb-1">{product.brand}</div>
				<div className="text-xs text-gray-400 mb-2">{product.category}</div>
				<div className="mb-2">Rating: {product.rating} ⭐</div>
				<div className="mb-2">Stock: {product.stock}</div>
				<div className="mb-2">Discount: {product.discountPercentage}%</div>
				<div className="font-bold text-2xl mb-4">${product.price}</div>
				<p className="mb-4">{product.description}</p>
				<button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Add to Cart</button>
			</div>
		</div>
	);
}

export default ProductPage;
