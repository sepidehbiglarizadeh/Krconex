import http from "./httpServices";

const getOneProductService = (id) => {
    return http.get(`/products/${id}`);
}
 
export default getOneProductService;