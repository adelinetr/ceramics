import Product from "./Product";
import Image1 from "./01.png";

export default function Shop() {

  return (
    <section className="w-full h-screen my-12">
      <div className="mx-5 flex flex-col justify-center items-center">
        <h3 className="font-archivo text-4xl mb-9 lg:text-5xl">Shop</h3>
        <Product image={Image1} />

      </div>
    </section>
  );
}
