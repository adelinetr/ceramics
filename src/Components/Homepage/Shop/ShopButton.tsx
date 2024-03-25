interface ShopButtonProps {
  className: string;
  name: string;
  icon: string;
}

export default function ShopButton(props: ShopButtonProps) {
  const {className, name, icon} = props;

  return (
    <button className={className}>
      <img src={icon} alt="" />
      {name}
    </button>
  );
}
