import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
