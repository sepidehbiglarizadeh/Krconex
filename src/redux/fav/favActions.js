import { ADD_TO_FAV } from "./favTypes";

export function addToFav(data) {
  return {
    type: ADD_TO_FAV,
    payload: data,
  };
}
