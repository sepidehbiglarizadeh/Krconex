import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/cartReducer";
import favReducer from "./fav/favReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  fav: favReducer,
});

export default rootReducer;
