import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getOneProductService from "../services/getOneProductService";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const SingleProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const productImages = product
    ? [
        { image: product.imageUrl },
        { image: product.imageUrl2 },
        { image: product.imageUrl3 },
        { image: product.imageUrl4 },
      ]
    : [];

  const [current, setCurrent] = useState(0);

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

  return (
    <section className="pt-4 mb-6">
      <ImageSlider productImages={productImages} current={current} setCurrent={setCurrent} nextSlide={nextSlide} prevSlide={prevSlide}/>
    </section>
  );
};

export default SingleProductPage;
