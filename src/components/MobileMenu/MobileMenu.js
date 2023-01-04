import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ displayMenu,isShow }) => {
  return (
    <div
      className={`bg-darkGray text-lightGray fixed top-0 bottom-0 -left-[100vh]  p-2 w-60 transition-all duration-300 z-40 ${
        isShow ? "-left-0 " : ""
      } lg:hidden`}
    >
      <button className="text-2xl lg:hidden" onClick={displayMenu}>
        <FaTimes />
      </button>
      <ul className="p-4 text-lg lg:flex lg:gap-x-4  lg:items-center lg:justify-around lg:p-0 w-full">
        <li className="border-b py-2 hover:font-bold" onClick={displayMenu}>
          <NavLink to={{ pathname: "/products", search: "gender=men" }}>
            Men
          </NavLink>
        </li>
        <li className="border-b py-2 hover:font-bold" onClick={displayMenu}>
          <NavLink to={{ pathname: "/products", search: "gender=women" }}>
            Women
          </NavLink>
        </li>
        <li className="border-b py-2 hover:font-bold" onClick={displayMenu}>
          Shipping
        </li>
        <li className="border-b py-2 hover:font-bold" onClick={displayMenu}>
          Clearance
        </li>
        <li className="border-b py-2 hover:font-bold" onClick={displayMenu}>
          Lifestyle
        </li>
        <li className="border-b py-2 hover:font-bold" onClick={displayMenu}>
          Contact
        </li>
        <li className="border-b py-2 hover:font-bold" onClick={displayMenu}>
          Article
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
