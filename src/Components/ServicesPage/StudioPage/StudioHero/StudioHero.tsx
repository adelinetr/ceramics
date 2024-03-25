import Photo01 from "../images/01.png";

export default function StudioHero() {
  return (
    <div className="flex h-[88vh] justify-center mt-6 lg:mx-4 lg:space-x-16 lg:flex-row items-center flex-col">
      <div>
        <img className="h-[40vh] rounded-lg w-[95vw] lg:w-[50vw] lg:h-[85vh] object-cover" src={Photo01} alt="" />
      </div>
      <div className="flex justify-center items-center lg:items-start flex-col lg:w-[45vw] xl:w-[35vw] mt-10">
        <h3 className="heading-h3">Studio Access</h3>
        <p className="paragraph lg:w-[70%] xl:w-[60%] lg:text-left">
          Ready to dive into the world of ceramics? Become a member today and
          gain access to all the benefits our club has to offer.{" "}
        </p>
      </div>
    </div>
  );
}
