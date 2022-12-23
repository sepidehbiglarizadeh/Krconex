import { useState } from "react";
import { FaTelegram } from "react-icons/fa";

const Subscribe = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="mb-2 subscribeBgImage h-[300px] lg:h-[588px] pt-20 lg:pt-64">
      <h2 className="font-bold text-white text-2xl lg:text-6xl text-center mb-2">
        Subscribe Newsletter
      </h2>
      <p className="text-white opacity-70 text-center lg:text-xl mb-4">
        Subscribe to our email and get updates right in your inbox
      </p>
      <div className="flex justify-center">
        <div className="bg-white w-[280px] flex rounded-full overflow-hidden">
          <input
            type="email"
            className="w-full h-full py-2 px-3 outline-none"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Your Email"
          />
          <button
            className="text-primaryYellow text-5xl"
            href={`mailto:test@gmail.com?subject=Subscribe&body=${inputValue}`}
          >
            <FaTelegram />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
