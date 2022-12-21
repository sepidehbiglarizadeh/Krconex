import acc from "../../assets/images/acc.png";
import summ from "../../assets/images/summ.png";
import newArr from "../../assets/images/new.png";
import jean from "../../assets/images/jean.png";

const Gallery = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:px-16 md:py-16 xl:px-32 mb-2">
      <div className="h-60 rounded-md overflow-hidden relative xl:row-span-2 xl:h-auto">
        <img
          src={acc}
          alt="man"
          className="h-full w-full object-cover object-top"
        />
        <button className="btn absolute bottom-[20%] left-[50%] -translate-x-1/2">
          Accessories
        </button>
      </div>
      <div className="h-60 rounded-md overflow-hidden relative xl:h-auto xl:col-span-2">
        <img
          src={summ}
          alt="woman"
          className="h-full w-full object-cover object-[20%]"
        />
        <button className="btn absolute bottom-[20%] left-[50%] -translate-x-1/2">
          Summer sale
        </button>
      </div>
      <div className="h-60 rounded-md overflow-hidden relative xl:h-auto">
        <img
          src={newArr}
          alt="woman"
          className="h-full w-full object-cover object-top"
        />
        <button className="btn absolute bottom-[20%] left-[50%] -translate-x-1/2">
          New arrivals
        </button>
      </div>
      <div className="h-60 rounded-md overflow-hidden relative lg:col-span-3 lg:justify-self-center xl:col-span-1 xl:h-auto">
        <img
          src={jean}
          alt="man"
          className="h-full w-full object-cover object-top"
        />
        <button className="btn absolute bottom-[20%] left-[50%] -translate-x-1/2">
          Men's jeans
        </button>
      </div>
    </section>
  );
};

export default Gallery;
