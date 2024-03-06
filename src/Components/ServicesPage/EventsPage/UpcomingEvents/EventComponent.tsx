import Button from "../../../Header/Button";
import TimeIcon from "./TimeIcon.svg";
import PriceIcon from "./Price.svg";

interface Event {
  heading: string;
  date: string;
  image: string;
  description: string;
  price?: number;
}

export default function EventComponent(props: Event) {
  return (
    <>
      <div className="mt-8 relative flex lg:h-[60vh] xl:h-fit lg:justify-center lg:items-center xl:py-0 flex-col lg:max-w-[720px] xl:max-w-[1000px] lg:flex-row bg-[#F9F8F6] border pb-6 lg:pb-0 rounded-sm">
        <img
          className="rounded-sm lg:w-[220px] lg:h-[60vh] xl:h-[55vh] xl:w-[400px] mx-auto object-cover"
          src={props.image}
          alt=""
        />
        <div className="mt-4 mx-4 lg:mx-6 xl:mx-10 lg:my-4 xl:my-8">
          <h4 className="font-archivo text-[1.8rem] leading-[2.2rem] xl:leading-[2.7rem] xl:mb-4 xl:text-[2.5rem] text-[#3C3C3C]">
            {props.heading}
          </h4>
          <div className="my-2">
            <span className="text-[#5F5F5F] uppercase flex justify-start items-center gap-2 xl:text-[0.85rem] text-[0.7rem] font-inter tracking-widest">
              <img src={TimeIcon} alt="" />
              {props.date}
            </span>
            <span className="text-[#5F5F5F] mt-2 gap-2 flex items-center text-[0.75rem] xl:text-[0.9rem] font-inter ">
              <img src={PriceIcon} alt="" />
              Price:{" "}
              {typeof props.price === "number" ? `${props.price}€` : "FREE"}
            </span>
          </div>
          <p className="font-archivo w-[90%] md:w-[50%] font-extralight mb-10 xl:w-[65%] lg:text-[0.80rem] xl:text-[0.95rem] lg:w-[70%] leading-6 mt-5 text-[#535353]">
            {props.description}
          </p>
          <div>
            <Button
              name="Learn More"
              className="bg-[#ffffff70] border lg:w-fit right-5 text-[#3C3C3C] lg:text-[0.75rem] lg:py-0.5 xl:py-1.5  hover:bg-[#BBA081] hover:border-[#BBA081] hover:text-white duration-200 lg:px-6 xl:px-8 bottom-5 lg:absolute rounded-md border-[#A9A9A9] font-inter tracking-wider font-medium uppercase mt-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}
