import { useState, useEffect } from 'react';

function Filterbar({ onFilter }) {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		   fetch('https://dummyjson.com/products/categories')
			   .then(res => res.json())
			   .then(data => {
				   // If API returns array of objects, map to names; else use as is
				   if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') {
					   setCategories(data.map(cat => cat.name || cat.slug || String(cat)));
				   } else {
					   setCategories(data);
				   }
			   });
	}, []);

	return (
		<form className="flex flex-wrap gap-4 items-center" onSubmit={e => { e.preventDefault(); onFilter({ search, category }); }}>
			<input
				type="text"
				placeholder="Search products..."
				value={search}
				onChange={e => setSearch(e.target.value)}
				className="border px-3 py-2 rounded"
			/>
			<select value={category} onChange={e => setCategory(e.target.value)} className="border px-3 py-2 rounded">
				<option value="">All Categories</option>
				   {categories.map(cat => (
					   <option key={cat} value={cat}>{cat}</option>
				   ))}
			</select>
			<button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">Filter</button>
		</form>
	);
}

export default Filterbar;
