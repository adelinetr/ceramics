import Image from './image.png'

export default function PotteryClub() {
  return (
    <section className="w-full h-fit my-40 lg:max-w-[1200px] mx-auto flex flex-col justify-center items-center">
      <div className='mx-5 flex flex-col justify-center items-center md:flex-row-reverse'>
        <div className='mb-8'>
        <button className='hidden mb-5 md:block border border-[#B4A483] mt-3 rounded-lg text-xl md:text-base uppercase py-2 w-full md:w-fit px-12 hover:bg-[#B4A483] hover:text-white transition-all duration-300 text-[#B4A483]'>Join the Club</button>
          <h3 className='text-5xl text-center md:text-left mb-4 font-normal text-[#515151] font-archivo'>Pottery Club</h3>
          <p className='text-[#535353] w-[80%] md:w-[60%] mx-auto md:ml-0 text-center md:text-left font-archivo font-light mb-2'>
            Ceramics Club strives to provide a space for creative individuals
            who have a passion for pottery or an interest in learning more about
            the art form.
          </p>
          <button className='border md:hidden border-[#B4A483] mt-3 rounded-full text-xl lg:text-base uppercase py-2 w-full md:w-fit px-12 hover:bg-[#B4A483] hover:text-white transition-all duration-300 text-[#B4A483]'>Join the Club</button>
        </div>

        <div className='md:mx-12'>
            <img className='rounded-xl md:w-[80vw] h-[70vh] object-cover' src={Image} alt="" />
        </div>
      </div>
    </section>
  );
}
