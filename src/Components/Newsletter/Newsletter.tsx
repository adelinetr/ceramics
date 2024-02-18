import Image from './01.png'

export default function Newsletter() {
  return (
    <section className="w-full h-screen flex flex-col justify-center">
      <div className="mx-5">
        <div className="mt-2">
          <h3 className="text-5xl text-center">Subscribe to our newsletter</h3>
          <p className="mt-5 text-[#535353]">
            Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form.
          </p>
          <div className="flex flex-col w-full mt-6 space-y-3">
            <input className="border px-3 py-2 rounded-lg" type="text" placeholder="Enter your email" name="" id="" />
            <button className="border py-2 rounded-lg font-archivo uppercase bg-[#232323] text-white">Subscribe</button>
          </div>
        </div>

        <div>
          <img className='rounded-lg mt-6 h-[46vh] w-full object-cover' src={Image} alt="" />
        </div>
      </div>
    </section>
  );
}
