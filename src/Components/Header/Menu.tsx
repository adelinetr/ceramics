import MenuIcon from "./Icons/Menu.svg";

export default function MenuComponent(props: {
  onClick: () => void;
  state: boolean;
}) {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`bg-black ${props.state ? "flex" : "hidden"} 
        opacity-40 w-full z-20 h-screen absolute`}
      ></div>
      <div className="flex mx-4 mt-4 justify-center gap-2 items-center xl:mx-12">
        <img
          src={MenuIcon}
          className="cursor-pointer"
          onClick={props.onClick}
          alt=""
        />
        <h3 className="text-3xl font-archivo text-[#414141]">Ceramic</h3>
      </div>
    </>
  );
}
