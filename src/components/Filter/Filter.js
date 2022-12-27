import { FaThLarge, FaTh, FaSquare } from "react-icons/fa";
import Select from "../../common/Select/Select";

const sortOptions = [
  {id:1, value: "", text: "Sort" },
  {id:2, value: "highest", text: "Highest" },
  {id:3, value: "lowest", text: "Lowest" },
];

const filterOptions = [
  {id:1, value: "", text: "All" },
  {id:2, value: "jacket", text: "Jacket" },
  {id:3, value: "coat", text: "Coat" },
  {id:4, value: "jeans", text: "Jeans" },
  {id:5, value: "trousers", text: "Trousers" },
  {id:6, value: "t-shirt", text: "T-shirt" },
];

const Filter = ({ products, setColsNum,sortProductsHandler ,filterProductsHandler}) => {
  return (
    <div className="flex justify-between items-center border-y border-y-lightGray h-14 mb-6">
      <div className="flex gap-x-4 text-xl px-10 h-full border-r border-r-lightGray">
        <button className="md:hidden" onClick={() => setColsNum(1)}>
          <FaSquare />
        </button>
        <button onClick={() => setColsNum(2)}>
          <FaThLarge />
        </button>
        <button className="hidden md:block" onClick={() => setColsNum(3)}>
          <FaTh />
        </button>
      </div>
      <div className="flex items-center h-full">
        <div className="hidden sm:flex px-4  h-full border-l border-l-lightGray items-center flex-1 ">
          <p>Showing {products.length} Products</p>
        </div>
        <div className="flex px-1 sm:px-4 h-full border-l border-l-lightGray items-center">
          <Select options={sortOptions} changeHandler={sortProductsHandler}/>
        </div>
        <div className="flex px-1 sm:px-4 h-full border-l border-l-lightGray items-center">
          <Select options={filterOptions} changeHandler={filterProductsHandler} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
