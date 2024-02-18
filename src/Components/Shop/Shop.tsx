import Product from "./Product";
import Image1 from "./01.png";

export default function Shop() {
  return (
    <section className="w-full bg-[#F6F6F6] h-screen py-12">
      <div className="mx-5 flex flex-col justify-center items-center">
        <h3 className="font-archivo text-4xl mb-9 lg:text-5xl lg:hidden">
          Shop
        </h3>

        <div className="flex justify-center items-center space-x-20">
          <Product image={Image1} />
          <div className="hidden lg:flex flex-col space-y-5">
            <div className="w-3 h-3 bg-[#393939] rounded-full"></div>
            <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
            <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
