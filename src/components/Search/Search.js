import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex items-center mx-2 bg-gray rounded-full overflow-hidden p-2">
      <input
        type="search"
        className="bg-gray border-none outline-none px-2 w-full"
        placeholder="Search ..."
      />
      <span className="text-lightGray">
        <FaSearch />
      </span>
    </div>
  );
};

export default Search;
