import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="w-full flex flex-col justify-center mx-auto">
      <div className="lg:flex news-img h-screen lg:h-[70vh] lg:flex-row mx-auto items-center justify-center">
        <div className="mt-2 mx-5 flex flex-col">
          <h3 className="text-5xl text-center">Subscribe to our newsletter</h3>
          <p className="mt-5 text-[#535353] lg:w-[50%] lg:text-center lg:mx-auto">
            Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form.
          </p>
          <div className="flex flex-col w-[90%] lg:w-[60%] mx-auto mt-12 space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
            <input className="border px-3 py-2 focus:outline-none lg:h-[4vh] rounded-lg w-full mx-auto" type="text" placeholder="Enter your email" name="" id="" />
            <button className="border py-1.5 hover:shadow-xl transition-all duration-200 rounded-lg px-6 font-archivo uppercase bg-[#232323] text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
