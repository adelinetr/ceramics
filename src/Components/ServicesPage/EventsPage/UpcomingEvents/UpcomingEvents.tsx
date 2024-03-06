import EventComponent from "./EventComponent";
import Event1 from "./Event1.png";
import Event2 from "./Event2.png";
import Event3 from "./Event3.png";
import Event4 from "./Event4.png";

export default function UpcomingEvents() {
  return (
    <section className="lg:max-w-[1000px] xl:max-w-[1100px] mx-auto">
      <div className="h-fit my-20 mt-16 mx-4 lg:pt-6 lg:mx-auto">
        <div className="flex justify-start space-x-3 items-center">
          <h3 className="text-4xl lg:text-5xl mt-6 mb-6 flex justify-start items-center w-[60vw]">
            Upcoming Events
          </h3>
          <span className=" border-[#3A3A3A] border-b ml-3 mt-2 w-[95vw]"></span>
        </div>
        <div className="mx-auto flex justify-center items-center flex-col">
          <EventComponent
            heading="Introduction to Pottery"
            date="20th of march - 13:00-15:00"
            description="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. "
            image={Event1}
          />
          <EventComponent
            heading="Special Workshop: 'Mastering the Art of Ceramics'"
            date="27th of march - 11:00-12:30"
            description="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. "
            image={Event2}
          />
          <EventComponent
            heading="Free Workshop: Art in Ceramics"
            date="1st of april - 10:00-12:00"
            description="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. "
            image={Event3}
          />
          <EventComponent
            heading="Artistic Ceramics"
            date="21st of april - 16:00-17:00"
            description="Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. "
            image={Event4}
          />
        </div>
      </div>
    </section>
  );
}
