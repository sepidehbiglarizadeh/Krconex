import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import getAllProductsService from "../services/getAllProductsService";

const ProductsPage = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await getAllProductsService();
        setProducts(data.filter((item) => item.gender === query.gender));
      } catch (error) {
        setError(true);
      }
    };
    getAllProducts();
  }, [location.search]);

  let renderValue = <p>loading...</p>;

  if (products.length) {
    renderValue = products.map((product) => {
      return (
        <Link to={`/product/${product.id}`}>
          <div
            key={product.id}
            className="transition-all duration-500 rounded-md p-3 hover:scale-105 hover:shadow-md"
          >
            <img src={product.imageUrl} alt="clothes" className="mb-4" />
            <h3 className="font-bold text-xl mb-3">{product.title}</h3>
            <span className="inline-block mb-3 text-xs bg-gray rounded-xl p-2">
              {product.gender}
            </span>
            <span className="block font-bold text-lg">${product.price}</span>
          </div>
        </Link>
      );
    });
  }

  if (error) {
    renderValue = <p>Fetching Data Failed</p>;
  }

  return (
    <section className="px-4 py-6">
      <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderValue}
      </div>
    </section>
  );
};

export default ProductsPage;
