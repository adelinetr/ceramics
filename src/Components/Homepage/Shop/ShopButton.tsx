export default function ShopButton(props: {className:string, name:string, icon:string }) {
  return (
    <button className={props.className}>
      <img src={props.icon} alt="" />
      {props.name}
    </button>
  );
}


