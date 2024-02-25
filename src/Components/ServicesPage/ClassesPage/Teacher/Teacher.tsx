import { useState } from "react";
import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";

export default function Teacher() {
  const [handleDescription, setHandleDescription] = useState(false);

  const handleClick = () => {
    setHandleDescription(!handleDescription);
  };

  return (
    <section className="h-screen lg:max-w-[1500px] mx-auto">
      <div className="relative">
        <div className="relative md:mt-20 flex mx-2 md:gap-6 md:items-center justify-center">
          <img
            className="rounded-lg w-full absolute md:w-[30%] md:relative h-[90vh] object-cover"
            src={Image1}
            alt=""
          />
          <img
            className="hidden md:flex rounded-lg w-full md:w-[30%] h-[90vh] object-cover"
            src={Image2}
            alt=""
          />
          <img
            className="hidden md:flex rounded-lg w-full md:w-[30%] h-[90vh] object-cover"
            src={Image3}
            alt=""
          />
        </div>

        <div className="z-10 md:absolute md:bottom-[20em]">
          <div
            onClick={handleClick}
            className="sticky z-10 md:absolute cursor-pointer"
          >
            <span className="bg-white w-[14px] top-[30em] md:top-[-2em] md:z-20 left-40 md:left-[14.3em] h-[14px] absolute z-10  rounded-full"></span>
            <span className="bg-[#ffffff30] w-[24px] animate-ping top-[29.7em] md:top-[-2.3em] md:left-[14em] left-[9.7em] h-[24px] absolute z-10  rounded-full"></span>
          </div>

          <div
            className={`${
              handleDescription
                ? "sticky md:absolute w-[420px] md:w-[520px]"
                : "hidden"
            }`}
          >
            <div className="z-10 absolute w-[320px] shadow-xl shadow-[#00000050] px-8 py-5 top-[32em] md:bottom-20 md:top-0 right-14 h-fit rounded-lg bg-white">
              <span className="uppercase text-[0.7rem] tracking-widest text-[#535353]">
                Pottery Teacher
              </span>
              <h4 className="text-2xl mb-2">Amelia Smith</h4>
              <p className="font-archivo text-[#535353] text-sm">
                Lorem ipsum dolor sit amet consectetur. Enim massa dictumst
                nullam nam. In cum scelerisque egestas laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
