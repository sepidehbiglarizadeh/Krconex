import http from "./httpServices";

const getAllProductsService = () => {
    return http.get("/products");
}
 
export default getAllProductsService;