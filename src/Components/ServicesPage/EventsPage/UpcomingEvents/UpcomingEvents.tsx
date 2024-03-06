import EventInputs from "./EventInputs";
import EventsSection from "./EventsSection";

export default function UpcomingEvents() {
  return (
    <section className="lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
      <div className="h-fit my-20 mt-16 mx-4 lg:pt-6 lg:ml-0">
        <div className="flex justify-start space-x-3 items-center">
          <h3 className="text-4xl lg:text-5xl mt-6 mb-6 flex justify-start items-center w-[60vw]">
            Upcoming Events
          </h3>
          <span className=" border-[#3A3A3A] border-b ml-3 mt-2 w-[95vw]"></span>
        </div>
        <EventInputs />
        <div>
          <EventsSection />
        </div>
      </div>
    </section>
  );
}
