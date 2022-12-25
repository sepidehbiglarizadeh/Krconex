import { FaThLarge, FaTh,FaSquare } from "react-icons/fa";

const Filter = ({ products,setColsNum }) => {

  return (
    <div className="flex justify-between items-center border-y border-y-lightGray h-14 mb-6">
      <div className="flex gap-x-4 text-xl px-10 h-full border-r border-r-lightGray">
        <button className="md:hidden" onClick={()=>setColsNum(1)}><FaSquare/></button>
        <button onClick={()=>setColsNum(2)}>
          <FaThLarge />
        </button>
        <button className="hidden md:block" onClick={()=>setColsNum(3)}>
          <FaTh />
        </button>
      </div>
      <div className="flex items-center h-full">
        <div className="hidden sm:flex px-4  h-full border-l border-l-lightGray items-center flex-1 ">
          <p>Showing {products.length} Products</p>
        </div>
        <div className="flex px-4 h-full border-l border-l-lightGray items-center">
          <select className="outline-none h-full">
            <option selected disabled>
              Sort
            </option>
            <option>Highest</option>
            <option>Lowest</option>
          </select>
        </div>
        <div className="flex px-4 h-full border-l border-l-lightGray items-center">
          <select className="outline-none h-full">
            <option selected disabled>
              Filter
            </option>
            <option>Jacket</option>
            <option>Coat</option>
            <option>Jeans</option>
            <option>Trousers</option>
            <option>T-shirt</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
