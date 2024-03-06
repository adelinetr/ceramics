import ArrowPrev from "./ArrowPrev.svg";
import ArrowNext from "./ArrowNext.svg";
import ClassComponent from "./ClassComponent";
import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";

export default function ChooseClass() {
  return (
    <section className="h-fit lg:max-w-[1000px] lg:mx-auto py-20 xl:max-w-[1150px]">
      <div className="px-4 lg:max-w-[1200px] mx-auto">
        <div className="font-archivo flex lg:max-w-[1120px] flex-col lg:flex-row justify-center lg:justify-between items-center">
          <h3 className="text-4xl mt-10 text-center mb-6">
            Choose your favourite class
          </h3>
          <div className="flex justify-center items-center space-x-8">
            <img src={ArrowPrev} alt="" />
            <img src={ArrowNext} alt="" />
          </div>
        </div>
        <div className="lg:flex lg:max-w-[1100px] xl:max-w-[1300px] space-x-10 mx-auto xl:space-x-20">
          <ClassComponent
            image={Image1}
            heading="Wheel Throwing Mastery"
            text="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet."
          />
          <ClassComponent
            image={Image2}
            heading="Artistic ceramics "
            className="hidden lg:block"
            text="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet."
          />
          <ClassComponent
            image={Image3}
            heading="Individual ceramics"
            className="hidden lg:block"
            text="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet."
          />
        </div>
      </div>
    </section>
  );
}
