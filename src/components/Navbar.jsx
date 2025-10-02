import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
	return (
		<nav className="flex items-center justify-between py-4 px-6 bg-white shadow mb-6">
			<div>
				<Link to="/" className="text-xl font-bold text-gray-800">RexShop</Link>
			</div>
			<div className="flex gap-6 items-center">
				<Link to="/cart" className="relative">
					<span className="material-icons align-middle">Cart</span>
					{cartCount > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{cartCount}</span>
					)}
				</Link>
				<Link to="/checkout" className="text-gray-700 hover:text-black">Checkout</Link>
			</div>
		</nav>
	);
}

export default Navbar;
