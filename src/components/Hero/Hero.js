import femaleImage from "../../assets/images/woman.png";
import manImage from "../../assets/images/man.png";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="sm:flex mb-2 min-h-[500px] sm:min-h-[478px]">
      <div className="relative -z-0 sm:w-1/2">
        <img src={femaleImage} alt="womanImage"className="w-full h-full" />
        <button className="bg-white text-darkGray font-bold lg:text-xl uppercase absolute top-1/2 right-[10%] px-4 py-2 rounded-lg">
          <Link to={{ pathname: "/products", search: "gender=women" }}>Shop for her</Link>
        </button>
      </div>
      <div className="relative -z-0 sm:w-1/2">
        <img src={manImage} alt="manImage" className="w-full h-full"/>
        <button className="bg-darkGray text-white font-bold lg:text-xl uppercase absolute top-1/2 right-[10%] px-4 py-2 rounded-md">
          <Link to={{ pathname: "/products", search: "gender=men" }}>
            Shop for him
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
