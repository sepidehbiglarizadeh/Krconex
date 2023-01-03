import { useState } from "react";
import {
  FaInstagram,
  FaTwitterSquare,
  FaFacebookSquare,
  FaRegUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addAuth } from "../../redux/auth/authActions";

const SocialBar = () => {
  const [isShow, setIsShow] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signoutUser = () => {
    localStorage.removeItem("authState");
    dispatch(addAuth(false));
    setIsShow(false);
    navigate("/");
  };

  return (
    <section className=" bg-darkGray">
      <div className="bg-darkGray text-lightGray py-2 px-2 md:px-4 text-md flex justify-between items-center mb-2 2xl:max-w-7xl mx-auto">
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
        <div className="relative">
          <div className="flex items-center gap-x-1 transition-all duration-300 hover:text-primaryYellow ">
            {auth.auth.user ? (
              <>
                <FaRegUser />

                <span
                  className="inline-block text-sm cursor-pointer"
                  onClick={() => setIsShow((prevState) => !prevState)}
                >
                  {auth.auth.user.name}
                </span>
              </>
            ) : (
              <Link to="/signin">
                <div className="flex gap-x-2">
                  <FaRegUser />
                  <span className="inline-block text-sm">Sign-in/Sign-up</span>
                </div>
              </Link>
            )}
          </div>
          {auth.auth.user && (
            <div
              className={` bg-darkGray text-white absolute -bottom-[66px] right-0 z-50 w-28 p-2 text-sm ${
                isShow ? "block" : "hidden"
              }`}
            >
              <Link to="/profile">
                <span
                  className="block mb-1"
                  onClick={() => setIsShow((prevState) => !prevState)}
                >
                  Profile
                </span>
              </Link>
              <span
                className="block cursor-pointer"
                onClick={signoutUser}
              >
                Sign-Out
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialBar;
