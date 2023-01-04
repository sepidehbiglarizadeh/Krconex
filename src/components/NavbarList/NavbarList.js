import { NavLink } from "react-router-dom";

const NavbarList = () => {
  return (
    <ul className="px-10 text-lg hidden lg:flex flex-1 gap-x-4  items-center justify-around w-full">
      <li className="py-2 hover:font-bold">
        <NavLink to={{ pathname: "/products", search: "gender=men" }}>
          Men
        </NavLink>
      </li>
      <li className="py-2 hover:font-bold">
        <NavLink to={{ pathname: "/products", search: "gender=women" }}>
          Women
        </NavLink>
      </li>
      <li className="py-2 hover:font-bold">Shipping</li>
      <li className="py-2 hover:font-bold">Clearance</li>
      <li className="py-2 hover:font-bold">Lifestyle</li>
      <li className="py-2 hover:font-bold">Contact</li>
      <li className="py-2 hover:font-bold">Article</li>
    </ul>
  );
};

export default NavbarList;
