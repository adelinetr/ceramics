import Event1 from "./Event1.png";

export default function EventComponent() {
  return (
    <>
      <div className="mt-8 bg-[#EFECE5] pb-10 rounded-lg pt-1">
        <img className="rounded-lg w-[97%] mx-auto" src={Event1} alt="" />
        <div className="mt-2 mx-4">
          <h4 className="font-archivo text-2xl text-[#3C3C3C]">
            Introduction to Pottery
          </h4>
          <span className="text-[#5F5F5F] uppercase text-[0.8rem] font-inter tracking-widest">
            20th of march - 13:00-15:00
          </span>
          <p className="font-archivo font-extralight mt- text-[#535353]">
            Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam
            nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet
            consectetur. Enim massa dictumst nullam nam. In cum scelerisque
            egestas laoreet.
          </p>
        </div>
      </div>
    </>
  );
}
