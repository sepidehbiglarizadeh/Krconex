const Product = ({product}) => {
  return (
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
  );
};

export default Product;
