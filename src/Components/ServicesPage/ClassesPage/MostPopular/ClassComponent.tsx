import Image1 from "./Image1.png";

export default function ClassComponent(props: {
  name: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col lg:flex-row ${props.className}`}>
      <div className="flex mx-4 lg:ml-28 flex-col mt-12 lg:space-x-10 lg:flex-row">
        <div>
          <img
            className=" w-full h-[40vh] lg:w-[60vh] rounded-lg object-cover lg:h-[60vh]"
            src={Image1}
            alt=""
          />
        </div>
        <div>
          <div>
            <h4 className="text-3xl mt-3  lg:text-[3rem] font-archivo mb-3">{props.name}</h4>
            <p className="lg:w-[60%] mb-4 text-[#535353] font-inter text-[1rem] lg:mb-20">
              {props.text}
            </p>
          </div>
          <span className="text-3xl">45 euro</span>
          <div className="mt-12">
            <button className="border w-full lg:w-fit hover:shadow-lg transition-all duration-200 font-archivo border-black px-12 py-2 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
