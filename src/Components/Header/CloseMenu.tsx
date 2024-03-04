import CloseIcon from "./Icons/Close.svg";

export default function CloseMenu(props: { onClick: () => void }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="text-3xl text-[#414141]">Ceramic</h3>
      <img
        src={CloseIcon}
        className="cursor-pointer"
        onClick={props.onClick}
        alt=""
      />
    </div>
  );
}
