import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBasket,
  FaRegHeart,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import Cart from "../Cart/Cart";

const Navbar = ({ setFixed }) => {
  const [isShow, setIsShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart);

  const displayMenu = () => {
    setIsShow((prevState) => !prevState);
    setFixed((prevState) => !prevState);
  };

  const displayCart = () => {
    setShowCart((prevState) => !prevState);
    setFixed((prevState) => !prevState);
  };

  return (
    <>
      <Backdrop isShow={isShow} setIsShow={setIsShow} setFixed={setFixed} />
      <div className="border-t border-b mb-2 py-2 px-2 sticky top-0 z-20 bg-white">
        <nav
          className={`flex justify-between  md:px-4    2xl:max-w-7xl mx-auto`}
        >
          <div className="flex items-center gap-x-2 flex-1 lg:flex-none">
            <button className="text-2xl lg:hidden" onClick={displayMenu}>
              <FaBars />
            </button>
            <Link to="/">
              <h1 className="font-bold text-xl md:text-3xl">Krconex</h1>
            </Link>
          </div>

          {/* navbar list */}
          <ul className="px-10 text-lg hidden lg:flex flex-1 gap-x-4  items-center justify-around w-full">
            <li className="py-2 hover:font-bold">
              <NavLink end to={{ pathname: "/products", search: "gender=men" }}>
                Men
              </NavLink>
            </li>
            <li className="py-2 hover:font-bold">
              <NavLink to={{ pathname: "/products", search: "gender=women" }}>
                Women
              </NavLink>
            </li>
            <li className="py-2 hover:font-bold">Shipping</li>
            <li className="py-2 hover:font-bold">Clearance</li>
            <li className="py-2 hover:font-bold">Lifestyle</li>
            <li className="py-2 hover:font-bold">Contact</li>
            <li className="py-2 hover:font-bold">Article</li>
          </ul>

          {/* _____serarch_____ */}
          <div className="flex items-center mx-2 bg-gray rounded-full overflow-hidden p-2">
            <input
              type="search"
              className="bg-gray border-none outline-none px-2 w-full"
              placeholder="Search ..."
            />
            <span className="text-lightGray">
              <FaSearch />
            </span>
          </div>

          {/* _____navbar icons_____ */}
          <div className="flex items-center gap-x-2 text-lg">
            <button className="relative" onClick={displayCart}>
              <FaShoppingBasket />
              <span
                className={`${
                  cart.cart.length
                    ? "absolute -top-4 bg-primaryYellow rounded-full w-5 h-5 text-xs flex justify-center items-center"
                    : "hidden"
                }`}
              >
                {cart.cart.length}
              </span>
            </button>
            <Link to="/favourite">
              <FaRegHeart />
            </Link>
          </div>
        </nav>
      </div>

      {/* _____mobile navbar list_____ */}
      <div
        className={`bg-darkGray text-lightGray fixed top-0 bottom-0 -left-[100vh]  p-2 w-60 transition-all duration-300 z-40 ${
          isShow ? "-left-0 " : ""
        } lg:hidden`}
      >
        <button className="text-2xl lg:hidden" onClick={displayMenu}>
          <FaTimes />
        </button>
        <ul className="p-4 text-lg lg:flex lg:gap-x-4  lg:items-center lg:justify-around lg:p-0 w-full">
          <li
            className="border-b py-2 hover:font-bold"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            <NavLink to={{ pathname: "/products", search: "gender=men" }}>
              Men
            </NavLink>
          </li>
          <li
            className="border-b py-2 hover:font-bold"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            <NavLink to={{ pathname: "/products", search: "gender=women" }}>
              Women
            </NavLink>
          </li>
          <li
            className="border-b py-2 hover:font-bold"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            Shipping
          </li>
          <li
            className="border-b py-2 hover:font-bold"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            Clearance
          </li>
          <li
            className="border-b py-2 hover:font-bold"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            Lifestyle
          </li>
          <li
            className="border-b py-2 hover:font-bold"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            Contact
          </li>
          <li
            className="border-b py-2 hover:font-bold"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            Article
          </li>
        </ul>
      </div>
      <Cart
        showCart={showCart}
        setShowCart={setShowCart}
        displayCart={displayCart}
        setFixed={setFixed}
      />
    </>
  );
};

export default Navbar;
