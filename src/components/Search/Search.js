import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import getAllProductsService from "../../services/getAllProductsService";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProductsService();
        setAllProducts(data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (searchValue !== "") {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts([]);
    }
  }, [searchValue]);

  return (
    <div className="relative">
      <SearchInput
        setSearchValue={setSearchValue}
        products={products}
        searchValue={searchValue}
      />
      <SearchBox products={products} setSearchValue={setSearchValue} />
    </div>
  );
};

export default Search;

const SearchInput = ({ setSearchValue, products, searchValue }) => {
  return (
    <div
      className={`flex items-center mx-2 bg-gray  overflow-hidden p-2 ${
        products.length ? "rounded-t-md" : "rounded-full"
      }`}
    >
      <input
        type="search"
        className="bg-gray border-none outline-none px-2 w-full"
        placeholder="Search ..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Link to="/products" state={{ products }}>
        <button className="text-lightGray" onClick={() => setSearchValue("")}>
          <FaSearch />
        </button>
      </Link>
    </div>
  );
};

const SearchBox = ({ products, setSearchValue }) => {
  return (
    <div
      className={`absolute right-0 left-0 bg-gray rounded-b-md h-0 p-0 mx-2 ${
        products.length ? "h-auto p-4" : ""
      }`}
    >
      <ul>
        {products.slice(0, 3).map((product) => (
          <Link to={`/product/${product.id}`}>
            <li
              key={product.id}
              className="p-2 border-t border-lightGray text-xs"
              onClick={() => setSearchValue("")}
            >
              {product.title}
            </li>
          </Link>
        ))}
        <Link to="/products" state={{ products }}>
          <li
            className={`p-2 border-t border-lightGray text-xs font-bold text-center ${
              products.length ? "block" : "hidden"
            }`}
            onClick={() => setSearchValue("")}
          >
            Show All
          </li>
        </Link>
      </ul>
    </div>
  );
};
