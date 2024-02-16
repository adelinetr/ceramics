import Photo1 from "./images/01.png";
import Photo2 from "./images/02.png";

export default function Hero() {
  return (
    <div className="h-[90vh] w-full relative xl:max-w-[1600px] flex flex-col items-center mx-auto">
      <div className="flex flex-col absolute lg:flex-row items-end">
        <div className="font-archivo mt-9 mx-5 lg:mx-10 lg:mt-10 xl:mt-40">
          <div className="lg:absolute z-10 lg:w-[95%] lg:h-fit">
            <h1 className="text-6xl w-full lg:hidden xl:text-8xl lg:flex-col lg:text-[5.5rem] mb-4 text-[#414141]">
              Explore the World of Ceramics
            </h1>
            <h1 className="hidden text-5xl w-full lg:absolute lg:flex xl:text-8xl lg:flex-col lg:text-[4.5rem] mb-4 text-[#414141]">
              <span className="bg-white w-fit rounded-xl pr-7">
                Exploring the World
              </span>
              <span className="bg-white w-fit rounded-xl">of Ceramics</span>
            </h1>
          </div>
          <p className="text-[#535353] md:w-[70%] lg:mt-40 lg:mb-6 xl:mt-52 xl:text-lg font-light lg:w-[80%]">
            Ready to dive into the world of ceramics? Become a member today and
            gain access to all the benefits our club has to offer.{" "}
          </p>
          <div className="hidden lg:flex lg:items-end justify-end bottom-0 h-[40vh]">
            <img
              className="rounded-xl h-[32vh] w-[840px] object-cover"
              src={Photo1}
              alt=""
            />
          </div>
        </div>

        <div className="flex bottom-0 w-[90%] mt-5 lg:mt-4 lg:w-[64vw] lg:h-[87vh] relative justify-center items-center mx-5">
          <img
            className="rounded-xl w-full h-[410px] lg:h-[87vh] object-cover brightness-90"
            src={Photo2}
            alt=""
          />
          <button className="text-white border hover:bg-white transition-all duration-200 hover:text-black bottom-12 uppercase font-archivo px-12 text-xl py-2 rounded-full absolute border-white ">
            Join the club
          </button>
        </div>
      </div>
    </div>
  );
}
