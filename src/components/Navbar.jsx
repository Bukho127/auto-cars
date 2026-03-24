import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  RiAccountCircleLine,
  RiGlobalLine,
  RiShoppingBasketLine,
} from "react-icons/ri";
import logo from "../assets/images/auto-cars_logo_alone.svg";

function NavBar() {
  const cartCount = useSelector((state) => state.cart.items.length);
  return (
    <nav className="flex items-center justify-between p-2 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="w-10 ml-10">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="Auto Cars logo" />{" "}
        </NavLink>
      </div>

      <ul className="flex gap-6 font-medium">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="nav-icons flex gap-6 mr-8">
        <RiAccountCircleLine size={24} />
        <RiGlobalLine size={24} />
        <NavLink to="/cart">
          <RiShoppingBasketLine size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-[-5px] -right-[-30px] bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center border border-white rounded-full">
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
