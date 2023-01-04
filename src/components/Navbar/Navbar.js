import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import Cart from "../Cart/Cart";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavbarIcons from "../NavbarIcons/NavbarIcons";
import NavbarList from "../NavbarList/NavbarList";
import Search from "../Search/Search";

const Navbar = ({ setFixed }) => {
  const [isShow, setIsShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.fav.favProducts);

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

          <NavbarList />
          <Search />
          <NavbarIcons cart={cart} fav={fav} displayCart={displayCart} />
        </nav>
      </div>

      <MobileMenu displayMenu={displayMenu} isShow={isShow} />
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
