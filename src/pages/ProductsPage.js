import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import getAllProductsService from "../services/getAllProductsService";
import Filter from "../components/Filter/Filter";
import Product from "../components/Product/Product";
import _ from "lodash";

const ProductsPage = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(false);
  const [colsNum, setColsNum] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await getAllProductsService();
        setProducts(data.filter((item) => item.gender === query.gender));
        setAllProducts(data.filter((item) => item.gender === query.gender));
      } catch (error) {
        setError(true);
      }
    };
    getAllProducts();
  }, [location.search]);

  const sortProductsHandler = (e) => {
    const value = e.target.value;
    const cloneAllProducts = [...allProducts];
    if (value === "highest") {
      const orderedByHighest = _.orderBy(cloneAllProducts, ["price"], "desc");
      setAllProducts(orderedByHighest);
    } else {
      const orderedByLowest = _.orderBy(cloneAllProducts, ["price"], "asc");
      setAllProducts(orderedByLowest);
    }
  };

  const filterProductsHandler = (e) => {
    const value = e.target.value;
    if (value === "") {
      setAllProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.type === value
      );
      setAllProducts(filteredProducts);
    }
  };

  let renderValue = <p>loading...</p>;

  if (products.length) {
    renderValue = allProducts.map((product) => {
      return (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <Product product={product} />
          </Link>
        </div>
      );
    });
  }

  if (error) {
    renderValue = <p>Fetching Data Failed</p>;
  }

  return (
    <section className="py-6">
      <Filter
        products={allProducts}
        setColsNum={setColsNum}
        sortProductsHandler={sortProductsHandler}
        filterProductsHandler={filterProductsHandler}
      />
      <div
        className={`grid xs:gap-x-4 gap-y-8 ${
          colsNum === 1
            ? "grid-cols-1"
            : colsNum === 2
            ? "grid-cols-2"
            : colsNum === 3
            ? "grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        } px-4 `}
      >
        {renderValue}
      </div>
    </section>
  );
};

export default ProductsPage;
