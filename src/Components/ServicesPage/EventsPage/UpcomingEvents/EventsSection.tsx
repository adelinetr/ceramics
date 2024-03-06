import EventComponent from "./EventComponent";
import { EVENT_DATA } from "./EventData";


export default function EventsSection() {
    return(
        <div className="mx-auto lg:ml-0 flex justify-center xl:max-w-[1000px] items-center flex-col">
          {EVENT_DATA.map((eventDataItem) => (
            <EventComponent {...eventDataItem} />
          ))}
        </div>
    )
}