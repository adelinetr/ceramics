import EventInputs from "./EventInputs";
import EventsSection from "./EventsSection";
import AdImg from './images/AdImg.png'
import Arrow from './Arrow.svg'

export default function UpcomingEvents() {
  return (
    <section className="lg:max-w-[1000px] xl:max-w-[1400px] mx-auto">
      <div className="h-fit my-20 mt-16 mx-4 lg:pt-6 lg:ml-0">
        <div className="flex justify-start space-x-3 items-center">
          <h3 className="text-4xl lg:text-5xl mt-6 mb-6 flex justify-start items-center w-[60vw]">
            Upcoming Events
          </h3>
          <span className=" border-[#3A3A3A] border-b ml-3 mt-2 w-[95vw]"></span>
        </div>
        <div className="hidden lg:flex space-x-20">
          <div className="xl:max-w-[1000px]">
            <EventInputs />
            <EventsSection />
          </div>
          <div className="mt-24 space-y-12">
            <div className="rounded-lg group relative">
                <img className="rounded-lg group-hover:cursor-pointer group-hover:brightness-75 brightness-90 duration-200 p-2 border" src={AdImg} alt="" />
                <h5 className="absolute flex justify-center gap-8 z-20 group-hover:cursor-pointer bottom-20 text-4xl w-[70%] font-medium left-10 font-archivo text-white">GET INSPIRED WITH OUR CLASSES
                <img src={Arrow} alt="" /></h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
