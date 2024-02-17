import { useState } from "react";

export default function Product(props: { image: string }) {
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
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 lg:max-w-[1100px] md:mt-8 justify-center items-center">
      <div className="mb-5 w-[80vw] sm:w-[50%] md:w-[80%]">
        <img
          className="rounded-xl w-full md:w-[400px] h-[40vh] md:h-[65vh] object-cover"
          src={props.image}
          alt=""
        />
      </div>

      <div>
        <div className="flex text-3xl md:text-4xl text-[#2f2f2f] mb-3 font-archivo justify-between items-center">
          <h3>Vase</h3>
          <span>39,99€</span>
        </div>
        <p className="font-archivo lg:mt-5 text-[#535353]">
          Ceramics Club strives to provide a space for creative individuals who
          have a passion for pottery or an interest in learning more about the
          art form.
        </p>
        <form>
          <div className="flex relative mt-8  mb-4 items-center border border-[#00000030] rounded-lg max-w-[8rem]">
            <button
              id="decrement-btn"
              onClick={(e) => chooseAmount(e, false)}
              type="button"
              className="rounded-s-md px-3"
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
              className=" h-8 border-none placeholder:text-xl placeholder:text-black text-center w-12 outline-none"
              placeholder={`${amount}`}
            />
            <button
              id="increment-btn"
              onClick={(e) => chooseAmount(e, true)}
              className="rounded-r-md h-8 px-3 "
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

        <div className="flex flex-col lg:mt-20 lg:flex-row lg:space-x-8 lg:space-y-0 space-y-5">
          <button className="border font-inter border-[#6C6C6C] rounded-md px-6 py-3 lg:px-12">
            Add to Cart
          </button>
          <button className="flex  justify-center items-center gap-3 border border-[#B5464D] bg-[#B5464D] hover:bg-[#CE6369] font-inter duration-200 transition-all text-white rounded-md px-6 lg:px-12 py-3 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.57 5.44C20.4866 6.36024 21.0012 7.60616 21.0012 8.905C21.0012 10.2038 20.4866 11.4498 19.57 12.37L12 20L4.42999 12.37C3.74923 11.6846 3.28576 10.8137 3.09759 9.86623C2.90943 8.91874 3.00493 7.9368 3.37214 7.04333C3.73935 6.14985 4.36195 5.38455 5.16201 4.84321C5.96207 4.30188 6.90403 4.00857 7.86999 4C9.16163 4.00784 10.3979 4.52536 11.31 5.44C11.576 5.70322 11.8078 5.99888 12 6.32C12.1922 5.99888 12.424 5.70322 12.69 5.44C13.1394 4.98405 13.6749 4.62199 14.2655 4.37486C14.856 4.12774 15.4898 4.00047 16.13 4.00047C16.7702 4.00047 17.404 4.12774 17.9945 4.37486C18.5851 4.62199 19.1206 4.98405 19.57 5.44V5.44Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
}
