import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBasket,
  FaRegHeart,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {/* _____back drop_____ */}
      <div
        className={`${
          isShow
            ? "fixed top-0 left-0 right-0 bottom-0 bg-darkGray opacity-40 z-20"
            : ""
        }`}
        onClick={()=>setIsShow((prevState)=>!prevState)}
      ></div>

      {/* _____navbar_____ */}
      <nav className="flex justify-between py-2 px-2 md:px-4 border-t border-b mb-2">
        <div className="flex items-center gap-x-2 flex-1 lg:flex-none">
          <button
            className="text-2xl lg:hidden"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            <FaBars />
          </button>
          <Link to="/">
            <h1 className="font-bold text-xl md:text-3xl">Krconex</h1>
          </Link>
        </div>

        {/* _____navbar list_____ */}
        <div
          className={`bg-darkGray text-lightGray fixed top-0 bottom-0 -left-[100vh] z-30  p-2 w-60 transition-all duration-300 ${
            isShow ? "-left-0" : ""
          } lg:opacity-100 lg:static lg:bg-white lg:text-darkGray lg:p-0 lg:w-auto lg:flex-1 lg:flex lg:justify-center lg:px-8`}
        >
          <button
            className="text-2xl lg:hidden"
            onClick={() => setIsShow((prevState) => !prevState)}
          >
            <FaTimes />
          </button>
          <ul className="p-4 text-lg lg:flex lg:gap-x-4  lg:items-center lg:justify-around lg:p-0 w-full">
            <li className="border-b py-2 hover:font-bold lg:border-none">
              Men
            </li>
            <li className="border-b py-2 hover:font-bold lg:border-none">
              Women
            </li>
            <li className="border-b py-2 hover:font-bold lg:border-none">
              Shipping
            </li>
            <li className="border-b py-2 hover:font-bold lg:border-none">
              Clearance
            </li>
            <li className="border-b py-2 hover:font-bold lg:border-none">
              Lifestyle
            </li>
            <li className="border-b py-2 hover:font-bold lg:border-none">
              Contact
            </li>
            <li className="border-b py-2 hover:font-bold lg:border-none">
              Article
            </li>
          </ul>
        </div>

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
          <Link to="/cart">
            <FaShoppingBasket />
          </Link>
          <Link to="/favourite">
            <FaRegHeart />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
