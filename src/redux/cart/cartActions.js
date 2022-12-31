import { ADD_TO_CART, DELETE_FROM_CART } from "./cartTypes";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: product,
  };
}
