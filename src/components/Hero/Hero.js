import femaleImage from "../../assets/images/woman.png";
import manImage from "../../assets/images/man.png";

const Hero = () => {
  return (
    <section className="sm:flex mb-2">
      <div className="relative -z-10">
        <img src={femaleImage} alt="womanImage" />
        <button className="bg-white text-darkGray font-bold lg:text-xl uppercase absolute top-1/2 right-[10%] px-4 py-2 rounded-lg">
          Shop for her
        </button>
      </div>
      <div className="relative -z-10">
        <img src={manImage} alt="manImage" />
        <button className="bg-darkGray text-white font-bold lg:text-xl uppercase absolute top-1/2 right-[10%] px-4 py-2 rounded-md">
          Shop for him
        </button>
      </div>
    </section>
  );
};

export default Hero;
