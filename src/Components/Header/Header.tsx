import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Arrow from './Arrow.svg'
import CloseIcon from './Close.svg'
import MenuIcon from './Menu.svg'
import ProfileIcon from './Profile.svg'
import CartIcon from './ShoppingCart.svg'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openServices, setServices] = useState(false)

  const handleServices = () => {
    setServices(!openServices)
  } 

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div>
      <div className="flex justify-between h-[8vh]">
        <div onClick={handleMenu} 
        className={`bg-black ${isMenuOpen ? "flex" : "hidden"} 
        opacity-40 w-full z-20 h-screen absolute`}></div>

        <div className="flex mx-4 mt-4 justify-center gap-2 items-center xl:mx-12">
          <img src={MenuIcon} className="cursor-pointer" onClick={handleMenu} alt="" />
          <h3 className="text-3xl font-archivo text-[#414141]">Ceramic</h3>
        </div>

        <div className="flex mt-4 justify-center items-center space-x-5 mx-4 xl:mx-12">
          <img src={ProfileIcon} alt="" className="cursor-pointer" />
          <img src={CartIcon} className="cursor-pointer" alt="" />
        </div>
        
        <div
          id="menu"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } z-20 flex-col absolute bg-white h-screen w-[85%] lg:w-[40%]`}
        >
          <CSSTransition
            in={isMenuOpen}
            data-aos="fade-right"
            data-aos-duration="500"
            timeout={400}
            classNames="menu"
            unmountOnExit
          >
            <nav className="mt-10 lg:mt-8 mx-6">

              <div className="flex flex-row justify-between items-center">
                <h3 className="text-3xl text-[#414141]">Ceramic</h3>
                <img src={CloseIcon} className="cursor-pointer" onClick={handleMenu} alt="" />
              </div>

              <ul className="mt-10 flex flex-col mb-4 justify-center items-start">
                <li className="text-lg lg:text-base cursor-pointer hover:bg-[#E9E7E7] duration-200 transition-all text-[#101010] font-medium font-inter w-full py-3 lg:py-2 rounded-sm mb-2 px-5 ">
                  <Link to="/">Home</Link>
                </li>

                <li className="text-lg lg:text-base  flex flex-col text-[#101010] duration-200 transition-all font-medium font-inter w-full my-2 rounded-sm">
                  <div onClick={handleServices} className="flex cursor-pointer hover:bg-[#E9E7E7] w-full py-3 lg:py-2 px-5 rounded-sm justify-between items-center">
                    <span>Services</span>
                    <img src={Arrow} className={`${openServices ? 'rotate-90 duration-200 transition-all ease-in-out' : 'rotate-0 duration-200 transition-all ease-in-out'}`} alt="" />
                  </div>
                  <div className={`${openServices ? 'flex bg-[#f7f7f7] rounded-lg mt-2 pointer-default px-5 flex-col items-start justify-start' : 'hidden'}`}>
                    <ul className="space-y-6 my-4 font-light lg:text-base pointer-default font-archivo text-[#5c5c5c]">
                      <li>
                        <Link to="/classes" className="hover:text-black hover:font-normal duration-200 transition-all">Pottery Classes</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-black hover:font-normal duration-200 transition-all">Events</Link>
                      </li>
                      <li>
                        <a href="./" className="hover:text-black hover:font-normal duration-200 transition-all">Studio Access</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="text-lg lg:text-base  text-[#101010] cursor-pointer hover:bg-[#E9E7E7] duration-200 transition-all font-medium font-inter w-full py-3 lg:py-2 rounded-sm mb-2 px-5 ">
                  <a href="/">Shop</a>
                </li>
                
                <li className="text-lg lg:text-base  text-[#101010] cursor-pointer hover:bg-[#E9E7E7] duration-200 transition-all font-medium font-inter w-full py-3 lg:py-2 rounded-sm mb-2 px-5 ">
                  <a href="/">Contacts</a>
                </li>
              </ul>

              <div className="space-y-2 lg:flex justify-center items-center lg:space-x-2 lg:space-y-0">
                <button className="w-full bg-[#2E2E2E] text-white font-archivo text-lg font-light py-2.5 lg:text-base rounded-md">
                  Log in
                </button>
                <button className="w-full border border-[#2E2E2E] text-[#2E2E2E] font-archivo text-lg lg:text-base  font-normal py-2.5 rounded-md">
                  Sign Up
                </button>
              </div>
            </nav>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
