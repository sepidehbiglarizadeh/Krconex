import { ADD_AUTH } from "./authTypes";

export function addAuth(data) {
  return {
    type: ADD_AUTH,
    payload: data,
  };
}
