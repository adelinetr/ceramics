import Image from "./Image.png";

export default function Discover() {
  return (
    <div className="w-full h-fit my-20 lg:w-full lg:max-w-[1200px] mx-auto xl:max-w-[1400px]">
      <div className="mx-5 relative lg:mx-0">
        <div className="flex flex-col md:flex-row md:space-x-12 md:mx-6">
        <h3 className="text-5xl lg:text-7xl md:w-[55%]  font-archivo uppercase">
          Discover more ceramics for your home{" "}
        </h3>
          <p className="text-[#535353] mt-6 md:mt-0 md:w-[70%] lg:w-[50%]">
            Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form. Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form.
          </p>
        </div>
        <div className="relative lg:h-fit flex justify-end">
          <img
            className="mt-32 lg:mt-60 lg:rounded-sm md:h-[52vh] lg:h-[70vh] lg:w-[700px] object-cover rounded-xl w-full"
            src={Image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
