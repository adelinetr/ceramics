import MainProduct from "./MainProduct";
import Arrow from "./Arrow.svg";
import { BestsellersData } from "./BestsellersData";
import { useEffect, useState } from "react";

export default function Bestsellers() {
  const products = BestsellersData;
  const [startIndex, setStartIndex] = useState(0);
  const [transitioned, setTransitioned] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNextBtn = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else if (startIndex + itemsPerPage >= products.length) {
      setStartIndex(0);
    }
    setTransitioned(true);
    setTimeout(() => setTransitioned(false), 500);
  };

  useEffect(() => {
    const handleImagesPerPage = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setItemsPerPage(width < 1024 ? 1 : 3);
    };

    window.addEventListener("resize", handleImagesPerPage);

    handleImagesPerPage();

    return () => {
      window.removeEventListener("resize", handleImagesPerPage);
    };
  }, []);

  return (
    <section className="h-fit flex flex-col my-40 justify-center items-center lg:items-start max-w-[1300px] mx-auto">
      <div className="lg:mx-4">
        <div className="flex my-8 flex-col justify-center items-center lg:flex-row lg:justify-between">
          <h3 className="text-4xl font-inter text-[#3A3A3A]">Bestsellers</h3>
          <div className="flex space-x-3 mt-4">
            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, index) => (
              <span
                className={`${index === Math.floor(startIndex / itemsPerPage) ? "bg-[#434343]" : "border border-[#434343]"} 
                w-4 h-4 rounded-full block`}
                key={index}
              ></span>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className={`${transitioned ? "animate-fade" : ""} flex ml-12 flex-col lg:flex-row justify-center 
            lg:grid lg:grid-cols-3 items-center space-y-12 lg:space-y-0 lg:space-x-12`}>
            {products
              .slice(startIndex, startIndex + itemsPerPage)
              .map((product) => {
                return (
                  <MainProduct
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                  />
                );
              })}
          </div>
          <button onClick={handleNextBtn}>
            <img className="w-8 lg:w-20 mx-2 h-auto" src={Arrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
