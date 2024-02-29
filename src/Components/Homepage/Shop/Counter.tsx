import { useState } from "react";

export default function Counter(){
    const [amount, setAmount] = useState(1);

    const chooseAmount = (
      event: React.MouseEvent<HTMLButtonElement>,
      increment: boolean
    ) => {
      event.preventDefault();
      setAmount((prevAmount) =>
        increment ? prevAmount + 1 : Math.max(prevAmount - 1, 0)
      );
    };
    return(
        <form>
        <div className="flex bg-white relative mt-0 mx-auto lg:ml-0 mb-8 items-center border border-[#00000030] rounded-lg max-w-[8rem]">
          <button
            id="decrement-btn"
            onClick={(e) => chooseAmount(e, false)}
            type="button"
            className="rounded-s-md px-3 bg-white"
          >
            <svg
              className="w-3 h-8  text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            className="h-8 border-none placeholder:text-xl placeholder:text-black text-center w-12 outline-none"
            placeholder={`${amount}`}
          />
          <button
            id="increment-btn"
            onClick={(e) => chooseAmount(e, true)}
            className="rounded-r-md h-8 px-3 bg-white"
          >
            <svg
              className="w-3 h-6 py-1 text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </form>
    )
}