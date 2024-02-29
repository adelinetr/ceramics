import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Newsletter from "../../Homepage/Newsletter/Newsletter";
import AboutClub from "./AboutClub/AboutClub";
import ChooseClass from "./ChooseClass/ChooseClass";
import Hero from "./HeroClass/Hero";
import InviteFamily from "./InviteFamily/InviteFamily";
import MostPopular from "./MostPopular/MostPopular";
import Teacher from "./Teacher/Teacher";

export default function ClassesPage(){
    return(
        <div>
            <Header />
            <Hero />
            <ChooseClass />
            <Teacher />
            <MostPopular />
            <AboutClub />
            <InviteFamily />
            <Newsletter />
            <Footer />
        </div>
    )
}