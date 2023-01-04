import { FaChevronUp, FaChevronDown, FaTrashAlt } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../../redux/cart/cartActions";

const CartItem = ({ item, dispatch }) => {
  return (
    <div className="flex justify-between gap-x-2 border-b border-lightGray py-4">
      <div className="flex items-center gap-x-2">
        <div className="max-w-[120px]">
          <img src={item.imageUrl} alt="clothes" />
        </div>
        <div className=" flex flex-col gap-y-3 text-sm">
          <span className="font-bold ">${item.price}</span>
          <p>{item.title}</p>
          <span>{item.size}</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-center text-sm border-r border-lightGray pr-2">
          <button onClick={() => dispatch(addToCart({ product: item }))}>
            <FaChevronUp />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(deleteFromCart(item))}>
            <FaChevronDown />
          </button>
        </div>
        <div className="text-sm pl-2">
          <button onClick={() => dispatch(deleteFromCart(item))}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
