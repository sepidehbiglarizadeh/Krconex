import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import getAllProductsService from "../services/getAllProductsService";

const ProductsPage = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await getAllProductsService();
        setAllProducts(data.filter((item)=> item.gender === query.gender));
      } catch (error) {}
    };
    getAllProducts();
  }, [location.search]);


  return <section>This is ProductsPage</section>;
};

export default ProductsPage;
