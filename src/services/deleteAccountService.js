import http from "./httpServices";


const deleteAccountService = (id) => {
    return http.delete(`/users/${id}`);
}
 
export default deleteAccountService;