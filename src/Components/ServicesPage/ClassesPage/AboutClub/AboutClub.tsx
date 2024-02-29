import Image1 from "./Image1.png";
import ImageButton from "./ImageButton";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";

export default function AboutClub() {
  return (
    <section className="w-full mx-auto mb-10 mt-16">
      <div className="w-[100%] relative">
        <img
          className="h-screen md:h-[80vh] absolute w-[100%] object-cover z-[-10] brightness-50"
          src={Image1}
          alt=""
        />
        <div className="flex flex-col justify-center items-center h-screen w-[90%] md:w-[100%] mx-auto md:h-[80vh]">
          <div className="bg-white rounded-sm px-10 py-12 md:h-[300px] md:w-[650px]">
            <h4 className="text-2xl text-[#515151] md:text-3xl tracking-widest font-archivo text-center uppercase mb-5">
              Pottery Club
            </h4>
            <p className="md:w-[75%] font-archivo leading-6 mx-auto text-[0.85rem] md:text-base text-[#7a7a7a]">
              Founded with a love for pottery and a commitment to fostering
              creativity, we are a vibrant community of ceramic enthusiasts,
              artists, and beginners alike. Nestled in the heart of London, our
              studio provides a welcoming space for individuals to explore the
              art of pottery and unleash their artistic potential.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <ImageButton
          image={Image2}
          heading="Shop"
          text="Buy new items for apartment."
        />
        <ImageButton
          image={Image3}
          heading="Studio Access"
          text="Rent our studio for creative activities."
        />
      </div>
    </section>
  );
}
