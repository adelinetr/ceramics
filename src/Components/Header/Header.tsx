import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import MainIcons from "./MainIcons";
import MenuComponent from "./Menu";
import CloseMenu from "./CloseMenu";
import NavLinks from "./Navigation/NavLinks";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header className="flex justify-between h-[8vh]">
        <MenuComponent state={isMenuOpen} onClick={handleMenu} />
        <MainIcons />
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
            <nav className="mt-10 z-40 lg:mt-8 mx-6">
              <CloseMenu onClick={handleMenu} />
              <NavLinks />
              <div className="space-y-2 lg:flex justify-center items-center lg:space-x-2 lg:space-y-0">
                <Button name="Log in" className="bg-[#2E2E2E] text-white" />
                <Button name="Sign Up" className="border border-[#2E2E2E]" />
              </div>
            </nav>
          </CSSTransition>
        </div>
      </header>
    </>
  );
}
