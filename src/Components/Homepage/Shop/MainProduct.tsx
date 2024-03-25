import { useState } from "react";
import { ImageData } from "./BestsellersData";


export default function MainProduct(props: ImageData) {
  const { image, name, price, description } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleHoveredState = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <div>
        <div className="relative group flex justify-center text-center items-center">
          <img
            onMouseEnter={handleHoveredState}
            onMouseLeave={handleHoveredState}
            className="w-[320px] lg:w-[60em] rounded-sm h-[45vh] lg:h-[50vh] object-cover group-hover:brightness-[.4] duration-200 cursor-pointer"
            src={image}
            alt=""
          />
          <div
            className={`${
              isHovered ? "absolute" : "hidden"
            } flex flex-col justify-center items-center pointer-events-none text-white font-inter font-light w-[70%] top-[35%]`}>
            <p>{description}</p>
            <button className="mt-7 w-fit px-10 rounded-full font-normal text-sm py-3 bg-white text-black">
              Learn More
            </button>
          </div>
        </div>
        <span className="flex justify-between mt-2 font-inter items-center">
          <h6>{name}</h6>
          <p>{price}</p>
        </span>
      </div>
    </>
  );
}
