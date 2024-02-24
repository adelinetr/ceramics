import "./Hero.css";

export default function Hero() {
  return (
    <section className="xl:max-w-[1700px] mx-auto">
      <div className="mx-auto flex relative flex-col justify-start items-center">
        <div className="mobile-bg lg:hidden "></div>
        <div className="bg-img mx-auto h-fit lg:block"></div>
        <div className="text-white mt-40 lg:mt-60 flex flex-col z-10 absolute justify-center mx-5 items-center">
          <h3 className="text-5xl lg:text-7xl font-archivo">Classes</h3>
          <p className="mt-4 w-[90%] lg:w-[50%] text-center font-archivo font-extralight">
            Ready to dive into the world of ceramics? Become a member today and
            gain access to all the benefits our club has to offer.{" "}
          </p>
          <button className="mt-10 border hover:bg-white font-archivo hover:text-black duration-200 transition-all border-white px-20 text-xl py-2 rounded-full">Explore</button>
        </div>
      </div>
    </section>
  );
}
