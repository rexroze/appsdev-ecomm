import { useState, useEffect } from 'react';
import Filterbar from './Filterbar.jsx';
import ProductCard from './ProductCard.jsx';

function Home({ addToCart }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [filters, setFilters] = useState({ search: '', category: '', sort: '', minPrice: '', maxPrice: '' });
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const limit = 12;

	useEffect(() => {
		   setLoading(true);
		   let url = '';
		   if (filters.search) {
			   url = `https://dummyjson.com/products/search?q=${encodeURIComponent(filters.search)}&limit=${limit}&skip=${(page-1)*limit}`;
		   } else if (filters.category) {
			   url = `https://dummyjson.com/products/category/${encodeURIComponent(filters.category)}?limit=${limit}&skip=${(page-1)*limit}`;
		   } else {
			   url = `https://dummyjson.com/products?limit=${limit}&skip=${(page-1)*limit}`;
		   }
		   fetch(url)
			   .then(res => res.json())
			   .then(data => {
				   setProducts(data.products);
				   setTotal(data.total);
				   setLoading(false);
			   })
			   .catch(e => { setError('Failed to load products'); setLoading(false); });
	}, [filters, page]);

	const handleFilter = (newFilters) => {
		setFilters(f => ({ ...f, ...newFilters }));
		setPage(1);
	};

	if (loading) return <div>Loading products...</div>;
	if (error) return <div className="text-red-500">{error}</div>;

		return (
			<div>
				<Filterbar onFilter={handleFilter} />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
					{products.map(product => (
						<ProductCard key={product.id} product={product} addToCart={addToCart} />
					))}
				</div>
				<div className="flex justify-center mt-8 gap-2">
					<button disabled={page === 1} onClick={() => setPage(p => p-1)} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
					<span>Page {page}</span>
					<button disabled={page*limit >= total} onClick={() => setPage(p => p+1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
				</div>
			</div>
		);
	}

export default Home;
