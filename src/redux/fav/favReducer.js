import { ADD_TO_FAV } from "./favTypes";

const initialState = {
  favProducts: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV: {
      const updatedFav = [...state.favProducts];
      const updatedItemIndex = state.favProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedFav.push(action.payload);
        return { ...state, favProducts: updatedFav };
      } else {
        const filteredFavProducts = state.favProducts.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, favProducts: filteredFavProducts };
      }
    }

    default:
      return state;
  }
};

export default favReducer;
