import EventComponent from "./EventComponent";
import Event1 from "././images/Event1.png";
import Event2 from "././images/Event2.png";
import Event3 from "././images/Event3.png";
import Event4 from "././images/Event4.png";

export default function EventsSection() {
    return(
        <div className="mx-auto flex justify-center xl:max-w-[1200px] items-center flex-col">
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
    )
}