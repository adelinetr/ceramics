export default function FooterSubscription() {
  return (
    <div className="mx-5 lg:hidden xl:flex lg:items-start mt-20 lg:mt-0 flex flex-col justify-center items-center lg:ml-24">
      <h3 className="text-4xl font-archivo text-center mb-2 lg:text-2xl">
        Subscribe to our newsletter
      </h3>
      <div className="flex flex-col w-full mt-6 space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
        <input
          className="border px-3 py-2 focus:outline-none lg:h-[4vh] rounded-lg lg:w-[14vw]"
          type="text"
          placeholder="Enter your email"
          name=""
          id=""
        />
        <button className="border py-1 hover:shadow-xl lg:text-sm transition-all duration-200 rounded-lg px-6 font-archivo uppercase bg-[#232323] text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}
