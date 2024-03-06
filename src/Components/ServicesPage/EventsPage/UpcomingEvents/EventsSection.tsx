import EventComponent from "./EventComponent";
import { EVENT_DATA } from "./EventData";
import EventInputs from "./EventInputs";


export default function EventsSection() {
    return(
        <div className="mx-auto lg:ml-0 flex flex-col justify-center xl:max-w-[1000px] items-center">
            <EventInputs />
          {EVENT_DATA.map((eventDataItem) => (
            <EventComponent {...eventDataItem} />
          ))}
        </div>
    )
}