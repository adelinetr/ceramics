interface ActiveClassProps {
  onClick: () => void;
  className: string;
  isActive: boolean;
  name: string;
  index: number;
}

export default function ActiveClassComponent(props: ActiveClassProps) {
  return (
    <div>
      <h4
        onClick={props.onClick}
        className={`text-xl w-max ${props.className} cursor-pointer ${
          props.isActive ? "relative" : "text-[#B1B1B1]"
        }`}
      >
        {props.name}
        {props.isActive && (
          <span className="absolute top-[2.15em] left-0 w-full border-b-[3px] border-black"></span>
        )}
      </h4>
    </div>
  );
}
