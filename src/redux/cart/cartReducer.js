import { ADD_TO_CART } from "./cartTypes";

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
        return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
