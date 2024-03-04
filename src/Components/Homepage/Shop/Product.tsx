import Counter from "./Counter";
import ShopButton from "./ShopButton";
import CartIcon from "./CartIcon.svg";
import FavouritesIcon from "./FavouritesIcon.svg";

export default function Product(props: { image: string }) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 lg:max-w-[850px] xl:max-w-[1000px] md:mt-8 justify-center items-center">
      <div className="mb-5 w-[80vw] sm:w-[50%] md:w-fit xl:w-[680px]">
        <img
          className="rounded-xl w-full md:w-[600px] h-[40vh] lg:h-[60vh] md:h-[50vh] object-cover"
          src={props.image}
          alt=""
        />
      </div>

      <div className="w-fit md:w-1/2 lg:w-fit">
        <div className="flex text-3xl md:text-4xl text-[#2f2f2f] mb-3 font-archivo justify-between items-center">
          <h3>Vase</h3>
          <span>39,99€</span>
        </div>
        <p className="font-archivo lg:text-sm lg:w-[80%] lg:mt-5 mb-4 text-[#535353]">
          Ceramics Club strives to provide a space for creative individuals who
          have a passion for pottery or an interest in learning more about the
          art form.
        </p>
        <Counter />

        <div className="flex lg:text-sm flex-col lg:mt-20 lg:flex-row lg:space-x-8 lg:space-y-0 space-y-5">
          <ShopButton
            name="Add to Cart"
            icon={CartIcon}
            className="add-to-cart"
          />
          <ShopButton
            name="Add to Favourites"
            icon={FavouritesIcon}
            className="favourite-button"
          />
        </div>
      </div>
    </div>
  );
}
