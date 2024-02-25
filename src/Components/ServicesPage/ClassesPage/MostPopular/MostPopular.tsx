import ChooseClass from "./ChooseClass";

export default function MostPopular() {
  return (
    <section>
      <div className="h-screen flex flex-col justify-start items-center">
        <h3 className="text-4xl mb-20">Most Popular Classes</h3>
        <ChooseClass />
      </div>
    </section>
  );
}
