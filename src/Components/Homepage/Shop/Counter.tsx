import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setCounter(counter => counter + 1);
  }
  const decrement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
  }

  return (
    <form>
      <div className="flex bg-white relative mt-0 mx-auto lg:ml-0 mb-5 items-center border border-[#00000030] rounded-lg w-fit">
        <button
          id="decrement-btn"
          onClick={decrement}
          type="button"
          className="rounded-s-md text-lg px-3 mx-0.5 bg-white hover:bg-[#ededed]"
        >
          –
        </button>
        <input
          type="text"
          className="h-8 border-none placeholder:text-base placeholder:text-black text-center w-8 outline-none"
          placeholder={`${counter}`}/>

        <button
          id="increment-btn"
          onClick={increment}
          className="rounded-r-md text-lg px-3 mx-0.5 bg-white hover:bg-[#ededed]">
          +
        </button>
      </div>
    </form>
  );
}
