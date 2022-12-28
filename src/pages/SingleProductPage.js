import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getOneProductService from "../services/getOneProductService";

const SingleProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

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
    <section>
      <div></div>
    </section>
  );
};

export default SingleProductPage;
