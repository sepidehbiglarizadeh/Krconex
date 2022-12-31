import { useSelector } from "react-redux";
import Backdrop from "../Backdrop/Backdrop";
import {
  FaTimes,
  FaChevronUp,
  FaChevronDown,
  FaTrashAlt,
} from "react-icons/fa";
import { useState } from "react";

const Cart = ({ showCart, setShowCart }) => {
  const cart = useSelector((state) => state.cart);
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <>
      <Backdrop isShow={showCart} setIsShow={setShowCart} />
      <div
        className={`fixed top-0 bottom-0 -right-[500vw] bg-white z-40 w-[85%] sm:w-3/5 md:w-[30%] p-4 md:px-7  transition-all duration-300 flex flex-col ${
          showCart ? "-right-0" : ""
        }`}
      >
        <div className="flex justify-end text-2xl mb-3">
          <button onClick={() => setShowCart((prevState) => !prevState)}>
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl capitalize font-bold mb-6">
          my basket ({cart.cart.length})
        </h2>
        <section className="h-full overflow-auto border-t border-lightGray">
          {cart.cart.map((item) => (
            <CartItem item={item} />
          ))}
        </section>
        <CartDetail
          cart={cart}
          isShowDetail={isShowDetail}
          setIsShowDetail={setIsShowDetail}
        />
      </div>
    </>
  );
};

export default Cart;

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between gap-x-2 border-b border-lightGray py-4">
      <div className="flex items-center gap-x-2">
        <div className="max-w-[120px]">
          <img src={item.imageUrl} />
        </div>
        <div className=" flex flex-col gap-y-3 text-sm">
          <span className="font-bold ">${item.price}</span>
          <p>{item.title}</p>
          <span>{item.size}</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-center text-sm border-r border-lightGray pr-2">
          <button>
            <FaChevronUp />
          </button>
          <span>{item.quantity}</span>
          <button>
            <FaChevronDown />
          </button>
        </div>
        <div className="text-sm pl-2">
          <button>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

const CartDetail = ({ cart, isShowDetail, setIsShowDetail }) => {
  return (
    <section className="topShadow">
      <div
        className={`py-2 h-0 overflow-hidden opacity-0 transition-all duration-300 ${
          isShowDetail ? "h-auto opacity-100" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <span>Subtotal</span>
          <span className="font-bold">${cart.total}</span>
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
        <button
          className="bg-darkGray text-white py-2 rounded-md w-full uppercase font-bold p-2 disabled:opacity-50"
          disabled={cart.cart.length ? false : true}
        >
          Process Order
        </button>
      </div>
    </section>
  );
};
