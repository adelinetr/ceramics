export default function FooterLink(props: {name:string}) {
  return (
    <li>
      <a
        className="text-[#505050] hover:text-black transition-all duration-200"
        href="./"
      >
        {props.name}
      </a>
    </li>
  );
}
