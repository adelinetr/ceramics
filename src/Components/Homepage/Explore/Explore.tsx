import ExploreComponent from "./ExploreComponent";
import Photo1 from "./images/courses.png";
import Photo2 from "./images/shop.png";

export default function Explore() {
  return (
    <div className="h-fit relative w-full mt-6 md:mt-40 flex flex-col items-center justify-center lg:max-w-[900px] mx-auto">
      <div className="flex mx-12 flex-col md:flex-row lg:mx-auto">
        <ExploreComponent
          image={Photo1}
          heading="Our Courses"
          text="Ready to dive into the world of ceramics? Become a member today and gain access to all the benefits our club has to offer. "
        />
        <ExploreComponent
          image={Photo2}
          heading="Shop"
          text="Ready to dive into the world of ceramics? Become a member today and gain access to all the benefits our club has to offer. "
        />
      </div>
    </div>
  );
}
