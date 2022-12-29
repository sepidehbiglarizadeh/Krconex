const ProductDescription = () => {
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <ul className="text-sm">
        <li className="font-bold text-lg">Description</li>
        <li>Model size: S</li>
        <li>Model height: 175 cm</li>
        <li>Colour: Grey</li>
      </ul>
      <ul className="text-sm">
        <li className="font-bold text-lg">Composition</li>
        <li>Secondary fabric</li>
        <li>95% polyester</li>
      </ul>
      <ul className="text-sm">
        <li className="font-bold text-base">Secondary fabric</li>
        <li>5% elastene</li>
      </ul>
      <ul className="text-sm">
        <li className="font-bold text-sm">Main fabric</li>
        <li>47% polyester</li>
      </ul>
      <ul className="text-sm">
        <li className="font-bold text-xs">lining</li>
        <li>100% polyester</li>
      </ul>
    </div>
  );
};

export default ProductDescription;
