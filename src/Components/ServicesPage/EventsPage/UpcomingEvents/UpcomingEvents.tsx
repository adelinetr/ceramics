import EventsSection from "./EventsSection";
import AdImg from './images/AdImg.png'
import Arrow from './Arrow.svg'

export default function UpcomingEvents() {
  return (
    <section className="lg:max-w-[1100px] xl:max-w-[1400px] mx-auto">
      <div className="h-fit my-20 mt-16 mx-4 lg:pt-6">
          <h3 className="text-3xl xl:text-5xl mt-6 mb-6 flex justify-start items-center">
            Upcoming Events
          </h3>
        <div className="lg:flex space-x-12">
          <div className="lg:max-w-[700px] xl:max-w-[1200px]">
            <EventsSection />
          </div>
          <div className="mt-24">
            <div className="rounded-lg relative group">
                <img className="rounded-lg group-hover:cursor-pointer group-hover:brightness-75 brightness-90 duration-200 p-2 border" src={AdImg} alt="" />
                <h5 className="absolute flex justify-center gap-8 z-20 group-hover:cursor-pointer bottom-20 text-2xl w-[70%] xl:text-3xl font-medium left-10 font-archivo text-white">GET INSPIRED WITH OUR CLASSES
                <img src={Arrow} alt="" /></h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
