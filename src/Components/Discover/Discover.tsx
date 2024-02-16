import Image from "./Image.png";

export default function Discover() {
  return (
    <div className="w-full h-screen lg:max-w-[900px] mx-auto">
      <div className="mx-5">
        <h3 className="text-5xl font-archivo uppercase mb-3">
          discover more ceramics for your home{" "}
        </h3>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <p className="text-[#535353]">
            Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form.
          </p>
          <br />
          <p>
            Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form.
          </p>
        </div>

        <img className="mt-10 md:h-[52vh] rounded-xl w-full object-cover" src={Image} alt="" />
      </div>
    </div>
  );
}
