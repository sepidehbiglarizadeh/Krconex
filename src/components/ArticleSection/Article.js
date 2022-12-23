import girlImage from "../../assets/images/image 24.png";
import { FaCircle } from "react-icons/fa";

const Article = () => {
  return (
    <section className="mb-9 md:flex relative mx-3">
      <div className="bg-darkGray h-[309px] py-12 px-4 md:w-[30%]">
        <h2 className="text-white text-4xl font-bold mb-6">What's going on!</h2>
        <p className="text-lightGray">
          Learn more about upcoming fashion trends and tips
        </p>
      </div>
      <div className="bg-primaryYellow h-[309px] py-12 px-4  md:w-[70%]">
        <div className="lg:w-[45%]">
          <h3 className="font-bold text-lg mb-2">
            7 fashion tips for this summer
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-x-2 text-sm mt-4">
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:right-10 xl:right-20 -top-5">
        <img src={girlImage} alt="girl" />
      </div>
    </section>
  );
};

export default Article;
