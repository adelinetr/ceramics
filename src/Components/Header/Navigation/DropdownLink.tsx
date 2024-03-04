import { useState } from "react";
import ServicesLink from "./ServicesLink";
import ArrowIcon from "./Arrow";

export default function DropdownLink() {
  const [openServices, setServices] = useState(false);
  const handleServices = () => {
    setServices(!openServices);
  };
  return (
    <li className="text-lg lg:text-base  flex flex-col text-[#101010] duration-200 transition-all font-medium font-inter w-full my-2 rounded-sm">
      <div
        onClick={handleServices}
        className="flex cursor-pointer hover:bg-[#E9E7E7] w-full py-3 lg:py-2 px-5 rounded-sm justify-between items-center"
      >
        <span>Services</span>
        <ArrowIcon
          className={`${
            openServices
              ? "rotate-90 duration-200 transition-all ease-in-out"
              : "rotate-0 duration-200 transition-all ease-in-out"
          }`}
        />
      </div>
      <div
        className={`${
          openServices
            ? "flex bg-[#f7f7f7] rounded-lg mt-2 pointer-default px-5 flex-col items-start justify-start"
            : "hidden"
        }`}
      >
        <ul className="space-y-6 my-4 font-light lg:text-base pointer-default font-archivo text-[#5c5c5c]">
          <ServicesLink linkName="Pottery Classes" link="/classes" />
          <ServicesLink link="/events" linkName="Events" />
          <ServicesLink linkName="Studio Access" link="/studio-access" />
        </ul>
      </div>
    </li>
  );
}
