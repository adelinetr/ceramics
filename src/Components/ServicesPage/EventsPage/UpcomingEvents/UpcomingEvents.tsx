import EventComponent from "./EventComponent";

export default function UpcomingEvents () {
    return(
        <section>
            <div className="h-screen mx-4">
                <h3 className="text-3xl mt-6 flex justify-center items-center w-[100%]">Upcoming Events
                <span className=" border-[#3A3A3A] border-b ml-3 mt-2 w-[28vw]"></span>
                </h3>
                <EventComponent />
            </div>
        </section>
    )
}