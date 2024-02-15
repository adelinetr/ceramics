import Photo1 from './images/01.png'
import Photo2 from './images/02.png'

export default function Hero() {
    return(
        <div className='h-[85vh] w-full relative'>
            <div className="font-archivo mt-10 mx-5">
                <h1 className="text-6xl mb-4 text-[#414141]">Exploring the World of Ceramics</h1>
                <p className="text-[#535353] font-light">Ready to dive into the world of ceramics? Become a member today and gain access to all the benefits our club has to offer. </p>
                <div className='hidden'>
                    <img src={Photo1} alt="" />
                </div>
            </div>

            <div className='flex bottom-0 w-[90%] mt-16 relative justify-center items-center mx-5'>
                <img className='rounded-xl w-full h-[430px] object-cover brightness-90' src={Photo2} alt="" />
                <button className='text-white border bottom-12 uppercase font-archivo px-12 text-xl py-2 rounded-full absolute border-white '>Join the club</button>
            </div>

        </div>
    )
}