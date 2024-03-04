export default function Button(props: {name:string, className: string}) {
  return (
    <button className={`w-full ${props.className} font-archivo text-lg font-light py-2.5 lg:text-base rounded-md`}>
      {props.name}
    </button>
  );
}
