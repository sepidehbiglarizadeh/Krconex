import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkGray ">
      <div className=" text-gray p-3 sm:py-8 sm:flex sm:items-center sm:flex-wrap sm:justify-evenly 2xl:max-w-7xl mx-auto">
        <div>
          <h3 className="text-2xl mb-5 font-bold">Krconex</h3>
          <div className="flex gap-x-3 text-xl text-darkGray mb-4">
            <a
              href="https://www.facebook.com"
              className="bg-white rounded-full p-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              className="bg-white rounded-full p-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              className="bg-white rounded-full p-2"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <ul className="mb-4">
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Help
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Privacy Policy
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Shipping & Delivery
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Refund Policy
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Track Your Order
          </li>
        </ul>
        <ul className="mb-4">
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Store
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Men Fashion
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Women Fashion
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Store Sale
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Collections
          </li>
        </ul>
        <ul className="mb-4">
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Support
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Feedback
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Contact us
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Customer Service
          </li>
          <li className="py-1 text-lg cursor-pointer transition-all duration-300 hover:text-lightGray">
            Terms & Condition
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
