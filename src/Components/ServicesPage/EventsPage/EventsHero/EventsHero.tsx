import HeroComponent from "../../HeroComponent";
import Image1 from "./Image1.png";

export default function EventsHero() {
  return (
    <main className="xl:max-w-[1760px] mx-auto">
      <HeroComponent
        image={Image1}
        heading="Events"
        paragraph="Ready to dive into the world of ceramics? Become a member today and gain access to all the benefits our club has to offer. "
        buttonClass="hidden"
      />
    </main>
  );
}
