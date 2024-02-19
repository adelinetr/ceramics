import Image from './01.png'

export default function Newsletter() {
  return (
    <section className="w-full h-screen flex flex-col justify-center lg:max-w-[1000px] xl:max-w-[1300px] mx-auto">
      <div className="mx-5 lg:flex lg:flex-row items-center justify-center">
        <div className="mt-2">
          <h3 className="text-5xl text-center lg:text-left">Subscribe to our newsletter</h3>
          <p className="mt-5 text-[#535353] lg:w-[50%]">
            Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form.
          </p>
          <div className="flex flex-col w-full mt-6 space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
            <input className="border px-3 py-2 focus:outline-none lg:h-[5vh] rounded-lg lg:w-[60%]" type="text" placeholder="Enter your email" name="" id="" />
            <button className="border py-2 hover:shadow-xl transition-all duration-200 rounded-lg px-6 font-archivo uppercase bg-[#232323] text-white">Subscribe</button>
          </div>
        </div>

        <div>
          <img className='rounded-lg md:rounded-none mt-6 h-[46vh] lg:h-[80vh] xl:h-[60vh] w-full object-cover' src={Image} alt="" />
        </div>
      </div>
    </section>
  );
}
