import { FaShoppingBasket, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarIcons = ({ cart, fav,displayCart }) => {
  return (
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
        <button className="relative">
          <span
            className={`${
              fav.length
                ? "absolute -top-4 bg-primaryYellow rounded-full w-5 h-5 text-xs flex justify-center items-center"
                : "hidden"
            }`}
          >
            {fav.length}
          </span>
          <FaRegHeart />
        </button>
      </Link>
    </div>
  );
};

export default NavbarIcons;
