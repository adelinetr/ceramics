import Product from "./Product";
import Image1 from "./01.png";

export default function Shop() {
  return (
    <section className="w-full h-fit py-12 lg:py-40">
      <div className="mx-5 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-20">
          <Product
            description="Ceramics Club strives to provide a space for creative individuals who have a passion for pottery or an interest in learning more about the art form."
            name="Vase"
            price="39,99$"
            image={Image1}
          />
        </div>
      </div>
    </section>
  );
}
