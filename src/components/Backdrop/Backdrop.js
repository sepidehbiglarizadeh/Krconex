const Backdrop = ({ isShow, setIsShow, setFixed }) => {
  const displayBackdrop = () => {
    setIsShow((prevState) => !prevState);
    setFixed(false);
  };

  return (
    <div
      className={`${
        isShow
          ? "fixed top-0 left-0 right-0 bottom-0 bg-darkGray opacity-40 z-30"
          : ""
      }`}
      onClick={displayBackdrop}
    ></div>
  );
};

export default Backdrop;
