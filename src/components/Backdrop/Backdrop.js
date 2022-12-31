const Backdrop = ({isShow,setIsShow}) => {
  return (
    <div
      className={`${
        isShow
          ? "fixed top-0 left-0 right-0 bottom-0 bg-darkGray opacity-40 z-30"
          : ""
      }`}
      onClick={() => setIsShow((prevState) => !prevState)}
    ></div>
  );
};

export default Backdrop;
