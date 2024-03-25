import { useState } from "react";
import EventComponent from "./EventComponent";
import { EVENT_DATA } from "./EventData";
import EventInputs from "./EventInputs";
import { Prices } from "../../DataClasses";

export default function EventsSection() {
    const [filteredPrices, setFilteredPrices] = useState<Prices | null>(null);

    const filterPrices = (selectedPrice: Prices) => {
      setFilteredPrices(selectedPrice);
    };
  
    const filteredEvents = filteredPrices
      ? EVENT_DATA.filter((event) => {
          const eventPrice = event.price ?? 0;
          return (
            eventPrice >= (filteredPrices.minValue ?? 0) &&
            eventPrice <= filteredPrices.maxValue
          );
        })
      : EVENT_DATA;
  

  return (
    <div className="mx-auto lg:ml-0 flex flex-col justify-center xl:max-w-[1000px] items-center">
      <EventInputs onPriceChange={(selectedOption: Prices)=> filterPrices(selectedOption)} />
      {filteredEvents.map((eventDataItem) => (
        <EventComponent {...eventDataItem} />
      ))}
    </div>
  );
}
