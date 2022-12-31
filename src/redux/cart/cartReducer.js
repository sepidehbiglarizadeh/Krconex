import { ADD_TO_CART, DELETE_FROM_CART } from "./cartTypes";

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
    case DELETE_FROM_CART: {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.price,
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
