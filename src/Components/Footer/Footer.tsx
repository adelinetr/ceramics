import FooterSubscription from './FooterSubscription';
import Image from './Image.png'
import FooterLink from './Link';

export default function Footer() {
  return (
    <footer className="h-fit pb-20 lg:pb-0 lg:pt-0 bg-[#EAEAEA] pt-12 border-t border-[#8F8F8F]">
      <div className='flex flex-col lg:flex-row justify-center items-center lg:max-w-fit mx-auto lg:space-x-20'>
        <div className="flex flex-col mx-5 lg:mx-0 lg:max-w-[250px] justify-center items-center lg:items-start">
          <h3 className="text-3xl font-archivo font-medium text-[#333333]">Ceramic</h3>
          <span className="font-archivo w-[90%] mt-2 lg:text-xs lg:w-[90%] text-[#535353]">
            Ceramics Club strives to provide a space for creative individuals.
          </span>
        </div>
        <div className='mx-0 flex flex-col lg:flex-row justify-center items-center space-y-8 mt-10 lg:mt-0 lg:gap-16'>
          <img className='w-full h-[32vh] object-cover lg:w-[280px] lg:h-[h-40vh]' src={Image} alt="" />
          <div className='flex flex-row justify-center items-start lg:pb-6 space-x-20 mx-auto py-6 lg:py-0'>
            <ul className='space-y-6 lg:space-y-3 text-lg lg:text-sm font-archivo'>
                <span className='font-archivo text-xl font-semibold'>Ceramic</span>
                <FooterLink name='About Ceramics' />
                <FooterLink name='Join the club' />
                <FooterLink name='Team' />
                <FooterLink name='Contacts' />
            </ul>
            <ul className='space-y-7 text-lg lg:space-y-3  lg:text-sm font-archivo'>
                <span className='font-archivo font-semibold text-xl'>Services</span>
                <FooterLink name='Pottery Classes' />
                <FooterLink name='Events' />
                <FooterLink name='Shop' />
            </ul>
          </div>
        </div>
        <FooterSubscription />
      </div>
    </footer>
  );
}
