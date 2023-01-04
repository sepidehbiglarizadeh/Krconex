import { useDispatch, useSelector } from "react-redux";
import Backdrop from "../Backdrop/Backdrop";
import {
  FaTimes,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = ({ showCart, setShowCart, displayCart, setFixed }) => {
  const cart = useSelector((state) => state.cart);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Backdrop isShow={showCart} setIsShow={setShowCart} setFixed={setFixed} />
      <div
        className={`fixed top-0 bottom-0  bg-white z-40 w-[85%] sm:w-3/5 md:w-1/3 p-4 md:px-7  transition-all duration-300 flex flex-col ${
          showCart ? "-right-0 " : "-right-[500vw]"
        }`}
      >
        <div className="flex justify-end text-2xl mb-3">
          <button onClick={displayCart}>
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl capitalize font-bold mb-6">
          my basket ({cart.cart.length})
        </h2>
        <section className="h-full overflow-auto border-t border-lightGray">
          {cart.cart.map((item) => (
            <CartItem item={item} dispatch={dispatch} />
          ))}
        </section>
        <CartDetail
          cart={cart}
          isShowDetail={isShowDetail}
          setIsShowDetail={setIsShowDetail}
          displayCart={displayCart}
        />
      </div>
    </>
  );
};

export default Cart;

const CartDetail = ({ cart, isShowDetail, setIsShowDetail, displayCart }) => {
  return (
    <section className="topShadow">
      <div
        className={`py-2 h-0 overflow-hidden opacity-0 transition-all duration-300 ${
          isShowDetail ? "h-auto opacity-100" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <span>Subtotal</span>
          <span className="font-bold">${cart.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Delivery costs</span>
          <span className="font-bold">$4.95</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center font-bold mb-2">
          <span>Total</span>
          <div className="flex items-center gap-x-2">
            <span>
              ${cart.cart.length ? (cart.total + 4.95).toFixed(2) : 0}
            </span>
            <button
              className={`text-xs ${isShowDetail ? "rotate-180" : "rotate-0"}`}
              onClick={() => setIsShowDetail((prevState) => !prevState)}
            >
              <FaChevronUp />
            </button>
          </div>
        </div>
        <Link to="/signin?redirect=checkout">
          <button
            className="bg-darkGray text-white py-2 rounded-md w-full uppercase font-bold p-2 disabled:opacity-50"
            disabled={cart.cart.length ? false : true}
            onClick={displayCart}
          >
            Checkout
          </button>
        </Link>
      </div>
    </section>
  );
};
