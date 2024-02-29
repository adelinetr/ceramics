import Counter from "../../../Homepage/Shop/Counter";
import Image1 from "./Image1.png";
import InputComponent from "./InputComponent";
import Selector from "./Selector";

export default function InviteFamily() {
  return (
    <section>
      <div className="h-fit py-32 flex justify-center items-center lg:space-x-10">
        <div>
          <img
            className="w-[400px] h-[60vh] rounded-lg object-cover"
            src={Image1}
            alt=""
          />
        </div>
        <div>
          <div>
            <h4 className="text-3xl mt-3 lg:text-[3rem] font-archivo mb-3">
              Invite your family and friends
            </h4>
            <p className="text-[#535353] lg:w-[70%] mt-6 font-archivo font-light">
              Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam
              nam. In cum scelerisque egestas laoreet.{" "}
            </p>
          </div>
          <div>
            <div className="flex space-x-4">
              <InputComponent placeholder="First Name" />
              <InputComponent placeholder="Last Name" />
            </div>
            <div className="flex space-x-4 mt-2">
              <span className="mt-1 font-inter text-[#535353]">
                Amount of People
              </span>
              <Counter />
            </div>
            <div className="font-inter">
                <Selector />
                <button className="mt-10 uppercase font-archivo border bg-[#424242] text-white px-16 py-1.5 rounded-lg">Book</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
