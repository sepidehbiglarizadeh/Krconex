import http from "./httpServices";

const signupService = (data) => {
  return http.post("/register", data);
};

export default signupService;
