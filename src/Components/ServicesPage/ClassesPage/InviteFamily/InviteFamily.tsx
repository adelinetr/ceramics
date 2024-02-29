import Counter from "../../../Homepage/Shop/Counter";
import Image1 from "./Image1.png";
import InputComponent from "./InputComponent";
import Selector from "./Selector";

export default function InviteFamily() {
  return (
    <section className="max-w-[1300px] mx-auto">
      <div className="h-fit w-fit py-32 flex mx-auto justify-center items-center lg:space-x-10">
        <div className="hidden lg:block">
          <img
            className="w-[400px] lg:w-[600px] h-[60vh] rounded-lg object-cover"
            src={Image1}
            alt=""
          />
        </div>
        <div className="mx-5 lg:mx-0 w-[100%] lg:w-fit">
          <div>
            <h4 className="text-5xl lg:text-5xl text-[#1d1d1d] lg:mt-3 lg:text-[3rem] font-archivo mb-3">
              Invite your family and friends
            </h4>
            <p className="text-[#535353]  lg:w-[70%] mt-6 font-archivo font-light">
              Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam
              nam. In cum scelerisque egestas laoreet.{" "}
            </p>
          </div>
          <div>
            <div className="flex flex-col my-6 lg:flex-row space-y-4 lg:space-y-0  lg:mb-0 lg:space-x-4">
              <InputComponent placeholder="First Name" />
              <InputComponent placeholder="Last Name" />
            </div>
            <div className="flex space-x-4 mt-7">
              <span className="mt-1 font-inter text-[#535353]">
                Amount of People
              </span>
              <Counter />
            </div>
            <div className="font-inter">
              <Selector />
              <button className="mt-10 w-full lg:w-fit uppercase font-archivo border bg-[#424242] text-white px-16 py-3.5 lg:py-2 rounded-lg">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
