import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div
          onClick={handleMenu}
          className={`bg-black ${
            isMenuOpen ? "flex" : "hidden"
          } opacity-40 w-full h-screen absolute`}
        ></div>
        <div className="flex mx-4 mt-4 justify-center gap-2 items-center">
          <svg
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
        <div className="flex mt-4 justify-center items-center space-x-5 mx-4">
          <svg
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
          } z-20 flex-col absolute bg-white h-screen w-[85%]`}
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

              <ul className="mt-10 lg:mt-0 flex flex-col mb-4 lg:mb-0 lg:flex-row justify-center items-start">
                <li className="text-lg text-[#101010] font-medium font-inter w-full py-3 rounded-sm mb-2 px-5 bg-[#F4F4F4]">
                  Home
                </li>
                <li className="text-lg text-[#101010] font-medium font-inter w-full py-3 rounded-sm mb-2 px-5 bg-[#F4F4F4]">
                  Classes
                </li>
                <li className="text-lg text-[#101010] font-medium font-inter w-full py-3 rounded-sm mb-2 px-5 bg-[#F4F4F4]">
                  Shop
                </li>
                <li className="text-lg text-[#101010] font-medium font-inter w-full py-3 rounded-sm mb-2 px-5 bg-[#F4F4F4]">
                  Contacts
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
