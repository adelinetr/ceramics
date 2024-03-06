export default function Button(props: {name:string, className: string, icon?: string, iconClass?: string}) {
  return (
    <button className={`w-full ${props.className} font-archivo flex justify-center text-lg font-light py-2 rounded-md`}>
      <img className={props.iconClass} src={props.icon} alt="" /> 
      {props.name}
    </button>
  );
}
