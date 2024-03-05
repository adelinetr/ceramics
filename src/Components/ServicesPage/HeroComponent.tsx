interface HeroSection {
    image: string,
    heading: string,
    paragraph: string,
    buttonClass: string
}

export default function HeroComponent (props: HeroSection) {
  return (
    <section className="xl:max-w-[1760px] mx-auto">
      <div className="flex flex-col mx-2 justify-center items-center">
        <img className="hero-img" src={props.image} alt="" />
        <div className="hero-text">
          <h3 className="heading-h3">{props.heading}</h3>
          <p className="paragraph">
            {props.paragraph}
          </p>
          <button className={`${props.buttonClass} mt-6 border hover:bg-white font-archivo hover:text-black duration-200 transition-all border-white px-16 text-sm xl:text-xl py-2 rounded-full`}>
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
