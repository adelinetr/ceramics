import { Link } from "react-router-dom";

export default function RegularLink(props: { linkName: string; link: string }) {
  return (
    <li className="text-lg lg:text-base cursor-pointer hover:bg-[#E9E7E7] duration-200 transition-all text-[#101010] font-medium font-inter w-full py-3 lg:py-2 rounded-sm mb-2 px-5 ">
      <Link to={props.link}>{props.linkName}</Link>
    </li>
  );
}
