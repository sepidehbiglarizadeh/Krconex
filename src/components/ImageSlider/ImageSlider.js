import { useRef } from "react";
import { FaCircle, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ImageSlider = ({
  productImages,
  nextSlide,
  prevSlide,
  current,
  setCurrent,
}) => {
  const imageRef = useRef();

  const scrollHandler = (index) => {
    setCurrent(index);
    imageRef.current.scrollIntoView();
  };

  return (
    // Thumbnails
    <div className="md:flex md:w-1/2">
      <div className="hidden w-24 h-[80vh] md:flex flex-col gap-y-2 mx-10">
        {productImages.map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => scrollHandler(index)}
            >
              <img src={item.image} />
            </div>
          );
        })}
      </div>

      {/* Big Images */}
      <div className="flex justify-center items-center md:flex-col md:justify-start md:items-start md:gap-y-4 md:h-[80vh] md:overflow-auto md:cursor-crosshair">
        {productImages.map((slide, index) => {
          return (
            <div
              className={` h-[410px] md:h-[80vh] ${
                index === current ? " block" : "hidden"
              } md:block`}
              key={index}
              ref={current === index ? imageRef : null}
            >
              <img src={slide.image} alt="clothes" className="h-full w-full" />
            </div>
          );
        })}
      </div>
      <CircleBtns
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default ImageSlider;

const CircleBtns = ({ prevSlide, nextSlide, setCurrent }) => {
  return (
    <div className="flex justify-center gap-x-4 my-4 md:hidden">
      <button onClick={prevSlide} className="text-2xl">
        <FaChevronLeft />
      </button>
      <button onClick={() => setCurrent(0)}>
        <FaCircle />
      </button>
      <button onClick={() => setCurrent(1)}>
        <FaCircle />
      </button>
      <button onClick={() => setCurrent(2)}>
        <FaCircle />
      </button>
      <button onClick={() => setCurrent(3)}>
        <FaCircle />
      </button>
      <button onClick={nextSlide} className="text-2xl">
        <FaChevronRight />
      </button>
    </div>
  );
};
