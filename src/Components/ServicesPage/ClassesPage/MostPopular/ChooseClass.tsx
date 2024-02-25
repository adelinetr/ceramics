import { useState } from "react";

export default function ChooseClass() {
  const [active, setActive] = useState([true, false, false]);
  const handleActiveComponent = (index: number) => {
    const updatedActive = active.map((_, i) => i === index);
    setActive(updatedActive);
  };

  return (
    <div>
      <div className="flex lg:mx-auto justify-center cursor-pointer font-archivo space-x-14 pb-4 border-b-2 items-center w-max mx-4">
        <h4
          onClick={() => handleActiveComponent(0)}
          className={`text-xl w-max cursor-pointer ${active[0] ? "relative" : ""}`}
        >
          Introduction to Ceramics
          {active[0] && (
            <span className="absolute top-[2.15em] left-0 w-full border-b-[3px] border-black"></span>
          )}
        </h4>

        <h4 onClick={() => handleActiveComponent(1)}  className={`text-xl cursor-pointer w-max ${active[1] ? "relative" : ""}`}>
          Handbuilding Class
          {active[1] && (
            <span className="absolute top-[2.15em] left-0 w-full border-b-[3px] border-black"></span>
          )}
        </h4>
        <h4 onClick={() => handleActiveComponent(2)}  className={`text-xl cursor-pointer w-max ${active[2] ? "relative" : ""}`}>
          Wheel Throwing Class
          {active[2] && (
            <span className="absolute top-[2.15em] left-0 w-full border-b-[3px] border-black"></span>
          )}
        </h4>
      </div>
    </div>
  );
}
