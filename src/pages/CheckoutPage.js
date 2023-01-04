import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart.cart);
  return (
    <section className="p-4  rounded-md sm:flex justify-between max-w-3xl sm:mx-auto sm:my-20 sm:gap-x-2">
      <div className="flex-1 border border-lightGray p-4 rounded-md">
        {cart.cart.map((item) => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
      <div className="p-4 sm:w-[40%] border border-lightGray h-min rounded-md">
        <h3 className="font-bold text-lg mb-5">Cart Detail</h3>
        <div className="flex justify-between items-center mb-4">
          <span>Subtotal</span>
          <span className="font-bold">${cart.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Delivery costs</span>
          <span className="font-bold">$4.95</span>
        </div>
        <div className="flex justify-between items-center font-bold mb-4">
          <span>Total</span>
          <span>${cart.cart.length ? (cart.total + 4.95).toFixed(2) : 0}</span>
        </div>
        <button
          className="bg-darkGray text-white font-bold uppercase w-full py-2 rounded-md disabled:opacity-50"
          disabled={cart.cart.length ? false : true}
        >
          Process Order
        </button>
      </div>
    </section>
  );
};

export default CheckoutPage;
