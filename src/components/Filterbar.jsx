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
		   <form
			   className="flex flex-wrap gap-4 items-center bg-white shadow-md rounded-xl px-6 py-4 mb-6"
			   onSubmit={e => { e.preventDefault(); onFilter({ search, category }); }}
		   >
			   <input
				   type="text"
				   placeholder="🔍 Search products..."
				   value={search}
				   onChange={e => setSearch(e.target.value)}
				   className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition px-4 py-2 rounded-lg outline-none min-w-[200px] bg-gray-50 shadow-sm"
			   />
			   <select
				   value={category}
				   onChange={e => setCategory(e.target.value)}
				   className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition px-4 py-2 rounded-lg outline-none bg-gray-50 shadow-sm min-w-[180px]"
			   >
				   <option value="">All Categories</option>
				   {categories.map(cat => (
					   <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ')}</option>
				   ))}
			   </select>
			   <button
				   type="submit"
				   className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
			   >
				   Filter
			   </button>
		   </form>
	);
}

export default Filterbar;
