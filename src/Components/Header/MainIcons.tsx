import ProfileIcon from "./Icons/Profile.svg";
import CartIcon from "./Icons/ShoppingCart.svg";

export default function MainIcons() {
  return (
    <div className="flex mt-2 justify-center items-center space-x-5 mx-4">
      <img src={ProfileIcon} alt="" className="cursor-pointer" />
      <img src={CartIcon} className="cursor-pointer" alt="" />
    </div>
  );
}
