import woman from "../../assets/images/pexels.png";

const Clearance = () => {
  return (
    <section className="relative md:mt-10 mb-7 md:mb-32">
      <div className="bg-primaryYellow text-white font-bold text-center p-4 md:text-left md:h-80">
        <div className="md:w-2/4 flex flex-col justify-center h-full md:ml-14">
          <p className="text-3xl capitalize md:text-6xl">
            up to <span className="text-darkGray">60%</span> off on all
          </p>
          <p className="text-7xl uppercase text-darkGray md:text-9xl lg:text-9xl">Sale</p>
        </div>
      </div>
      <div className="md:absolute md:right-10 md:-top-16 xl:right-36 ">
        <img src={woman} alt="woman" className="hidden md:block" />
        <button className="bg-darkGray md:bg-primaryYellow md:text-darkGray py-2 px-3 text-white font-bold uppercase w-full mb-2 md:mb-0 md:mt-2">
          Check Clearance
        </button>
      </div>
    </section>
  );
};

export default Clearance;
