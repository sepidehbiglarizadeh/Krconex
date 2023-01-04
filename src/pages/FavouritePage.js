import { render } from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product/Product";

const FavouritePage = () => {
  const fav = useSelector((state) => state.fav.favProducts);

  let renderValue;

  if (fav.length) {
    renderValue = fav.map((product) => (
      <Link to={`/product/${product.id}`}>
        <Product key={product.id} product={product} />
      </Link>
    ));
  } else {
    renderValue = (
      <p className="text-center col-span-4 mt-8">Your WishList is Empty!!</p>
    );
  }

  return (
    <section
      className={
        "grid xs:gap-x-4 gap-y-8 min-h-[50vh] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4"
      }
    >
      {renderValue}
    </section>
  );
};

export default FavouritePage;
