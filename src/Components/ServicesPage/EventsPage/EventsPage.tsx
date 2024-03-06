import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Newsletter from "../../Homepage/Newsletter/Newsletter";
import AboutClub from "../ClassesPage/AboutClub/AboutClub";
import EventsHero from "./EventsHero/EventsHero";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

export default function EventsPage() {
    return(
        <>
            <Header />
            <EventsHero />
            <UpcomingEvents />
            <AboutClub />
            <Newsletter />
            <Footer />
        </>
    )
}