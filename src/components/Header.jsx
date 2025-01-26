import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import useOnline from "../Hooks/useOnline";
import userContext from "../Hooks/userContext";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <a href="/">
      <img className="w-38 h-20" alt="logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const user = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center py-0.3 bg-[#603F83FF] text-[#C7D3D4FF]">
      <Title />
      <div className="hidden md:flex space-x-4">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/instamart" className="hover:text-white">InstaMart</Link></li>
          <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          <li><Link to="/cart" className="hover:text-white">Cart ({cartItems?.length})</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <h3>{useOnline() ? "🟢" : "⛔"}</h3>
        <span>{user.name}</span>
        <button
          className="bg-[#C7D3D4FF] text-[#603F83FF] hover:bg-[#603F83FF] hover:text-[#C7D3D4FF] py-2 px-4 rounded">
          Login
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label htmlFor="menu-toggle" className="text-[#C7D3D4FF] text-3xl cursor-pointer peer-checked:hidden">
          ☰
        </label>
        <div className="peer-checked:block hidden absolute top-16 left-0 w-full bg-[#603F83FF] text-[#C7D3D4FF] py-4 px-6">
          <ul className="space-y-4">
            <li><Link to="/" className="block hover:text-white">Home</Link></li>
            <li><Link to="/instamart" className="block hover:text-white">InstaMart</Link></li>
            <li><Link to="/about" className="block hover:text-white">About Us</Link></li>
            <li><Link to="/cart" className="block hover:text-white">Cart ({cartItems?.length})</Link></li>
            <li><Link to="/contact" className="block hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
