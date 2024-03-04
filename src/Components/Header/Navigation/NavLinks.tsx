import RegularLink from "./RegularLink";
import DropdownLink from "./DropdownLink";

export default function NavLinks() {
  return (
    <ul className="mt-10 flex flex-col mb-4 justify-center items-start">
      <RegularLink linkName="Home" link="/" />
      <DropdownLink />
      <RegularLink linkName="Shop" link="/shop" />
      <RegularLink linkName="Contacts" link="/contacts" />
    </ul>
  );
}
