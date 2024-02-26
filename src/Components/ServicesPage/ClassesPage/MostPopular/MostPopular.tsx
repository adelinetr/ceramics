import { useState } from "react";
import ClassComponent from "./ClassComponent";
import ActiveClassComponent from "./ActiveClassComponent";

export default function MostPopular() {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleActiveIndex = (index: number) => {
      setActiveIndex(index);
    };
  return (
    <section>
      <div className="h-screen flex flex-col justify-start items-center">
        <h3 className="text-4xl mb-20">Most Popular Classes</h3>
        <div className="flex lg:mx-auto justify-center cursor-pointer font-archivo space-x-14 pb-4 border-b-2 items-center w-max mx-4">
          <ActiveClassComponent
            onClick={()=> handleActiveIndex(0)}
            className=""
            isActive={activeIndex === 0}
            name="Introduction to Ceramics"
            index={0}
          />
          <ActiveClassComponent
            onClick={()=> handleActiveIndex(1)}
            className=""
            isActive={activeIndex === 1}
            name="Handbuilding Class"
            index={1}
          />
          <ActiveClassComponent
            onClick={()=> handleActiveIndex(2)}
            className=""
            isActive={activeIndex === 2}
            name="Wheel Throwing Class"
            index={2}
          />
        </div>
        <div className="lg:max-w-[1100px]">
          <ClassComponent
            name="Introduction to Ceramics"
            text="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet."
            className=""
          />
          <ClassComponent
            name="Handbuilding Class"
            text="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet."
            className="hidden"
          />
          <ClassComponent
            name="Wheel Throwing Class"
            text="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet."
            className="hidden"
          />
        </div>
      </div>
    </section>
  );
}
