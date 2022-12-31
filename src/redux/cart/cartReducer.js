import { ADD_TO_CART } from "./cartTypes";

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({
          ...action.payload.product,
          quantity: 1,
          size: action.payload.size,
        });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.product.price,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
