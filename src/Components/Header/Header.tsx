import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <div
          onClick={handleMenu}
          className={`bg-black ${
            isMenuOpen ? "flex" : "hidden"
          } opacity-40 w-full z-20 h-screen absolute`}
        ></div>
        <div className="flex mx-4 mt-4 justify-center gap-2 items-center xl:mx-12">
          <svg
            className="cursor-pointer"
            onClick={handleMenu}
            width="50"
            height="53"
            viewBox="0 0 50 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4167 15.4583H39.5834"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M10.4167 26.5H39.5834"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M10.4167 37.5417H39.5834"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <h3 className="text-3xl font-archivo text-[#414141]">Ceramic</h3>
        </div>
        <div className="flex mt-4 justify-center items-center space-x-5 mx-4 xl:mx-12">
          <svg
            className="cursor-pointer"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 20.472C3.65676 17.6542 7.26376 15.9224 11.2367 15.9224C15.2097 15.9224 18.8167 17.6542 21.4735 20.472M16.3551 6.25435C16.3551 9.08115 14.0635 11.3727 11.2367 11.3727C8.40994 11.3727 6.11837 9.08115 6.11837 6.25435C6.11837 3.42756 8.40994 1.13599 11.2367 1.13599C14.0635 1.13599 16.3551 3.42756 16.3551 6.25435Z"
              stroke="#414141"
              stroke-width="1.24082"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            className="cursor-pointer"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1733_107)">
              <path
                d="M2.84033 23.4376C2.84033 24.7267 3.89503 25.7814 5.1841 25.7814H23.9342C25.2233 25.7814 26.278 24.7267 26.278 23.4376V8.20316H20.8926C20.3395 5.20783 17.7127 2.92969 14.5592 2.92969C11.4056 2.92969 8.77884 5.20783 8.22572 8.20316H2.84033V23.4376ZM14.5592 4.10157C17.0641 4.10157 19.1617 5.85822 19.6967 8.20316H9.42162C9.95659 5.85822 12.0543 4.10157 14.5592 4.10157ZM8.1138 9.37504V12.8907H9.28568V9.37504H19.8326V12.8907H21.0045V9.37504H25.1061V23.4376C25.1061 24.0839 24.5805 24.6095 23.9342 24.6095H5.1841C4.5378 24.6095 4.01221 24.0839 4.01221 23.4376V9.37504H8.1138Z"
                fill="#414141"
              />
            </g>
            <defs>
              <clipPath id="clip0_1733_107">
                <rect
                  width="28.1252"
                  height="28.1252"
                  fill="white"
                  transform="translate(0.496582)"
                />
              </clipPath>
            </defs>
          </svg>
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
            <nav className="mt-10 mx-6">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-3xl text-[#414141]">Ceramic</h3>
                <svg
                  className="cursor-pointer"
                  onClick={handleMenu}
                  id="close"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 1L1 20"
                    stroke="#222222"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L20 20"
                    stroke="#222222"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <ul className="mt-10 flex flex-col mb-4 justify-center items-start">
                <li className="text-lg cursor-pointer hover:bg-[#E9E7E7] duration-200 transition-all text-[#101010] font-medium font-inter w-full py-3 rounded-sm mb-2 px-5 ">
                  <a href="/">Home</a>
                </li>
                <li className="text-lg flex flex-col text-[#101010] duration-200 transition-all font-medium font-inter w-full my-2 rounded-sm">
                  <div onClick={handleServices} className="flex cursor-pointer hover:bg-[#E9E7E7] w-full py-3 px-5 rounded-sm justify-between items-center">
                    <span>Services</span>
                    <svg
                      id="arrow"
                      className={`${openServices ? 'rotate-90 duration-200 transition-all ease-in-out' : 'rotate-0 duration-200 transition-all ease-in-out'}`}
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.375 11.25L6.625 6L1.375 0.75"
                        stroke="#505050"
                        stroke-width="1.91667"
                      />
                    </svg>
                  </div>
                  <div className={`${openServices ? 'flex pointer-default px-5 flex-col items-start mt-4 justify-start' : 'hidden'}`}>
                    <ul className="space-y-6 my-4 font-light pointer-default font-archivo text-[#5c5c5c]">
                      <li>
                        <a href="./" className="hover:text-black hover:font-normal duration-200 transition-all">Pottery Classes</a>
                      </li>
                      <li>
                        <a href="./" className="hover:text-black hover:font-normal duration-200 transition-all">Events</a>
                      </li>
                      <li>
                        <a href="./" className="hover:text-black hover:font-normal duration-200 transition-all">Career Opportunities</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="text-lg text-[#101010] cursor-pointer hover:bg-[#E9E7E7] duration-200 transition-all font-medium font-inter w-full py-3 rounded-sm mb-2 px-5 ">
                  <a href="/">Shop</a>
                </li>
                <li className="text-lg text-[#101010] cursor-pointer hover:bg-[#E9E7E7] duration-200 transition-all font-medium font-inter w-full py-3 rounded-sm mb-2 px-5 ">
                  <a href="/">Contacts</a>
                </li>
              </ul>

              <div className="space-y-2">
                <button className="w-full bg-[#2E2E2E] text-white font-archivo text-lg font-light py-2.5 rounded-md">
                  Log in
                </button>
                <button className="w-full border border-[#2E2E2E] text-[#2E2E2E] font-archivo text-lg font-normal py-2.5 rounded-md">
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
