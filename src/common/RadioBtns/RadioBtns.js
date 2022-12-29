const RadioBtns = ({ sizeValue, radioChangeHandler }) => {
  return (
    <div className="mb-8">
      <span className="mb-4 inline-block">Size :</span>
      <div className="flex items-center gap-x-5">
        <div>
          <label
            htmlFor="xs"
            className={`border p-2 cursor-pointer ${
              sizeValue === "xs" ? "bg-darkGray text-white" : ""
            }`}
          >
            XS
          </label>
          <input
            id="xs"
            name="size"
            type="radio"
            onChange={radioChangeHandler}
            value="xs"
            className="appearance-none"
          />
        </div>
        <div>
          <label
            htmlFor="s"
            className={`border p-2 cursor-pointer ${
              sizeValue === "s" ? "bg-darkGray text-white" : ""
            }`}
          >
            S
          </label>
          <input
            id="s"
            name="size"
            type="radio"
            onChange={radioChangeHandler}
            value="s"
            className="appearance-none"
          />
        </div>
        <div>
          <label
            htmlFor="m"
            className={`border p-2 cursor-pointer ${
              sizeValue === "m" ? "bg-darkGray text-white" : ""
            }`}
          >
            M
          </label>
          <input
            id="m"
            name="size"
            type="radio"
            onChange={radioChangeHandler}
            value="m"
            className="appearance-none"
          />
        </div>
        <div>
          <label
            htmlFor="l"
            className={`border p-2 cursor-pointer ${
              sizeValue === "l" ? "bg-darkGray text-white" : ""
            }`}
          >
            L
          </label>
          <input
            id="l"
            name="size"
            type="radio"
            onChange={radioChangeHandler}
            value="l"
            className="appearance-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RadioBtns;
