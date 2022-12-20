import {
  FaInstagram,
  FaTwitterSquare,
  FaFacebookSquare,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialBar = () => {
  return (
    <section className="bg-darkGray text-lightGray py-2 px-2 md:px-4 text-md flex justify-between items-center">
      <div className="flex gap-x-1">
        <a
          href="https://www.instagram.com"
          className="transition-all duration-300 hover:text-primaryYellow"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com"
          className="transition-all duration-300 hover:text-primaryYellow"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://www.facebook.com"
          className="transition-all duration-300 hover:text-primaryYellow"
        >
          <FaFacebookSquare />
        </a>
      </div>
      <div>
        <Link to="/signin">
          <div className="flex items-center gap-x-1 transition-all duration-300 hover:text-primaryYellow">
            <FaRegUser />
            <span className="inline-block text-sm"> Sign-in/Sign-up</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SocialBar;
