import { Link } from "react-router-dom";

export default function ServicesLink(props: {
  link: string;
  linkName: string;
}) {
  return (
    <li>
      <Link
        to={props.link}
        className="hover:text-black hover:font-normal duration-200 transition-all"
      >
        {props.linkName}
      </Link>
    </li>
  );
}
