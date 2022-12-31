import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getOneProductService from "../services/getOneProductService";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { FaRegHeart } from "react-icons/fa";
import RadioBtns from "../common/RadioBtns/RadioBtns";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartActions";
import checkInCart from "../utils/checkInCart";

const SingleProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const productImages = product
    ? [
        { image: product.imageUrl },
        { image: product.imageUrl2 },
        { image: product.imageUrl3 },
        { image: product.imageUrl4 },
      ]
    : [];
  const [current, setCurrent] = useState(0);
  const [sizeValue, setSizeValue] = useState("");

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const nextSlide = () => {
    setCurrent(current === productImages.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? productImages.length - 1 : current - 1);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getOneProductService(parseInt(params.id));
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  const radioChangeHandler = (e) => {
    setSizeValue(e.target.value);
  };

  return (
    <section className="pt-4 mb-6 md:flex md:gap-x-10">
      <ImageSlider
        productImages={productImages}
        current={current}
        setCurrent={setCurrent}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <div className="md:w-1/2">
        <div className="px-4 flex flex-col items-center md:items-start gap-y-4">
          <h2 className="text-xl font-bold uppercase">{product.title}</h2>
          <div className="flex items-center gap-x-5">
            <span className="text-xl font-bold">${product.price}</span>
            <button className="flex items-center gap-x-2 font-bold">
              <FaRegHeart />
              Add To WishList
            </button>
          </div>
          <RadioBtns
            sizeValue={sizeValue}
            setSizeValue={setSizeValue}
            radioChangeHandler={radioChangeHandler}
          />
          <button
            className="bg-primaryYellow w-full md:w-[70%] rounded-md py-2 uppercase font-bold disabled:opacity-50"
            disabled={
              sizeValue === ""
                ? true
                : checkInCart(cart.cart, product)
                ? true
                : false
            }
            onClick={() => dispatch(addToCart({ product, size: sizeValue }))}
          >
            {checkInCart(cart.cart, product) ? "In Cart" : "Add To Cart"}
          </button>
        </div>
        <ProductDescription />
      </div>
    </section>
  );
};

export default SingleProductPage;
