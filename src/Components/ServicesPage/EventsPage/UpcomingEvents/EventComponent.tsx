import Button from "../../../Header/Button";

interface Event {
  heading: string;
  date: string;
  image: string;
  description: string;
}

export default function EventComponent(props: Event) {
  return (
    <>
      <div className="mt-8 relative flex flex-col lg:max-w-[1100px] lg:flex-row bg-[#F9F8F6] border lg:pb-0 pb-6 rounded-sm">
        <img className="rounded-sm lg:w-[400px] mx-auto" src={props.image} alt="" />
        <div className="mt-4 mx-4 lg:mx-10 lg:my-8">
          <h4 className="font-archivo text-[1.8rem] leading-[2.7rem] lg:text-[2.2rem] text-[#3C3C3C]">
            {props.heading}
          </h4>
          <span className="text-[#5F5F5F] uppercase text-[0.8rem] font-inter tracking-widest">
            {props.date}
          </span>
          <p className="font-archivo font-extralight xl:w-[65%] lg:text-[0.90rem] lg:w-[70%] leading-6 mt-5 text-[#535353]">
            {props.description}
          </p>
          <div>
            <Button
              name="Learn More"
              className="bg-[#ffffff70] border lg:w-fit right-5 text-[#3C3C3C] lg:text-[0.85rem] lg:py-1.5 hover:bg-[#BBA081] hover:border-[#BBA081] hover:text-white duration-200 px-8 bottom-5 lg:absolute rounded-md border-[#A9A9A9] font-inter tracking-wider font-medium uppercase mt-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}
