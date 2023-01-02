import {
  ADD_AUTH,
  ADD_AUTH_TO_STORAGE,
  GET_AUTH_FROM_STOTAGE,
} from "./authTypes";

export function addAuth(data) {
  return {
    type: ADD_AUTH,
    payload: data,
  };
}

export function addAuthToStorage(data) {
  return {
    type: ADD_AUTH_TO_STORAGE,
    payload: data,
  };
}

export function getAuthFromStorage() {
  return {
    type: GET_AUTH_FROM_STOTAGE,
  };
}
