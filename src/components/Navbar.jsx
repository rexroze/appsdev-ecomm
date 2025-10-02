
import { Link } from 'react-router-dom';
import cartImg from '../assets/cart.webp';

function Navbar({ cartCount }) {
	return (
		<nav className="flex items-center justify-between py-4 px-6 bg-white shadow mb-6">
			<div>
				<Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-wide hover:text-blue-800 transition">RexShop</Link>
			</div>
			<div className="flex gap-6 items-center">
				   <Link to="/cart" className="relative flex items-center">
					   <img src={cartImg} alt="Cart" className="w-7 h-7 object-contain mr-1 transition-transform duration-150 hover:scale-110" />
					   {cartCount > 0 && (
						   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold border-2 border-white shadow">{cartCount}</span>
					   )}
				   </Link>
				   <Link to="/checkout" className="text-blue-600 hover:text-blue-800 font-semibold transition">Checkout</Link>
			</div>
		</nav>
	);
}

export default Navbar;
