import Studio01 from "../images/02.png";

export default function ViewStudios() {
  return (
    <div className="h-screen relative mx-2 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-[40vh] rounded-lg w-[100vw] lg:h-[98vh] bg-gradient-to-r from-black to-transparent object-cover lg:brightness-75"
          src={Studio01}
          alt=""
        />
      </div>
      <div className="mt-8 lg:absolute lg:text-white">
        <h6 className="uppercase font-inter text-base">
          Wish to rent our studio?
        </h6>
        <h3 className="text-4xl mt-2 md:w-[70%] lg:text-5xl">
          View Our Gallery of Studio
        </h3>
        <p className="paragraph text-left text-[#535353] lg:text-white">
          Ready to dive into the world of ceramics? Become a member today and
          gain access to all the benefits our club has to offer.{" "}
        </p>
        <div>
          <span className="bg-black rounded-full w-12 h-12"></span>
        </div>
      </div>
    </div>
  );
}
