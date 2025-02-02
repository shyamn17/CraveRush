import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import useOnline from "../Hooks/useOnline";
import userContext from "../Hooks/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Title = () => {
  return (
    <Link to="/">
    <img className="w-56 h-33 mt-2" alt="logo" src={Logo} />
  </Link>
  );
};

const Header = () => {
  const user = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);
  const isOnline = useOnline(); // Get online status

  return (
    <div className="flex justify-between items-center py-3 px-6 bg-[#603F83FF] text-[#C7D3D4FF]">
      <Title />
      
      {/* Desktop Menu - Now aligned to RHS */}
      <div className="hidden md:flex ml-auto space-x-6 mr-6">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-lg font-semibold hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/instamart" className="text-lg font-semibold hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
              InstaMart
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-semibold hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-lg font-semibold hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      {/* User & Status */}
      <div className="flex items-center space-x-8">
        {/* Cart Icon with Count */}
        <Link to="/cart" className="relative flex items-center">
          <div className={`${cartItems.length > 0 ? 'animate-cart-beat' : ''}`}>
            <FontAwesomeIcon 
              icon={faShoppingCart} 
              className="w-9 h-9 transition-all" 
            />
          </div>
          {cartItems.length > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full text-s px-2">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* User Icon and Online Status */}
        <div className="relative flex flex-col items-center">
          {/* Online/Offline Indicator */}
          <span className={`absolute -top-1 -right-1 rounded-full text-xs px-1`}>
            {isOnline ? "🟢" : "⛔"}
          </span>

          {/* User Icon */}
          <FontAwesomeIcon icon={faUser} className="w-8 h-8 rounded-full border border-gray-300 p-1 ml-6" />
          
          {/* User Name - Slightly moved left */}
          <span className="ml-6">{user?.name || "Guest"}</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#C7D3D4FF] text-3xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#603F83FF] text-[#C7D3D4FF] py-4 px-6 z-50">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/instamart" className="block hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
                InstaMart
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="block hover:bg-white hover:text-[#603F83FF] transition duration-300 px-4 py-2 rounded-lg">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
