import {
  ADD_AUTH,
  ADD_AUTH_TO_STORAGE,
  GET_AUTH_FROM_STOTAGE,
} from "./authTypes";

const auth = null;
const LOCAL_STORAGE_AUTH_KEY = "authState";

const authReducer = (state = auth, action) => {
  switch (action.type) {
    case ADD_AUTH: {
      const data = action.payload;
      return { ...state, data };
    }
    case ADD_AUTH_TO_STORAGE: {
      localStorage.setItem(
        LOCAL_STORAGE_AUTH_KEY,
        JSON.stringify(action.payload)
      );
      return state;
    }
    case GET_AUTH_FROM_STOTAGE: {
      const { accessToken, user } =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
      return { ...state, accessToken, user };
    }

    default:
      return state;
  }
};

export default authReducer;
