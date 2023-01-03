import { ADD_AUTH } from "./authTypes";

const initialState = {
  auth: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTH: {
      return { ...state, auth: action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;
