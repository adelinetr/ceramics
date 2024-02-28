import Image1 from "./Image1.png";

export default function AboutClub() {
  return (
    <section className="w-full mx-auto mb-10">
      <div className="w-[100%] relative">
        <img
          className="h-screen md:h-[60vh] absolute w-[100%] object-cover z-[-10] brightness-50"
          src={Image1}
          alt=""
        />
        <div className="flex flex-col justify-center h-screen w-[90%] lg:w-[550px] md:w-[60%] mx-auto md:h-[60vh]">
          <div className="bg-white px-10 py-8">
            <h4 className="text-2xl font-archivo text-center uppercase mb-5">
              Pottery Club
            </h4>
            <p className="md:w-[80%] font-archivo mx-auto text-[0.85rem] text-[#535353]">
              Founded with a love for pottery and a commitment to fostering
              creativity, we are a vibrant community of ceramic enthusiasts,
              artists, and beginners alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
