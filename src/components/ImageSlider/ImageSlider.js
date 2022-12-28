import { FaCircle, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ImageSlider = ({
  productImages,
  nextSlide,
  prevSlide,
  current,
  setCurrent,
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        {productImages.map((slide, index) => {
          return (
            <div
              className={` h-[410px] ${
                index === current ? " opacity-100" : "opacity-0"
              }`}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="clothes"
                  className="h-full w-full"
                />
              )}
            </div>
          );
        })}
      </div>

      <CircleBtns
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setCurrent={setCurrent}
      />
    </>
  );
};

export default ImageSlider;

const CircleBtns = ({ prevSlide, nextSlide, setCurrent }) => {
  return (
    <div className="flex justify-center gap-x-4 my-4">
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
